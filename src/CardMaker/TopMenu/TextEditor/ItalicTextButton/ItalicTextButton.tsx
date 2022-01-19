import { getCardMaker, dispatch, setItalicText } from "../../../../editor"
import styles from "./ItalicTextButton.module.css"


function ItalicTextButton() {

    function handlerOnClick() {
        const id = getCardMaker().selectedElements[0]
        dispatch(setItalicText, {id: id, isItalic: true})
    }

    function handlerOnDoubleClick() {
        const id = getCardMaker().selectedElements[0]
        dispatch(setItalicText, {id: id, isItalic: false})
    }

    return(
        <button onClick={handlerOnClick} onDoubleClick={handlerOnDoubleClick} className={styles.stylebutton}>I</button>
    )
}

export default ItalicTextButton