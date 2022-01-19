import { useRef } from 'react'
import { CanvasElement, ImgConst } from '../../../CardMakerTypes'
import { getCardMaker } from '../../../editor';
import { useDragnDrop } from '../useDragnDrop';
import { useResize } from '../useResize';
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
    const resizeElement = useRef<HTMLDivElement>(null)
    const selection = getCardMaker().selectedElements[0] === id ? styles.selected : "" 

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

    useResize(
        id,
        resizeElement
    )

    const style = {
        top: props.imgElement.posY,
        left: props.imgElement.posX,
        width: props.imgElement.width,
        height: props.imgElement.height,
        src: props.imgElement.img.src
    }

    return(
        <div ref={imgElement} className={styles.element + " " + selection}  style={style}>
            <img id='img' src={style.src} alt="" style={style}/>
            <div ref={resizeElement} className={styles.dot}></div>
        </div>
    )
}

export default ImgElement;