import { useRef } from "react"
import styles from "./ExportMenu.module.css"
import { useJSONExport } from "./useJSONExport";

function ExportMenu() {

    const exportJSONButton = useRef<HTMLButtonElement>(null);

    useJSONExport(
        exportJSONButton
    )

    return(
        <div className={styles.exportmenu}>
            <button className={styles.exportbutton} ref={exportJSONButton}>В JSON</button>
            <div className={styles.exportmenubottom}><div className={styles.exportmenudescription}>Экспорт</div></div>
        </div>
    )
}

export default ExportMenu