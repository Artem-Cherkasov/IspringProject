import { useRef } from "react"
import { exportInImage } from "./exportInImage";
import styles from "./ExportMenu.module.css"
import { useJSONExport } from "./useJSONExport";

function ExportMenu() {

    const exportJSONButton = useRef<HTMLButtonElement>(null);

    useJSONExport(
        exportJSONButton
    )

    function handlerOnPngButtonCLick(): void {
        exportInImage("/png")
    }

    function handlerOnJpegButtonCLick(): void {
        exportInImage("/jpeg")
    }


    return(
        <div className={styles.exportmenu}>
            <button className={styles.exportbutton} ref={exportJSONButton}>В JSON</button>
            <button  value={"png"} onClick={handlerOnPngButtonCLick} className={styles.exportbutton}>В PNG</button>
            <button  value={"jpeg"} onClick={handlerOnJpegButtonCLick} className={styles.exportbutton}>В JPEG</button>
            <div className={styles.exportmenubottom}><div className={styles.exportmenudescription}>Экспорт</div></div>
        </div>
    )
}

export default ExportMenu