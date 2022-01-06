import styles from './ArtObjectSizeField.module.css'

type ArtObjectSizeFieldProps = {
    fieldName: string,
}

function ArtObjectSizeField(props: ArtObjectSizeFieldProps) {
    return(
        <input className={styles.artobjectsizefield} placeholder={props.fieldName}></input>
    )
}

export default ArtObjectSizeField;