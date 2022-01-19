import { RefObject, useEffect } from "react";
import { addCanvasInHistory, dispatch, editSizeText, getCardMaker } from "../../../editor";


export function useNewTextSize(inputSizeField: RefObject<HTMLInputElement>) : void {

    useEffect(() => {

        const textSizeField = inputSizeField.current

        function handlerOnChange(): void {
            if (textSizeField) {
                const id = getCardMaker().selectedElements[0]
                const size = textSizeField.value
                dispatch(addCanvasInHistory, getCardMaker().canvas)
                dispatch(editSizeText, {id: id, size: size})
            }
        }

        if (textSizeField) textSizeField.addEventListener("change", handlerOnChange)
        return () => {
            if (textSizeField) textSizeField.removeEventListener("change", handlerOnChange)  
        }
    }, [inputSizeField, dispatch, editSizeText])
}