import { ChangeEvent, useRef } from "react";
import { dispatch, editBackgroundColor } from "../../../../editor";
import styles from "./BackgroundEditorInput.module.css"
import { useBackgroundColor } from "./useBackgroundColor";


function BackgroundEditorInput() {
    
    const inputColor = useRef<HTMLInputElement>(null);

    useBackgroundColor(
        inputColor
    )

    return(
        <input ref={inputColor} className={styles.backgroundeditorinput} type="color" id="head" name="color" defaultValue="#ffffff"/>
    )
}

export default BackgroundEditorInput;