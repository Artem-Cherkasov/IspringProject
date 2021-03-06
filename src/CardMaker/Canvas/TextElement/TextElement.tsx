import { useRef, useState } from 'react'
import { CanvasElement, TextConst } from '../../../CardMakerTypes'
import { getCardMaker } from '../../../editor'
import { useDragnDrop } from '../useDragnDrop'
import { useSelectedElements } from '../useSelectedElement'
import styles from './TextElement.module.css'
import { useNewTxt } from './useNewTxt'



type TextElementProps = {
    textElement: TextConst,
}

function TextElement(props: TextElementProps) {

    const id = props.textElement.id
    const posX = props.textElement.posX
    const posY = props.textElement.posY
    const textElement = useRef<HTMLDivElement>(null);
 

    useSelectedElements(
        id,
        textElement,
    )

    useDragnDrop(
        id,
        textElement,
        posX,
        posY
    )

    useNewTxt(
        id,
        textElement
    )

    const style = {
        top: props.textElement.posY,
        left: props.textElement.posX,
        fontSize: props.textElement.size + "px",
        fontWeight: props.textElement.bold ? 900 : 400,
        textDecoration: props.textElement.underline ? 'underline' : '',
        fontStyle: props.textElement.italic ? 'italic' : '',
        fontFamily: props.textElement.fontFamily,
        color: props.textElement.color
    }

    return(
        <div id='text' ref={textElement} contentEditable={false} className={styles.element} style={style} dangerouslySetInnerHTML={{ __html: props.textElement.text }}></div>
    );
}

export default TextElement;