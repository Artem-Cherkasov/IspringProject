import { url } from "inspector";
import { RefObject, useEffect } from "react";
import { getCardMaker } from "../../../editor";


export function useJSONExport(exportJSONButton: RefObject<HTMLButtonElement>): void {

    useEffect(() => {

        const jsonButton = exportJSONButton.current

        function handlerOnClick(): void {
            const cardMaker = getCardMaker()
            const json = JSON.stringify({
                ...cardMaker,
                canvas: {
                    ...cardMaker.canvas
                }
                
            })
            const exportFile = new Blob([json], { type: 'application/json' })
            const fileLink = document.createElement("a")
            fileLink.href = URL.createObjectURL(exportFile)
            fileLink.download = "Открытка.json";
            fileLink.click();
        }

        if (jsonButton) jsonButton.addEventListener("click", handlerOnClick)
        return () => {
            if (jsonButton) jsonButton.removeEventListener("click", handlerOnClick)
        }
    }, [exportJSONButton])
}