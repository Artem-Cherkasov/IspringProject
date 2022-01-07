import { useRef } from 'react'
import { CanvasElement, ImgConst } from '../../../CardMakerTypes'
import { useDragnDrop } from '../useDragnDrop';
import { useSelectedElements } from '../useSelectedElement';
import styles from './ImgElement.module.css'

type ImgElementProps = {
    imgElement: ImgConst,
}

function ImgElement(props: ImgElementProps) {

    const id = props.imgElement.id
    const posX = props.imgElement.posX
    const posY = props.imgElement.posY
    const imgElement = useRef<HTMLImageElement>(null);

    useSelectedElements(
        id,
        imgElement,
    )

    useDragnDrop(
        id,
        imgElement,
        posX,
        posY
    )

    const style = {
        top: props.imgElement.posY,
        left: props.imgElement.posX,
        width: props.imgElement.width,
        height: props.imgElement.height,
        src: props.imgElement.img.src
    }

    return(
        <img ref={imgElement} src={style.src} alt="" className={styles.element} style={style}/>
    )
}

export default ImgElement;