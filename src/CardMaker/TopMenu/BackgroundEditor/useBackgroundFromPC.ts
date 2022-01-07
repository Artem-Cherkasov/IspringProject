import { RefObject, useEffect } from "react";
import { addBackgroundImg, dispatch, getCardMaker } from "../../../editor";
import { imgReader } from "../ImgEditor/imgInsert";


export function useBackgroundFromPC(inputFile: RefObject<HTMLElement>): void {

    useEffect(() => {

        const fieldFile = inputFile.current

        async function handlerOnChange(event: Event): Promise<void> {
            const target = event.target as HTMLInputElement;
            const files = target.files as FileList;
            const fileInfo = await imgReader(files[0])
            fileInfo.height = getCardMaker().canvas.height
            fileInfo.width = getCardMaker().canvas.width
            dispatch(addBackgroundImg, fileInfo.src)
        }

        if (fieldFile) fieldFile.addEventListener("change", handlerOnChange);
        return () => {
            if (fieldFile) fieldFile.removeEventListener("change", handlerOnChange);
        }
    }, [inputFile, dispatch, addBackgroundImg])
}