import { RefObject, useEffect } from 'react';
import { addCanvasInHistory, dispatch, editBackgroundColor, getCardMaker } from '../../../../editor';

export function useBackgroundColor(inputColor: RefObject<HTMLInputElement>): void {

    useEffect(() => {

        const currentColor = getCardMaker().canvas.background.color
        const fieldColor = inputColor.current;

        if (fieldColor) fieldColor.value = String(currentColor)

        function handlerOnChange() {
            if (fieldColor) {
                const color: string = String(fieldColor.value)
                dispatch(addCanvasInHistory, getCardMaker().canvas)
                dispatch(editBackgroundColor, color)
            }
        }

        if (fieldColor) fieldColor.addEventListener("change", handlerOnChange);

        return () => {
            if (fieldColor) fieldColor.removeEventListener("change", handlerOnChange)
        };
    }, [inputColor, dispatch, editBackgroundColor])

}