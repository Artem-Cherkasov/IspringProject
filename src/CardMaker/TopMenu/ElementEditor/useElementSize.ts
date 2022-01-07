import { RefObject, useEffect } from "react";
import { dispatch, editElementSize, getCardMaker } from "../../../editor";


let width: number;
let height: number

export function useElementSize(
    elementId: number,
    inputHeight: RefObject<HTMLInputElement>,
    inputWidth: RefObject<HTMLInputElement>): void {

        useEffect(() => {

            const fieldHeight = inputHeight.current;
            const fieldWidth = inputWidth.current;

            function handlerOnBlur(): void {
                if (fieldWidth && fieldHeight) { 
                    const id: number = elementId;   
                    width = Number(fieldWidth.value)
                    height = Number(fieldHeight.value)
                    if (width < 50) width = 50
                    if (height < 50) height = 50
                    if (width > getCardMaker().canvas.width) width = getCardMaker().canvas.width - getCardMaker().canvas.elementList[elementId].posX
                    if (height > getCardMaker().canvas.width) height = getCardMaker().canvas.height - getCardMaker().canvas.elementList[elementId].posY
                    dispatch(editElementSize, {id: id, width: width, height: height})
                    fieldHeight.value = String(getCardMaker().canvas.elementList[elementId].height)
                    fieldWidth.value = String(getCardMaker().canvas.elementList[elementId].width) 
                }
            }
    
            if (fieldWidth) fieldWidth.addEventListener("change", handlerOnBlur);
            if (fieldHeight) fieldHeight.addEventListener("change", handlerOnBlur);
    
            return () => {
                if (fieldWidth) fieldWidth.removeEventListener("change", handlerOnBlur);
                if (fieldHeight) fieldHeight.removeEventListener("change", handlerOnBlur);
            };
        }, [elementId, inputWidth, inputHeight, dispatch, editElementSize])
    }