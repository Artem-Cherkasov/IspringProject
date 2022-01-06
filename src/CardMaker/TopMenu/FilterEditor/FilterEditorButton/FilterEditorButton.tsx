import { ChangeEvent } from 'react';
//import { dispatch, editFilterColor } from '../../../../editor';
import styles from './FilterEditorButton.module.css'

function FilterEditorButton() {
    const handlerOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        const inputColor = event.target as HTMLInputElement;
  //      dispatch(editFilterColor, inputColor.value)
    }
    return(
        <input onChange={handlerOnChange} className={styles.filtereditorbutton} type="color" id="head" name="color" defaultValue="#ffffff"/>
    )
}

export default FilterEditorButton;