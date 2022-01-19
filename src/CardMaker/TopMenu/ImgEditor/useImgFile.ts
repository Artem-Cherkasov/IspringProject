import { RefObject, useEffect } from "react";
import { addCanvasInHistory, createImgElement, dispatch, getCardMaker } from "../../../editor";
import { imgReader } from "./imgInsert";

export function useImgFile(inputFile: RefObject<HTMLElement>): void {

    
    useEffect(() => {

        const fieldFile = inputFile.current

        async function handlerOnChange(event: Event): Promise<void> {
            const elementId = getCardMaker().canvas.elementList[getCardMaker().canvas.elementList.length - 1].id + 1
            const target = event.target as HTMLInputElement;
            const files = target.files as FileList;
            const fileInfo = await imgReader(files[0])
            if (fileInfo.width > getCardMaker().canvas.width) fileInfo.width = getCardMaker().canvas.width / 2
            if (fileInfo.height > getCardMaker().canvas.height) fileInfo.height = getCardMaker().canvas.height / 2
            dispatch(addCanvasInHistory, getCardMaker().canvas)
            dispatch(createImgElement, {newId: elementId, newSrc: fileInfo.src, width: fileInfo.width, height: fileInfo.height})
        }

        if (fieldFile) fieldFile.addEventListener("change", handlerOnChange);
        return () => {
            if (fieldFile) fieldFile.removeEventListener("change", handlerOnChange);
        }
    }, [inputFile, dispatch, createImgElement])
}