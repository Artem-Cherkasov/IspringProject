import styles from "./Canvas.module.css"
import { CanvasUnit, TextUnit, CanvasElement, CardMakerType, TextConst, ImgConst, ArtObjConst} from "../../CardMakerTypes"
import { ReactElement } from "react";
import TextElement from "./TextElement/TextElement";
import ImgElement from "./ImgElement/ImgElement";
import ArtObjElement from "./ArtObjElement/ArtObjElement";
import { dispatch, getCardMaker, Redo, Undo } from "../../editor";

type CanvasProps = {
    cardMaker: CardMakerType,
}

function Canvas(props: CanvasProps) {

    let background: string = "#ffffff"

    
    const color: string | null = props.cardMaker.canvas.background.color
    const src: string | null = props.cardMaker.canvas.background.src;
    if (color) {
        background = color
    } else if (src) {
        background = 'url(' + src + ')'
    }

    const style = {
        width: props.cardMaker.canvas.width,
        height: props.cardMaker.canvas.height,
        background: background,    
    }

    let elementList: ReactElement[] = [];
    props.cardMaker.canvas.elementList.forEach(element => {
        switch(element.type) {
            case "text":
                elementList.push(<TextElement textElement={element as TextConst} />);
                break;
            case 'img':
                elementList.push(<ImgElement imgElement={element as ImgConst} />);
                break;
            case 'artObj':
                elementList.push(<ArtObjElement artObjElement={element as ArtObjConst} />);
                break;
        } 
    });

    function handlerOnUndoClick() {
        if (getCardMaker().history.stateId !== 0) dispatch(Undo, {})
    }
    
    function handlerOnRedoClick() {
        if (getCardMaker().history.stateId !== getCardMaker().history.canvasState.length) dispatch(Redo, {})
    }

    return(
        <div>
            <button onClick={handlerOnUndoClick}>Назад</button>
            <button onClick={handlerOnRedoClick}>Вперёд</button>
            <div className={styles.canvas} style={style} id="canvas">                        
                <div className={styles.element}>{elementList}</div>
            </div>
        </div>
    )
}

export default Canvas;