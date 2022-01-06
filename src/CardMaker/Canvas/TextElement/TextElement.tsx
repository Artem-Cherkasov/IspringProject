import { useRef, useState } from 'react'
import { CanvasElement } from '../../../CardMakerTypes'
import { useDragnDrop } from '../useDragnDrop'
import { useSelectedElements } from '../useSelectedElement'
import styles from './TextElement.module.css'



type TextElementProps = {
    textElement: CanvasElement,
}

function TextElement(props: TextElementProps) {

    const id = props.textElement.id
    const posX = props.textElement.posX
    const posY = props.textElement.posY
    const textElement = useRef<HTMLImageElement>(null);

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

    const [editor, changeEditor] = useState(false)

    let div = document.getElementById("test")

    function handlerOnFocus() {
        document.getElementById("textElement")?.focus()
        console.log("abc")
    }

    const style = {
        top: props.textElement.posY,
        left: props.textElement.posX,
        fontSize: props.textElement.text?.size,
        fontWeight: props.textElement.text?.bold ? 700 : 400,
        textDecoration: props.textElement.text?.underline ? 'underline' : 'none',
        fontStyle: props.textElement.text?.italic ? 'italic' : 'none',
        fontFamily: props.textElement.text?.fontFamily,
    }

    return(
        <div ref={textElement} id="test" onDoubleClick={() => { changeEditor(true); setTimeout(function() {div?.focus()}, 0) }} onBlur={() => { changeEditor(false);  }} contentEditable={editor} className={styles.element} style={style}>{props.textElement.text?.text}</div>
    );
}

export default TextElement;