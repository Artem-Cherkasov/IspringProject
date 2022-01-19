import { useRef } from "react";
import styles from "./ImgEditor.module.css"
import { useImgFile } from "./useImgFile";



function ImgEditor() {

    const inputFile = useRef<HTMLInputElement>(null);

    useImgFile(
        inputFile
    )

    return (
        <div className={styles.imgeditor}>

            <div className={styles.imgeditorsizefield}>
                <input type="file" ref={inputFile} className={styles.insertingfromPCbutton} accept=".jpg,.png,.jpeg"></input>
            </div>
            <div className={styles.imgeditorbottom}><div className={styles.imgeditordescription}>Изображения</div></div>
        </div>        
    )
}

export default ImgEditor;