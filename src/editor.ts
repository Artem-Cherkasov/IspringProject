import { type } from "os"
import { CardMakerType, TextConst } from "./CardMakerTypes"
import { testCardMaker } from "./TestData"

let cardMaker: CardMakerType = testCardMaker
let editorChangeHandler: any = null

export function getCardMaker() {
    return cardMaker
}

export function setCardMaker(newCardMaker: CardMakerType) {
    cardMaker = newCardMaker
}

export function addEditorChangeHandler(handler: any) {
    editorChangeHandler = handler
}

export function dispatch(modifyFn: Function, payload: Object) {
    const newCardMaker = modifyFn(cardMaker, payload)
    setCardMaker(newCardMaker)

    if (editorChangeHandler) 
    {
        editorChangeHandler()
    }
    console.log(getCardMaker())
}

export function editBackgroundColor(cardMaker: CardMakerType, newColor: string): CardMakerType {
    return {
        ...cardMaker,
        canvas: {
            ...cardMaker.canvas,
            background: {
                color: newColor,
                src: null,
            },    
        }
    };
}

type EditCanvasSizeParam = {
    newWidth: number, 
    newHeight: number
}

export function editCanvasSize(cardMaker: CardMakerType, {newWidth, newHeight}: EditCanvasSizeParam): CardMakerType {
    return {
        ...cardMaker,
        canvas: {
            ...cardMaker.canvas,
            width: newWidth,
            height: newHeight,    
        }
    };
}

export function editCanvasHeight(cardMaker: CardMakerType, newHeight: number): CardMakerType {
    return {
        ...cardMaker,
        canvas: {
            ...cardMaker.canvas,
            height: newHeight,
        }
    };
}

type editFilterParam = {
    newColor: string,
    newTransperancy: number
}

export function editFilter(cardMaker: CardMakerType, {newColor, newTransperancy}: editFilterParam): CardMakerType {
    
    return {
        ...cardMaker,
        canvas: {
            ...cardMaker.canvas,
            currentFilter: {
                color: newColor,
                transparency: newTransperancy,
            }    
        }
    };
}

export function editFilterTransparency(cardMaker: CardMakerType, newTransparency: number): CardMakerType {
    return {
        ...cardMaker,
        canvas: {
            ...cardMaker.canvas,
            currentFilter: {
                ...cardMaker.canvas.currentFilter,
                transparency: newTransparency,
            }
        }
    };
}

export function createTextElement(cardMaker: CardMakerType, newId: number): CardMakerType {
    const standartWidthElement = 100;
    const standartHeightElement = 50;
    const standartSizeText = 32;
    return {
        ...cardMaker,
        canvas: {
            ...cardMaker.canvas,
            elementList: [
                ...cardMaker.canvas.elementList,
                {
                    id: newId,
                    type: 'text',
                    text: 'Новый текст',
                    fontFamily: 'Calibri',
                    width: standartWidthElement,
                    height: standartHeightElement,
                    posX: cardMaker.canvas.width / 2,
                    posY: cardMaker.canvas.height / 2,
                    size: standartSizeText,
                    bold: false,
                    italic: false,
                    underline: false,                    
                }
            ],    
        }
    };
}

export function selectingElement(cardMaker: CardMakerType, elementId: number): CardMakerType {
    return {
        ...cardMaker,
        selectedElements: [elementId],
    };
}

export function resetSelected(cardMaker: CardMakerType): CardMakerType {
    return {
        ...cardMaker,
        selectedElements: [],
    };
}

type editElementSizeParam = {
    id: number,
    width: number,
    height: number
}

export function editElementSize(cardMaker: CardMakerType, {id, width, height}: editElementSizeParam) {
    console.log(id, width, height)
    return {
        ...cardMaker,
        canvas: {
            ...cardMaker.canvas,
            elementList: cardMaker.canvas.elementList.map(element => {
                if (element.id == id) {
                    return {
                        ...element,
                        width,
                        height,
                    }
                }
                return {...element}
            })
        }
    };
}

type editElementLocationParam = {
    id: number,
    newPosX: number,
    newPosY: number,
}

export function editElementLocation(cardMaker: CardMakerType, { id, newPosX, newPosY }: editElementLocationParam): CardMakerType {
    return {
        ...cardMaker,
        canvas: {
            ...cardMaker.canvas,
            elementList: cardMaker.canvas.elementList.map(element => {
                if (element.id == id) {
                    return {
                        ...element,
                        posX: newPosX,
                        posY: newPosY,
                    }
                }
                return {...element}
            })
        }
    };
}

type createImgElementParam = {
    newId: number,
    newSrc: string,
    width: number,
    height: number
}

export function createImgElement(cardMaker: CardMakerType, { newId, newSrc, width, height }: createImgElementParam): CardMakerType {
    return {
        ...cardMaker,
        canvas: {
            ...cardMaker.canvas,
            elementList: [
                ...cardMaker.canvas.elementList,
                {
                    id: newId,
                    type: 'img',
                    width: width,
                    height: height,
                    posX: cardMaker.canvas.width / 2,
                    posY: cardMaker.canvas.height / 2,
                    img: {
                        src: newSrc,
                    },
                }
            ],    
        }
    };
}

type editTxtParam = {
    id: number,
    text: string
}

export function editTxt(cardMaker: CardMakerType, { id, text }: editTxtParam): CardMakerType {
    return {
        ...cardMaker,
        canvas: {
            ...cardMaker.canvas,
            elementList: cardMaker.canvas.elementList.map(element => {
                if (element.id == id) {
                    return {
                        ...element,
                        text
                    }
                }
                return {...element}
            })
        }
    };
}

enum CollectionOfArtObject {
    cloud = 'cloud.png',
    sun = 'Happy_Cloud.svg'
}

type createArtObjElementParam = {
    newId: number,
    type: string
}

export function createArtObjElement(cardMaker: CardMakerType, { newId, type }: createArtObjElementParam): CardMakerType {
    const standartElementWidth = 200;
    const standartElementHeight = 200;

    if (type == 'cloud') {
        type = CollectionOfArtObject.cloud;
    } else if (type == 'sun') {
        type = CollectionOfArtObject.sun
    }

    return {
        ...cardMaker,
        canvas: {
            ...cardMaker.canvas,
            elementList: [
                ...cardMaker.canvas.elementList,
                {
                    id: newId,
                    type: 'artObj',                
                    width: standartElementWidth,
                    height: standartElementHeight,
                    posX: cardMaker.canvas.width / 2,
                    posY: cardMaker.canvas.height / 2,
                    artObj: {
                        type: type
                    },
                }
            ],    
        }
    };
}

type editFontFamilyParam = {
    id: number,
    newFont: string
}

export function editFontFamily(cardMaker: CardMakerType, { id, newFont }: editFontFamilyParam): CardMakerType {
    console.log(id, newFont)
    return {
        ...cardMaker,
        canvas: {
            ...cardMaker.canvas,
            elementList: cardMaker.canvas.elementList.map(element => {
                if (element.id == id) {
                    return {
                        ...element,
                        fontFamily: newFont,
                    }
                }
                return {...element}
            })
        }
    };
}

export function addBackgroundImg(cardMaker: CardMakerType, newSrc: string): CardMakerType {
    return {
        ...cardMaker,
        canvas: {
            ...cardMaker.canvas,
            background: {
                color: null,
                src: newSrc,
            },    
        }
    };
}
