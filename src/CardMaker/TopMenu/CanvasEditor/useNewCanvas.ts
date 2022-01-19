import { Ref, RefObject, useEffect } from "react";
import { addCanvasInHistory, dispatch, getCardMaker, newCanvas } from "../../../editor";


export function useNewCanvas(newCanvasButton: RefObject<HTMLButtonElement>): void {

    useEffect(() => {
        
        const canvasButton = newCanvasButton.current

        function handleOnClick() {
            dispatch(addCanvasInHistory, getCardMaker().canvas)
            dispatch(newCanvas, {})
        }

        if (canvasButton) canvasButton.addEventListener("click", handleOnClick)
        return () => {
            if (canvasButton) canvasButton.removeEventListener("click", handleOnClick)
        }
    }, [newCanvasButton])
}