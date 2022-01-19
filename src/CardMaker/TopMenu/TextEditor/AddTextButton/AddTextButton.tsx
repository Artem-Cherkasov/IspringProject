import { useRef } from "react";
import { addCanvasInHistory, createTextElement, dispatch, getCardMaker } from "../../../../editor";
import { useTemplate } from "../../CanvasEditor/useTemplate";
import styles from "./AddTextButton.module.css";
import { useAddNewText } from "./useAddNewText";

function AddTextButton() {

    function onButtonClick() {
        const id: number = getCardMaker().canvas.elementList[getCardMaker().canvas.elementList.length - 1].id
        dispatch(addCanvasInHistory, getCardMaker().canvas)
        dispatch(createTextElement, id + 1)
    }
    return (
        <button onClick={onButtonClick} className={styles.addtextbutton}>Добавить текст</button>
    )
}

export default AddTextButton;