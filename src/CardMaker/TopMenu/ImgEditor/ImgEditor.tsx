import { useRef, useState } from "react";
import { getCardMaker } from "../../../editor";
import styles from "./ImgEditor.module.css"
import ImgSizeField from "./ImgSizeField/ImgSizeField";
import InsertImgButton from "./InsertImgButton/InsertImgButton";
import InsertingFromPC from "./InsertingFromPC/InsertingFromPC";
import SrcInsertField from "./SrcInsertField/SrcInsertField";
import { useElementSize } from "./useElementSize";
import { useImgFile } from "./useImgFile";



function ImgEditor() {

    const elementID = getCardMaker().selectedElements[0]
    const inputHeight = useRef<HTMLInputElement>(null);
    const inputWidth = useRef<HTMLInputElement>(null);
    const inputFile = useRef<HTMLInputElement>(null);


    useElementSize(
        elementID,
        inputHeight,
        inputWidth
    )

    useImgFile(
        inputFile
    )

    return (
        <div className={styles.imgeditor}>
            <div className={styles.imgeditortop}>
                <SrcInsertField />
                <InsertImgButton />
            </div>
            <div className={styles.imgeditorsizefield}>
                <input ref={inputHeight} type="number" className={styles.imgsizefield} placeholder="Высота" min={0} defaultValue={200}></input> 
                <div className={styles.multiplication}>X</div>
                <input ref={inputWidth} type="number" className={styles.imgsizefield} placeholder="Ширина" min={0} defaultValue={300}></input>
                <input type="file" ref={inputFile} className={styles.insertingfromPCbutton} accept=".jpg,.png,.jpeg"></input>
            </div>
            <div className={styles.imgeditorbottom}><div className={styles.imgeditordescription}>Изображения</div></div>
        </div>        
    )
}

export default ImgEditor;