import { useRef } from 'react';
import styles from './FilterEditor.module.css'
import FilterEditorButton from './FilterEditorButton/FilterEditorButton';
import FilterEditorField from './FilterEditorField/FilterEditorField';
import { useFilter } from './useFilter';

function FilterEditor() {

    const inputColor = useRef<HTMLInputElement>(null);
    const inputOpacity = useRef<HTMLInputElement>(null);

    useFilter(
        inputColor,
        inputOpacity
    );

    return(
        <div className={styles.filtereditor}>
            <input ref={inputColor} className={styles.filtereditorbutton} type="color" id="head" name="color"/>
            <input ref={inputOpacity} type="range" min="0" max="10" className={styles.filtereditorfield} defaultValue={0}/>
            <div className={styles.filtereditorbottom}><div className={styles.filtereditordescription}>Фильтр</div></div>
        </div>
    )
}

export default FilterEditor;