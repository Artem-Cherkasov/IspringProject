import { useRef } from 'react';
import styles from './ArtObjectEditor.module.css'
import { useNewArtObj } from './useNewArtObj';

function ArtObjectEditor() {

    const selectElement = useRef<HTMLSelectElement>(null);


    useNewArtObj(
        selectElement
    )
 
    return(
        <div className={styles.artobjecteditor}>
            <div className={styles.objinput}>
                <select id="artObjSelector" ref={selectElement} className={styles.objselect}>
                    <option value="">Выберите арт-объект</option>
                    <option value="cloud">Облако</option>
                    <option value="present">Подарок</option>
                    <option value="сhristmasTree">Ёлка</option>
                </select>      
            </div>
            <div className={styles.artobjecteditorbottom}><div className={styles.artobjecteditordescription}>Арт-объекты</div></div>
        </div>
    )
}

export default ArtObjectEditor;