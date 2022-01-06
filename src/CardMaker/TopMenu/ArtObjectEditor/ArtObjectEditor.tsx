import styles from './ArtObjectEditor.module.css'
import ArtObjectListButton from './ArtObjectListButton/ArtObjectListButton';
import ArtObjectSizeField from './ArtObjectSizeField/ArtObjectSizeField';

function ArtObjectEditor() {
    return(
        <div className={styles.artobjecteditor}>
            <ArtObjectListButton />
            <div className={styles.artobjecteditorsizefield}>
                <ArtObjectSizeField fieldName={'Высота'} />
                <div className={styles.mul}>X</div>
                <ArtObjectSizeField fieldName={'Ширина'} />
            </div>            
            <div className={styles.artobjecteditorbottom}><div className={styles.artobjecteditordescription}>Арт-объекты</div></div>
        </div>
    )
}

export default ArtObjectEditor;