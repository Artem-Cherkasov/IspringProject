import styles from './ElementEditor.module.css'
import ElementEditorButton from './ElementEditorButton/ElementEditorButton';

function ElementEditor() {
    return(
        <div className={styles.elementeditor}>
            <ElementEditorButton buttonName={'Выделить элементы'} />
            <ElementEditorButton buttonName={'Удалить выбраные'} />
            <div className={styles.elementeditorbottom}><div className={styles.elementeditordescription}>Выделить</div></div>
        </div>
    )
}

export default ElementEditor;