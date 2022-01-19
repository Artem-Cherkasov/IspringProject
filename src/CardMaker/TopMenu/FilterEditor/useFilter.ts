import { RefObject, useEffect } from "react";
import { addCanvasInHistory, dispatch, editFilter, getCardMaker } from "../../../editor";


export function useFilter(
    inputColor: RefObject<HTMLInputElement>,
    inputOpacity: RefObject<HTMLInputElement>): void {

        useEffect(() => {

            const currentColor = getCardMaker().canvas.currentFilter.color
            const fieldColor = inputColor.current;
            const fieldOpacity = inputOpacity.current;

            if (fieldColor) fieldColor.value = String(currentColor)

            function handlerOnChange(): void {
                if (fieldColor && fieldOpacity) {
                    const color: string = String(fieldColor.value)
                    const opacity: number = Number(fieldOpacity.value) / 10
                    dispatch(addCanvasInHistory, getCardMaker().canvas)
                    dispatch(editFilter, {newColor: color, newTransperancy: opacity})
                }
            }

            if (fieldColor) fieldColor.addEventListener("change", handlerOnChange);
            if (fieldOpacity) fieldOpacity.addEventListener("change", handlerOnChange);

            return () => {
                if (fieldColor) fieldColor.removeEventListener("change", handlerOnChange);
                if (fieldOpacity) fieldOpacity.removeEventListener("change", handlerOnChange);
            };
        }, [inputColor, inputOpacity, dispatch, editFilter])
    }