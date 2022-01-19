import { useRef } from 'react';
import { dispatch, newCanvas } from '../../../editor';
import styles from './CanvasEditor.module.css'
import { useCanvasSize } from './useCanvasSize';
import { useTemplate } from './useTemplate';

function CanvasEditor() {

    const inputWidth = useRef<HTMLInputElement>(null);
    const inputHeight = useRef<HTMLInputElement>(null);
    const newcanvasButton = useRef<HTMLButtonElement>(null);
    const selectElement = useRef<HTMLSelectElement>(null);

    useCanvasSize(
        inputWidth,
        inputHeight,
    );

    useTemplate(
        selectElement  
    )

    const createNewCard = () => {
        const result = window.confirm("Несохраннёные данные удалаться, продолжить?");
        if (result) dispatch(newCanvas, {}) 
    }

    return(
        <div className={styles.canvaseditor}>
            <div className={styles.canvaseditorsize}>
                <input type="number" className={styles.canvaseditorfield} placeholder="Высота" min="0" ref={inputHeight}/>
                <div className={styles.mult}>X</div>
                <input type="number" className={styles.canvaseditorfield} placeholder="Ширина" min="0" ref={inputWidth}/>            
            </div>
            <button onClick={() => createNewCard()} ref={newcanvasButton} className={styles.newcanvas}>Новый холст</button>
            <select ref={selectElement} className={styles.templateselect}>
                <option value="">Выберите шаблон</option>
                <option value="NewYearCard">Новый год</option>
                <option value="BirthDayCard">День рождения</option>
            </select>
            <div className={styles.canvaseditorbottom}><div className={styles.canvaseditordescription}>Холст</div></div>
        </div>
    )
}

export default CanvasEditor;