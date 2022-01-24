import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import Canvas from './Canvas/Canvas';
import styles from './CardMaker.module.css'
import TopMenu from './TopMenu/TopMenu';
import {testCanvas} from '../TestData';
import { CardMakerType } from '../CardMakerTypes';
import Filter from './Filter/Filter';
import { addCanvasInHistory, dispatch, getCardMaker, Redo, Undo } from '../editor';

type CardMakerProps = {
    cardMaker: CardMakerType,
}

function CardMaker(props: CardMakerProps) {

    function handlerOnUndoClick() {
        if (getCardMaker().history.stateId !== 0) dispatch(Undo, {})
    }
    
    function handlerOnRedoClick() {
        if (getCardMaker().history.stateId !== getCardMaker().history.canvasState.length) dispatch(Redo, {})
    }

    function onKeyDown(event: KeyboardEvent) {
        if (event.ctrlKey && event.code == "KeyZ") {
            if (getCardMaker().history.stateId !== 0) dispatch(Undo, {})
        } else if (event.ctrlKey && event.code == "KeyY") {
            if (getCardMaker().history.stateId !== getCardMaker().history.canvasState.length) dispatch(Redo, {})
        }
      }
    
      useEffect(() => {
        document.title = "CardMaker";
        document.addEventListener("keydown", onKeyDown);
        return() => {
          document.removeEventListener("keydown", onKeyDown);
        };
      }, []);

    return(
        <div className={styles.page}>
            <TopMenu />
            <div className={styles.butons}>
                <button onClick={handlerOnUndoClick}>Назад</button>
                <button onClick={handlerOnRedoClick}>Вперёд</button>
            </div>
            <div className={styles.container}>
                <Canvas cardMaker={props.cardMaker}/>
                <Filter />
            </div>            
        </div>    
    );
}

export default CardMaker;