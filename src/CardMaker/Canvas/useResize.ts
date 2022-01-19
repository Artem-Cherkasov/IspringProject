import { RefObject, useEffect } from "react";
import { addCanvasInHistory, dispatch, editElementSize, getCardMaker } from "../../editor";

let minSize = 50

export function useResize(
    id: number,
    resizeElement: RefObject<HTMLDivElement>): void {

        let defaultPosX: number
        let defaultPosY: number

        let newWidth: number = 300
        let newHeight: number = 200

        useEffect(() => {

            function handlerOnMouseDown(event: MouseEvent): void {
                event.stopImmediatePropagation();
                defaultPosX = event.pageX
                defaultPosY = event.pageY
                document.addEventListener("mousemove", handlerOnMouseMove);
                document.addEventListener("mouseup", handlerOnMouseUp);
            }
    
            function handlerOnMouseMove(event: MouseEvent): void {
                let deltaX = event.pageX - defaultPosX
                let deltaY = event.pageY - defaultPosY
            
    
                if (event.shiftKey) {
                    const avgDelta = (deltaX + deltaY) / 2;
                    newWidth = getCardMaker().canvas.elementList[id].width + avgDelta
                    newHeight = getCardMaker().canvas.elementList[id].height + avgDelta
                } else {
                    newWidth = getCardMaker().canvas.elementList[id].width + deltaX
                    newHeight = getCardMaker().canvas.elementList[id].height + deltaY
                }
    
                if (newHeight < minSize) {
                    newHeight = minSize
                }
    
                if (newWidth < minSize) {
                    newWidth = minSize
                }
            }
    
            function handlerOnMouseUp(): void {
                if (newWidth && newHeight) {
                    dispatch(addCanvasInHistory, getCardMaker().canvas)
                    dispatch(editElementSize, {id: id, width: newWidth, height: newHeight})
                }
                document.removeEventListener("mousemove", handlerOnMouseMove);
                document.removeEventListener("mouseup", handlerOnMouseUp);
            }

            const resize = resizeElement;
            resize.current?.addEventListener("mousedown", handlerOnMouseDown);
            return () => {
                resize.current?.removeEventListener("mousedown", handlerOnMouseDown);
            }
        }, [id, resizeElement, dispatch, editElementSize]);
}