import { RefObject, useEffect } from "react";
import { dispatch, editTxt } from "../../../editor";


export function useNewTxt(
    id: number,
    textElement: RefObject<HTMLDivElement>): void {

        useEffect(() => {

            const currentElement = textElement.current;

            function handlerOnDoubleClick() {
                if (currentElement) currentElement.setAttribute("contenteditable", "true")
                if (currentElement) currentElement.focus();
            }

            function handlerOnBlur() {
                if (currentElement) {
                    currentElement.setAttribute("contenteditable", "false")
                    const content: string = currentElement.innerHTML;
                    dispatch(editTxt, {id: id, text: content})   
                }
              }

              if (currentElement) currentElement.addEventListener("dblclick", handlerOnDoubleClick)
              if (currentElement) currentElement.addEventListener("blur", handlerOnBlur)

              return () => {
                if (currentElement) currentElement.removeEventListener("dblclick", handlerOnDoubleClick)
                if (currentElement) currentElement.removeEventListener("blur", handlerOnBlur)
              }
        }, [id, textElement, dispatch, editTxt])
    }