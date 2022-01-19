import { RefObject, useEffect } from "react";
import { addCanvasInHistory, dispatch, editFontFamily, getCardMaker } from "../../../editor";


export function useNewFont(
    id: number,
    selectFont: RefObject<HTMLSelectElement>): void {

        useEffect(() => {
            
            const fieldElement = selectFont.current

            function handlerOnChange(event: Event): void {
                if (fieldElement) {
                    const target = event.target as HTMLOptionElement;
                    dispatch(addCanvasInHistory, getCardMaker().canvas)
                    dispatch(editFontFamily, { id: id, newFont: target.value })
                }
            }

            if (fieldElement) fieldElement.addEventListener("change", handlerOnChange)

            return () => {
                if (fieldElement) fieldElement.removeEventListener("change", handlerOnChange)
            }            
        }, [id, selectFont, dispatch, editFontFamily])
    }