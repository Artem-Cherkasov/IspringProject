import { createTextElement, dispatch, getCardMaker } from "../../../../editor";
import styles from "./AddTextButton.module.css";

function AddTextButton() {

    const id: number = getCardMaker().canvas.elementList.length

    function onButtonClick() {
        dispatch(createTextElement, id + 1)
    }
    return (
        <button onClick={onButtonClick} className={styles.addtextbutton}><div className={styles.buttontext}>Добавить текст</div></button>
    )
}

export default AddTextButton;