import { ArtObj, CanvasElement } from '../../../CardMakerTypes'
import styles from './ArtObjElement.module.css'

type ArtObjElementProps = {
    artObjElement: CanvasElement,
}

function ArtObjElement(props: ArtObjElementProps) {
    const style = {
        top: props.artObjElement.posY,
        left: props.artObjElement.posX,
        width: props.artObjElement.width,
        height: props.artObjElement.height,
        src: props.artObjElement.artObj?.type
    }

    return(
        <img src={style.src} alt="" className={styles.element} style={style} width={style.width} height={style.height}/>
    )
}

export default ArtObjElement;