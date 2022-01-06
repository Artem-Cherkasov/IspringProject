import styles from './ElementEditorButton.module.css'

type ElementEditorButtonProps = {
    buttonName: string,
}

function ElementEditorButton(props: ElementEditorButtonProps) {
    return(
        <button className={styles.elementeditorbutton}>{props.buttonName}</button>
    )
}

export default ElementEditorButton;