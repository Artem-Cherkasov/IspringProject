import { RefObject, useEffect } from 'react';
import { addCanvasInHistory, dispatch, editCanvasSize, getCardMaker } from '../../../editor';

let width: number;
let height: number

export function useCanvasSize(
    inputWidth: RefObject<HTMLInputElement>,
    inputHeight: RefObject<HTMLInputElement>): void {
    
    const currentWidth =  getCardMaker().canvas.width
    const currentHeight =  getCardMaker().canvas.height

    useEffect(() => {

        const fieldWidth = inputWidth.current;
        const fieldHeight = inputHeight.current;

        if (fieldWidth) fieldWidth.value = String(currentWidth)
        if (fieldHeight) fieldHeight.value = String(currentHeight)

        function handleOnChange(): void {
            if (fieldWidth && fieldHeight) {    
                width = Number(fieldWidth.value);
                height = Number(fieldHeight.value);
                if (width < 500) width = 500
                if (height < 500) height = 500
                if (width > 1800) width = 1800
                if (height > 900) height = 900
                dispatch(addCanvasInHistory, getCardMaker().canvas)
                dispatch(editCanvasSize, {newWidth: width, newHeight: height})
            }
        }

        if (fieldWidth) fieldWidth.addEventListener("change", handleOnChange);
        if (fieldHeight) fieldHeight.addEventListener("change", handleOnChange);

        return () => {
            if (fieldWidth) fieldWidth.removeEventListener("change", handleOnChange);
            if (fieldHeight) fieldHeight.removeEventListener("change", handleOnChange);
        };
    }, [inputWidth, inputHeight, dispatch, editCanvasSize, currentHeight, currentWidth])
}