import {
    CanvasElement,
    Background,
    Filter,
    CanvasUnit,
    CardMakerType
} from "./CardMakerTypes"

let testSetOfArtObj = {
    cloud: "cloud.png"
}

let testArtObj: CanvasElement = {
    id: 3,
    type: "artObj",
    width: 150,
    height: 150,
    posX: 550,
    posY: 440,
    artObj: {
        type: testSetOfArtObj.cloud
    }
}

let testImg: CanvasElement = {
    id: 1,
    type: "img",
    width: 200,
    height: 300,
    posX: 50,
    posY: 50,
    img: {
        src: "https://avatars.mds.yandex.net/get-zen_doc/4368340/pub_601e4da0f2a56f0eaa36a77e_601e9ea75fadcc22a9eec234/scale_1200"
    }
}

let testText: CanvasElement = {
    id: 2,
    type: "text",
    text: "Happy birthday!",
    fontFamily: "Arial",
    color: "#000000",
    width: 150,
    height: 150,
    posX: 0,
    posY: 0,
    size: 30,
    bold: true,
    italic: true,
    underline: true,
}

let zeroElement: CanvasElement = {
    id: 0,
    type: "text",
    text: "",
    fontFamily: "",
    color: "#000000",
    width: 0,
    height: 0,
    posX: 0,
    posY: 0,
    size: 0,
    bold: false,
    italic: false,
    underline: false,
}

let testBackgound: Background = {
    color: "#ffffff",
    src: null,
}

export let testFilter: Filter = {
    color: '#ffffff',
    transparency: 0,
}

export let testCanvas: CanvasUnit = {
    width: 800,
    height: 600,
    currentFilter: testFilter,
    elementList: [zeroElement],
    background: testBackgound,
}

export let testCardMaker: CardMakerType = {
    canvas: testCanvas,
    history: {
        canvasState: [],
        stateId: 0,
    },
    templates: [],
    filterList: [],
    selectedElements: [0]
}

export let standartCanvas: CanvasUnit = {
    width: 800,
    height: 600,
    currentFilter: {
        color: '#ffffff',
        transparency: 0,
    },
    elementList: [zeroElement],
    background: {
        color: '#ffffff',
        src: null,
    },
}

export let standartCardMaker: CardMakerType = {
    canvas: standartCanvas,
    history: {
        canvasState: [],
        stateId: 0,
    },
    templates: [],
    filterList: [],
    selectedElements: [0]
}


