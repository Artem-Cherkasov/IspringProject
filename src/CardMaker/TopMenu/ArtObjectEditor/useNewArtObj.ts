import { RefObject, useEffect } from "react";
import { createArtObjElement, dispatch, getCardMaker } from "../../../editor";

let type: string

export function useNewArtObj(
    id: number,
    selectElement: RefObject<HTMLSelectElement>): void {


        useEffect(() => {

            const fieldElement = selectElement.current

            function handlerOnChange(event: Event): void {
                if (fieldElement) {
                    const target = event.target as HTMLOptionElement;
                    dispatch(createArtObjElement, { newId: id, type: target.value })
                    target.value = ""
                }
            }

            if (fieldElement) fieldElement.addEventListener("change", handlerOnChange)

            return () => {
                if (fieldElement) fieldElement.removeEventListener("change", handlerOnChange)
            }
        }, [id, selectElement, dispatch, createArtObjElement])
    }