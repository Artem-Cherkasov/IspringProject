import { useRef } from 'react';
import { getCardMaker } from '../../../editor';
import AddTextButton from './AddTextButton/AddTextButton';
import BoldTextButton from './BoldTextButton/BoldTextButton';
import ItalicTextButton from './ItalicTextButton/ItalicTextButton';
import styles from './TextEditor.module.css'
import UnderlineTextButton from './UnderlineTextButton/UnderlineTextButton';
import { useNewFont } from './useNewFont';
import { useNewTextColor } from './useNewTextColor';
import { useNewTextSize } from './useNewTextSize';

function TextEditor() {

    const selectElement = useRef<HTMLSelectElement>(null);
    const id = getCardMaker().selectedElements[0]
    const inputSizeField = useRef<HTMLInputElement>(null);
    const colorTextField = useRef<HTMLInputElement>(null);

    useNewFont(
        id,
        selectElement
    )

    useNewTextSize(
        inputSizeField 
    )

    useNewTextColor(
        colorTextField 
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
                <input ref={inputSizeField} type="number" className={styles.sizefield} defaultValue={30}></input> 
                <div className={styles.textstylebuttons}>
                    <input ref={colorTextField} type="color" className={styles.textcolor} defaultValue="#000000"/>
                    <BoldTextButton /> 
                    <ItalicTextButton />
                    <UnderlineTextButton />
                </div>          
            </div>
            <div className={styles.texteditorbottom}><div className={styles.texteditordescription}>Текст</div></div>
        </div>  
    );
}

export default TextEditor;