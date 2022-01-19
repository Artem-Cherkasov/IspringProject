import { RefObject, useEffect } from "react";
import { createTextElement, dispatch, getCardMaker } from "../../../../editor";


export function useAddNewText(addTextButton: RefObject<HTMLButtonElement>): void {

    const newTextButton = addTextButton.current;

    useEffect(() => {

        function handlerOnClick(): void {
            const id: number = getCardMaker().canvas.elementList[getCardMaker().canvas.elementList.length - 1].id
            dispatch(createTextElement, id + 1)
        }

        if (newTextButton) newTextButton.addEventListener("click", handlerOnClick)
        return () => {
            if (newTextButton) newTextButton.removeEventListener("click", handlerOnClick)
        }
    }, [addTextButton, dispatch, createTextElement, newTextButton])
}