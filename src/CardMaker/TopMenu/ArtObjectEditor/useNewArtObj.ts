import { RefObject, useEffect } from "react";
import { addCanvasInHistory, createArtObjElement, dispatch, getCardMaker } from "../../../editor";

export function useNewArtObj(
    selectElement: RefObject<HTMLSelectElement>): void {


        useEffect(() => {

            const fieldElement = selectElement.current

            function handlerOnChange(event: Event): void {
                const id = getCardMaker().canvas.elementList[getCardMaker().canvas.elementList.length - 1].id + 1
                if (fieldElement) {
                    const target = event.target as HTMLOptionElement;
                    dispatch(addCanvasInHistory, getCardMaker().canvas)
                    dispatch(createArtObjElement, { newId: id, type: target.value })
                    target.value = ""
                }
            }

            if (fieldElement) fieldElement.addEventListener("change", handlerOnChange)

            return () => {
                if (fieldElement) fieldElement.removeEventListener("change", handlerOnChange)
            }
        }, [selectElement, dispatch, createArtObjElement])
    }