import { ChangeEvent } from 'react';
//import { dispatch, editFilterColor, editFilterTransparency } from '../../../../editor';
import styles from './FilterEditorField.module.css'

let trancperancy: number

function FilterEditorField() {
    const handlerOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        const inputTrancperancy = event.target as HTMLInputElement;
        trancperancy = +inputTrancperancy.value / 10
 //       dispatch(editFilterTransparency, trancperancy)
    }
    return(
        <input onChange={handlerOnChange} type="range" min="0" max="10" defaultValue="5" className={styles.filtereditorfield}/>
    )
}

export default FilterEditorField;