import { RefObject, useEffect } from 'react';
import { dispatch, editCanvasSize, getCardMaker } from '../../../editor';

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

        function handleOnBlur(): void {
            if (fieldWidth && fieldHeight) {    
                width = Number(fieldWidth.value);
                height = Number(fieldHeight.value);
                if (width < 500) width = 500
                if (height < 500) height = 500
                if (width > 1400) width = 1400
                if (height > 800) height = 800
                dispatch(editCanvasSize, {newWidth: width, newHeight: height})
            }
        }

        if (fieldWidth) fieldWidth.addEventListener("blur", handleOnBlur);
        if (fieldHeight) fieldHeight.addEventListener("blur", handleOnBlur);

        return () => {
            if (fieldWidth) fieldWidth.removeEventListener("blur", handleOnBlur);
            if (fieldHeight) fieldHeight.removeEventListener("blur", handleOnBlur);
        };
    }, [inputWidth, inputHeight, dispatch, editCanvasSize, currentHeight, currentWidth])
}