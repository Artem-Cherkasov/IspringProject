import styles from './ImgSizeField.module.css'

type ImgSizeFieldProps = {
    size: string,
}

function ImgSizeField(props: ImgSizeFieldProps) {
    return (
        <input className={styles.imgsizefield} placeholder={props.size}></input>
    )
}

export default ImgSizeField;