import { getCardMaker, dispatch, setUnderlinedText, addCanvasInHistory } from "../../../../editor"
import styles from "./UnderlineTextButton.module.css"


function UnderlineTextButton() {

    function handlerOnClick() {
        const id = getCardMaker().selectedElements[0]
        dispatch(setUnderlinedText, {id: id, isUnderlined: true})
    }

    function handlerOnDoubleClick() {
        const id = getCardMaker().selectedElements[0]
        dispatch(setUnderlinedText, {id: id, isUnderlined: false})
    }

    return(
        <button onClick={handlerOnClick} onDoubleClick={handlerOnDoubleClick} className={styles.stylebutton}>U</button>
    )
}

export default UnderlineTextButton