import { CardMakerType } from "../../CardMakerTypes"
import { getCardMaker } from "../../editor"
import styles from "./Filter.module.css"


function Filter() {

    const filterStyle = {
        width: getCardMaker().canvas.width,
        height: getCardMaker().canvas.height,
        background: getCardMaker().canvas.currentFilter.color,
        opacity: getCardMaker().canvas.currentFilter.transparency,
    }

    return(
        <div className={styles.filter} style={filterStyle}></div>
    )
}

export default Filter;