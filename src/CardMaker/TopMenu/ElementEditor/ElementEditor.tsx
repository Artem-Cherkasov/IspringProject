import { useRef } from 'react';
import { getCardMaker } from '../../../editor';
import styles from './ElementEditor.module.css'
import ElementEditorButton from './ElementEditorButton/ElementEditorButton';
import { useElementSize } from './useElementSize';

function ElementEditor() {

    const elementID = getCardMaker().selectedElements[0]
    const inputHeight = useRef<HTMLInputElement>(null);
    const inputWidth = useRef<HTMLInputElement>(null);

    useElementSize (
        elementID,
        inputHeight,
        inputWidth
    )

    return(
        <div className={styles.elementeditor}>
            <div className={styles.inputfields}>
                <input ref={inputHeight} type="number" className={styles.imgsizefield} placeholder="Высота" min={0} defaultValue={200}></input> 
                    <div className={styles.multiplication}>X</div>
                <input ref={inputWidth} type="number" className={styles.imgsizefield} placeholder="Ширина" min={0} defaultValue={300}></input>
            </div>
            <ElementEditorButton buttonName={'Удалить'} />
            <div className={styles.elementeditorbottom}><div className={styles.elementeditordescription}>Элемент</div></div>
        </div>
    )
}

export default ElementEditor;