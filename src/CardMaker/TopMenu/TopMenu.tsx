import React from 'react';
import ReactDOM from 'react-dom';
import ArtObjectEditor from './ArtObjectEditor/ArtObjectEditor';
import BackgroundEditor from './BackgroundEditor/BackgroundEditor';
import CanvasEditor from './CanvasEditor/CanvasEditor';
import ElementEditor from './ElementEditor/ElementEditor';
import ExportMenu from './ExportMenu/ExportMenu';
import FilterEditor from './FilterEditor/FilterEditor';
import ImgEditor from './ImgEditor/ImgEditor';
import TextEditor from './TextEditor/TextEditor'
import styles from './TopMenu.module.css'

function TopMenu() {
    return(
        <div className={styles.pagetoolbar}>
            <TextEditor />
            <ImgEditor />
            <ElementEditor />
            <ArtObjectEditor />
            <BackgroundEditor />
            <FilterEditor />
            <CanvasEditor />
            <ExportMenu />
        </div>  
    );
}

export default TopMenu;