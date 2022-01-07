import { RefObject, useEffect } from "react";
import { dispatch, editFontFamily } from "../../../editor";


export function useNewFont(
    id: number,
    selectFont: RefObject<HTMLSelectElement>): void {

        useEffect(() => {
            
            const fieldElement = selectFont.current

            function handlerOnChange(event: Event): void {
                if (fieldElement) {
                    const target = event.target as HTMLOptionElement;
                    dispatch(editFontFamily, { id: id, newFont: target.value })
                }
            }

            if (fieldElement) fieldElement.addEventListener("change", handlerOnChange)

            return () => {
                if (fieldElement) fieldElement.removeEventListener("change", handlerOnChange)
            }            
        }, [id, selectFont, dispatch, editFontFamily])
    }