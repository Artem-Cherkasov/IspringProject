import { useRef } from 'react';
import styles from './CanvasEditor.module.css'
import { useCanvasSize } from './useCanvasSize';



function CanvasEditor() {

    const inputWidth = useRef<HTMLInputElement>(null);
    const inputHeight = useRef<HTMLInputElement>(null);

    useCanvasSize(
        inputWidth,
        inputHeight,
    );

    return(
        <div className={styles.canvaseditor}>
            <div className={styles.canvaseditorsize}>
                <input className={styles.canvaseditorfield} placeholder="Высота" min="0" ref={inputHeight}/>
                <div className={styles.mult}>X</div>
                <input className={styles.canvaseditorfield} placeholder="Ширина" min="0" ref={inputWidth}/>            
            </div>
            <div className={styles.canvaseditorbottom}><div className={styles.canvaseditordescription}>Холст</div></div>
        </div>
    )
}

export default CanvasEditor;