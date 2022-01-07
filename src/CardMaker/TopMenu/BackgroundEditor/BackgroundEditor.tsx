import { useRef } from 'react';
import styles from './BackgroundEditor.module.css'
import BackgroundEditorButton from './BackgroundEditorButton/BackgroundEditorButton';
import BackgroundEditorInput from './BackgroundEditorInput/BackgroundEditorInput';
import { useBackgroundFromPC } from './useBackgroundFromPC';

function BackgroundEditor() {

    const inputFile = useRef<HTMLInputElement>(null);

    useBackgroundFromPC(
        inputFile
    )

    return(
        <div className={styles.backgroundeditor}>
            <BackgroundEditorInput />
            <input type="file" ref={inputFile} className={styles.insertingfromPCbutton} accept=".jpg,.png,.jpeg"></input>
            <div className={styles.backgroundeditorbottom}><div className={styles.backgroundeditordescription}>Фон</div></div>
        </div>
    )
}

export default BackgroundEditor;