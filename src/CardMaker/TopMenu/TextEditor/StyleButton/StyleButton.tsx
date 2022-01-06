import styles from "./StyleButton.module.css"

type ButtonProps = {
    src: string,
    alt: string,
}

function StyleButton(props: ButtonProps) {
    return(
        <div className={styles.stylebutton}><div className={styles.text}>{props.src}</div></div>
    )
}

export default StyleButton;