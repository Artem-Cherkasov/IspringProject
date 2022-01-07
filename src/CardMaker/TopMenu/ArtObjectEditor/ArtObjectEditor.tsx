import { type } from 'os';
import { useRef } from 'react';
import { createArtObjElement, dispatch, getCardMaker } from '../../../editor';
import styles from './ArtObjectEditor.module.css'
import ArtObjectListButton from './ArtObjectListButton/ArtObjectListButton';
import ArtObjectSizeField from './ArtObjectSizeField/ArtObjectSizeField';
import { useNewArtObj } from './useNewArtObj';

function ArtObjectEditor() {

    const selectElement = useRef<HTMLSelectElement>(null);
    const id = getCardMaker().canvas.elementList[getCardMaker().canvas.elementList.length - 1].id + 1

    useNewArtObj(
        id,
        selectElement
    )
 
    return(
        <div className={styles.artobjecteditor}>
            <div className={styles.objinput}>
                <select id="artObjSelector" ref={selectElement} className={styles.objselect}>
                    <option value="">Выберите арт-объект</option>
                    <option value="cloud">Облако</option>
                    <option value="sun">Солнце</option>
                </select>      
            </div>
            <div className={styles.artobjecteditorbottom}><div className={styles.artobjecteditordescription}>Арт-объекты</div></div>
        </div>
    )
}

export default ArtObjectEditor;