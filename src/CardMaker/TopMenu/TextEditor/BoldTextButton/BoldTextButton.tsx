import { getCardMaker, dispatch, setBoldText, addCanvasInHistory } from "../../../../editor"
import styles from "./BoldTextButton.module.css"

function BoldTextButton() {

    function handlerOnClick() {
        const id = getCardMaker().selectedElements[0]
        dispatch(setBoldText, {id: id, isBold: true})
    }

    function handlerOnDoubleClick() {
        const id = getCardMaker().selectedElements[0]
        dispatch(setBoldText, {id: id, isBold: false})
    }

    return(
        <button onClick={handlerOnClick} onDoubleClick={handlerOnDoubleClick} className={styles.stylebutton}>B</button>
    )
}

export default BoldTextButton