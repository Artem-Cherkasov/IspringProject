import { RefObject, useEffect } from "react";
import { addCanvasInHistory, applyTemplate, dispatch, getCardMaker, newCanvas } from "../../../editor";


export function useTemplate(selectElement: RefObject<HTMLSelectElement>): void {

    useEffect(() => {

        const currentElement = selectElement.current

        function handlerOnChange(event: Event): void {
            if (currentElement) {
                const target = event.target as HTMLOptionElement
                dispatch(addCanvasInHistory, getCardMaker().canvas)
                dispatch(newCanvas, {})
                dispatch(applyTemplate, target.value)
            }
        }

        if (currentElement) currentElement.addEventListener("change", handlerOnChange)
        return () => {
            if (currentElement) currentElement.removeEventListener("change", handlerOnChange)
        }
    }, [selectElement, dispatch, newCanvas, applyTemplate])
}