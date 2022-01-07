import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import { getCardMaker } from '../../../editor';
import AddTextButton from './AddTextButton/AddTextButton';
import StyleButton from './StyleButton/StyleButton';
import styles from './TextEditor.module.css'
import { useNewFont } from './useNewFont';

function TextEditor() {

    const selectElement = useRef<HTMLSelectElement>(null);
    const id = getCardMaker().selectedElements[0]

    useNewFont(
        id,
        selectElement
    )

    return(
        <div className={styles.texteditor}>
            <div className={styles.texteditortop}>
                <select ref={selectElement} className={styles.fontfield}>
                    <option value="">Шрифт</option>
                    <option className={styles.LuxuriousRoman} value="Luxurious Roman">Luxurious Roman</option>
                    <option className={styles.TheNautigal} value="The Nautigal">The Nautigal</option>
                    <option className={styles.Oswald} value="Oswald">Oswald</option>
                </select>      
                <AddTextButton />
            </div>
            <div className={styles.texteditormiddle}>
                <input type="number" className={styles.sizefield} defaultValue={12}></input> 
                <div className={styles.textstylebuttons}>
                    <div className={styles.stylebutton}><div className={styles.text}>B</div></div>
                    <div className={styles.stylebutton}><div className={styles.text}>I</div></div>
                    <div className={styles.stylebutton}><div className={styles.text}>U</div></div>
                </div>          
            </div>
            <div className={styles.texteditorbottom}><div className={styles.texteditordescription}>Текст</div></div>
        </div>  
    );
}

export default TextEditor;