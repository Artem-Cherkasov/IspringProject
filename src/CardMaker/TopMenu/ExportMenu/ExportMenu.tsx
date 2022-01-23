import { useRef } from "react"
import { exportInPNG } from "./exportInPNG";
import styles from "./ExportMenu.module.css"
import { useJSONExport } from "./useJSONExport";

function ExportMenu() {

    const exportJSONButton = useRef<HTMLButtonElement>(null);

    useJSONExport(
        exportJSONButton
    )

    function handlerOnCLick(): void {
        exportInPNG()
    }

    return(
        <div className={styles.exportmenu}>
            <button className={styles.exportbutton} ref={exportJSONButton}>В JSON</button>
            <button onClick={handlerOnCLick} className={styles.exportbutton}>В PNG</button>
            <div className={styles.exportmenubottom}><div className={styles.exportmenudescription}>Экспорт</div></div>
        </div>
    )
}

export default ExportMenu