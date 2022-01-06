import { RefObject, useEffect } from 'react';
import { dispatch, editBackgroundColor, getCardMaker } from '../../../../editor';

export function useBackgroundColor(inputColor: RefObject<HTMLInputElement>): void {

    const currentColor = getCardMaker().canvas.background.color

    useEffect(() => {

        const fieldColor = inputColor.current;

        if (fieldColor) fieldColor.value = String(currentColor)

        function handlerOnChange() {
            if (fieldColor) {
                const color: string = String(fieldColor.value)
                dispatch(editBackgroundColor, color)
            }
        }

        if (fieldColor) fieldColor.addEventListener("change", handlerOnChange);

        return () => {
            if (fieldColor) fieldColor.removeEventListener("change", handlerOnChange)
        };
    }, [inputColor, dispatch, editBackgroundColor, currentColor])

}