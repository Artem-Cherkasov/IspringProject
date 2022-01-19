import { useEffect, RefObject } from 'react';
import { addCanvasInHistory, dispatch, editElementLocation, getCardMaker } from '../../editor';


export function useDragnDrop(
    id: number,
    element: RefObject<HTMLElement>,
    posX: number,
    posY: number): void {

        const currentElement = element.current;

        let defaultPosX: number;
        let defaultPosY: number;

        let newPosX: number;
        let newPosY: number;

        let deltaX: number;
        let deltaY: number;

        function handlerOnMouseDown(event: MouseEvent): void {
            defaultPosX = event.pageX
            defaultPosY = event.pageY
            document.addEventListener("mousemove", hanlerOnMouseMove);
            document.addEventListener("mouseup", handlerOnMouseUp);
        }
        
        function hanlerOnMouseMove(event: MouseEvent): void {
            if (!event.defaultPrevented) {
                deltaX = event.pageX - defaultPosX;
                deltaY = event.pageY - defaultPosY
                newPosX = posX + deltaX
                newPosY = posY + deltaY
                if (currentElement) currentElement.style.left = String(newPosX) + "px"
                if (currentElement) currentElement.style.top = String(newPosY) + "px"
            }
        }

        function handlerOnMouseUp(): void {
            if (newPosX && newPosY) {
                dispatch(addCanvasInHistory, getCardMaker().canvas)
                dispatch(editElementLocation, { id: id, newPosX: newPosX, newPosY: newPosY })
            }
            document.removeEventListener("mousemove", hanlerOnMouseMove);
            document.removeEventListener("mouseup", handlerOnMouseUp);            
        }


        useEffect(() => {
            if (currentElement) currentElement.addEventListener("mousedown", handlerOnMouseDown);
            return() => {
                if (currentElement) currentElement.removeEventListener("mousedown", handlerOnMouseDown)
            }
        })
}