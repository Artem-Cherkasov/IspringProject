import { RefObject, useEffect } from "react";
import { addCanvasInHistory, deleteElement, dispatch, getCardMaker } from "../../../../editor";


export function useDeleteButton(deleteButton: RefObject<HTMLButtonElement>): void {

    const button = deleteButton.current

    useEffect(() => {

        function handlerOnClicK() {
            const id = getCardMaker().selectedElements[0]
            dispatch(addCanvasInHistory, getCardMaker().canvas)
            dispatch(deleteElement, id)
        }

        if (button) button.addEventListener("click", handlerOnClicK)
        return () => {
            if (button) button.removeEventListener("click", handlerOnClicK)
        }
    }, [deleteButton, dispatch, deleteElement, button]) 
}