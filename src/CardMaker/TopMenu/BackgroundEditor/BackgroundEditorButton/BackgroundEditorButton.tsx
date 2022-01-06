import styles from './BackgroundEditorButton.module.css'

type BackgroundEditorButtonProps = {
    buttonName: string,
}

function BackgroundEditorButton(props: BackgroundEditorButtonProps) {
    return(
        <button className={styles.backgroundeditorbutton}>{props.buttonName}</button>
    )
}

export default BackgroundEditorButton;