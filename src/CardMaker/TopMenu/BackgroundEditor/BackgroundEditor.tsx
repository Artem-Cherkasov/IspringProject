import styles from './BackgroundEditor.module.css'
import BackgroundEditorButton from './BackgroundEditorButton/BackgroundEditorButton';
import BackgroundEditorInput from './BackgroundEditorInput/BackgroundEditorInput';

function BackgroundEditor() {
    return(
        <div className={styles.backgroundeditor}>
            <BackgroundEditorInput />
            <BackgroundEditorButton buttonName={'Фон с устр-ва'} />
            <div className={styles.backgroundeditorbottom}><div className={styles.backgroundeditordescription}>Фон</div></div>
        </div>
    )
}

export default BackgroundEditor;