import React from 'react';
import ReactDOM from 'react-dom';
import Canvas from './Canvas/Canvas';
import styles from './CardMaker.module.css'
import TopMenu from './TopMenu/TopMenu';
import {testCanvas} from '../TestData';
import { CardMakerType } from '../CardMakerTypes';
import Filter from './Filter/Filter';

type CardMakerProps = {
    cardMaker: CardMakerType,
}

function CardMaker(props: CardMakerProps) {
    return(
        <div className={styles.page}>
            <TopMenu />
            <div className={styles.container}>
                <Canvas cardMaker={props.cardMaker}/>
                <Filter />
            </div>            
        </div>    
    );
}

export default CardMaker;