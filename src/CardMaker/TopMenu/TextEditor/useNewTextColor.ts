import { RefObject, useEffect } from "react";
import { addCanvasInHistory, dispatch, editTextColor, getCardMaker } from "../../../editor";


export function useNewTextColor(colorTextField: RefObject<HTMLInputElement>): void {

    useEffect(() => {

        const fieldColor = colorTextField.current;

        function handlerOnBlur() {
            if (fieldColor) {
                const id = getCardMaker().selectedElements[0]
                const color: string = String(fieldColor.value)
                dispatch(addCanvasInHistory, getCardMaker().canvas)
                dispatch(editTextColor, { id: id, color: color })
            }
        }

        if (fieldColor) fieldColor.addEventListener("blur", handlerOnBlur)
        return () => {
            if (fieldColor) fieldColor.removeEventListener("blur", handlerOnBlur)
        }
    }, [colorTextField, dispatch, editTextColor])
}