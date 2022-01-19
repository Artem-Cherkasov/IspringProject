import { RefObject, useEffect } from "react";
import { CanvasElement, CanvasUnit, TextConst } from "../../../CardMakerTypes";
import { dispatch, getCardMaker, setBoldText } from "../../../editor";
import { standartCanvas } from "../../../TestData";


function useBoldText(boldTextButton: RefObject<HTMLButtonElement>): void {

    const styleButton = boldTextButton.current

    useEffect(() => {

        const id = getCardMaker().selectedElements[0]

        function handlerOnClick() {
            dispatch(setBoldText, {id: id, isBold: true})
        }

        function handlerOnDoubleClick() {
            dispatch(setBoldText, {id: id, isBold: false})
        }

        if (styleButton) styleButton.addEventListener("click", handlerOnClick)
        if (styleButton) styleButton.addEventListener("dblclick", handlerOnDoubleClick)
        return () => {
            if (styleButton) styleButton.removeEventListener("click", handlerOnClick)
            if (styleButton) styleButton.removeEventListener("dblclick", handlerOnDoubleClick)
        }
    }, [boldTextButton, dispatch, setBoldText])
}