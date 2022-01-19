import { useRef } from 'react'
import { ArtObjConst, CanvasElement } from '../../../CardMakerTypes'
import { getCardMaker } from '../../../editor'
import { useDragnDrop } from '../useDragnDrop'
import { useResize } from '../useResize'
import { useSelectedElements } from '../useSelectedElement'
import styles from './ArtObjElement.module.css'

type ArtObjElementProps = {
    artObjElement: ArtObjConst,
}

function ArtObjElement(props: ArtObjElementProps) {

    const id = props.artObjElement.id
    const posX = props.artObjElement.posX
    const posY = props.artObjElement.posY
    const artObjElement = useRef<HTMLImageElement>(null)
    const resizeElement = useRef<HTMLDivElement>(null)
    const selection = getCardMaker().selectedElements[0] === id ? styles.selected : "" 

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

    useResize(
        id,
        resizeElement
    )

    const style = {
        top: props.artObjElement.posY,
        left: props.artObjElement.posX,
        width: props.artObjElement.width,
        height: props.artObjElement.height,
        src: props.artObjElement.artObj.type
        
    }

    return(
        <div ref={artObjElement} className={styles.element + " " + selection} style={style}>
            <img id='svg' src={style.src} alt="" style={style} width={style.width} height={style.height}/>
            <div ref={resizeElement} className={styles.dot}></div>
        </div>
    )
}

export default ArtObjElement;