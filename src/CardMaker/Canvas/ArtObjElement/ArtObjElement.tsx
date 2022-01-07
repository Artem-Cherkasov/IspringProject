import { useRef } from 'react'
import { ArtObjConst, CanvasElement } from '../../../CardMakerTypes'
import { useDragnDrop } from '../useDragnDrop'
import { useSelectedElements } from '../useSelectedElement'
import styles from './ArtObjElement.module.css'

type ArtObjElementProps = {
    artObjElement: ArtObjConst,
}

function ArtObjElement(props: ArtObjElementProps) {

    const id = props.artObjElement.id
    const posX = props.artObjElement.posX
    const posY = props.artObjElement.posY
    const artObjElement = useRef<HTMLImageElement>(null);

    useSelectedElements(
        id,
        artObjElement,
    )

    useDragnDrop(
        id,
        artObjElement,
        posX,
        posY
    )

    const style = {
        top: props.artObjElement.posY,
        left: props.artObjElement.posX,
        width: props.artObjElement.width,
        height: props.artObjElement.height,
        src: props.artObjElement.artObj.type
    }

    return(
        <img ref={artObjElement} src={style.src} alt="" className={styles.element} style={style} width={style.width} height={style.height}/>
    )
}

export default ArtObjElement;