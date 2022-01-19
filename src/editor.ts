import { type } from "os"
import { ActionHistory, CanvasElement, CanvasUnit, CardMakerType, TextConst } from "./CardMakerTypes"
import { CollectionOfJson } from "./JSONCollection"
import { standartCardMaker, testCardMaker } from "./TestData"

let cardMaker: CardMakerType = testCardMaker
let editorChangeHandler: any = null
let nCardMaker: CardMakerType = standartCardMaker

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
                    color: "#000000",
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
    cloud = 'Happy_Cloud.svg',
    present = 'xmas02.svg',
    сhristmasTree = 'xmas_tree.svg'
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
    } else if (type == 'present') {
        type = CollectionOfArtObject.present
    } else if (type == 'сhristmasTree') {
        type = CollectionOfArtObject.сhristmasTree
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

export function newCanvas(): CardMakerType {
    cardMaker = nCardMaker
    return cardMaker
}


export function applyTemplate(cardMaker: CardMakerType, template: string): CardMakerType {

    if (template == "NewYearCard") {
        template = CollectionOfJson.newYearJson
    } else if (template == "BirthDayCard") {
        template = CollectionOfJson.happyBirthdayJson
    }

    const tCardMaker: CardMakerType = JSON.parse(template)
    cardMaker = tCardMaker
    return cardMaker
}

type setBoldTextParam = {
    id: number,
    isBold: boolean
}

export function setBoldText(cardMaker: CardMakerType, { id, isBold }: setBoldTextParam): CardMakerType {
    return {
        ...cardMaker,
        canvas: {
            ...cardMaker.canvas,
            elementList: cardMaker.canvas.elementList.map(element => {
                if (element.id == id) {
                    return {
                        ...element,
                        bold: isBold,
                    }
                }
                return {...element}
            })
        }
    };
}


type setItalicTextParam = {
    id: number,
    isItalic: boolean
}

export function setItalicText(cardMaker: CardMakerType, { id, isItalic }: setItalicTextParam): CardMakerType {
    return {
        ...cardMaker,
        canvas: {
            ...cardMaker.canvas,
            elementList: cardMaker.canvas.elementList.map(element => {
                if (element.id == id) {
                    return {
                        ...element,
                        italic: isItalic,
                    }
                }
                return {...element}
            })
        }
    };
}

type setUnderlinedTextParam = {
    id: number,
    isUnderlined: boolean
}

export function setUnderlinedText(cardMaker: CardMakerType, { id, isUnderlined }: setUnderlinedTextParam): CardMakerType {
    return {
        ...cardMaker,
        canvas: {
            ...cardMaker.canvas,
            elementList: cardMaker.canvas.elementList.map(element => {
                if (element.id == id) {
                    return {
                        ...element,
                        underline: isUnderlined,
                    }
                }
                return {...element}
            })
        }
    };
}

type editSizeTextParam = {
    id: number,
    size: number
}

export function editSizeText(cardMaker: CardMakerType, { id, size }: editSizeTextParam): CardMakerType {
    return {
        ...cardMaker,
        canvas: {
            ...cardMaker.canvas,
            elementList: cardMaker.canvas.elementList.map(element => {
                if (element.id == id) {
                    return {
                        ...element,
                        size,
                    }
                }
                return {...element}
            })
        }
    };
}

type editTextColorParam = {
    id: number,
    color: string
}

export function editTextColor(cardMaker: CardMakerType, { id, color }: editTextColorParam): CardMakerType {
    return {
        ...cardMaker,
        canvas: {
            ...cardMaker.canvas,
            elementList: cardMaker.canvas.elementList.map(element => {
                if (element.id == id) {
                    return {
                        ...element,
                        color,
                    }
                }
                return {...element}
            })
        }
    };
}

export function deleteElement(cardMaker: CardMakerType, id: number): CardMakerType {
    if (cardMaker.canvas.elementList.length > 1) {
        const newElementList: CanvasElement[] = cardMaker.canvas.elementList.filter((element) => { return element.id !== id });
        const newCard: CardMakerType = {
            canvas: {
                width: cardMaker.canvas.width,
                height: cardMaker.canvas.height,
                currentFilter: cardMaker.canvas.currentFilter,
                elementList: newElementList,
                background: cardMaker.canvas.background
            },
            history: cardMaker.history,
            templates: cardMaker.templates,
            filterList: cardMaker.filterList,
            selectedElements: cardMaker.selectedElements
        }

        return cardMaker = newCard
    } else {
        return cardMaker
    }
}

export function addCanvasInHistory(cardMaker: CardMakerType, newCanvas: CanvasUnit): CardMakerType {
    let history: ActionHistory = cardMaker.history;
    let newStateList: CanvasUnit[] = cardMaker.history.canvasState;
    history.canvasState.length = history.stateId
    newStateList.push(newCanvas);
    return {
        ...cardMaker,
        history: {
            stateId: history.stateId + 1,
            canvasState: newStateList,
        }
    }
}

export function Undo(cardMaker: CardMakerType): CardMakerType {
    let undoCanvas: CanvasUnit = cardMaker.canvas
    let newStateId: number = cardMaker.history.stateId
    if (cardMaker.history.canvasState.length == cardMaker.history.stateId){
        addCanvasInHistory(cardMaker, cardMaker.canvas)
    }
    undoCanvas = cardMaker.history.canvasState[cardMaker.history.stateId - 1]
    newStateId -= 1

    return {
        ...cardMaker,
        canvas: undoCanvas,
        history: {
            ...cardMaker.history,
            stateId: newStateId,
        }
    }
}

export function Redo(cardMaker: CardMakerType): CardMakerType {
    let newStateId: number = cardMaker.history.stateId + 1
    const redoCanvas = cardMaker.history.canvasState[cardMaker.history.stateId + 1]
    if (newStateId == cardMaker.history.canvasState.length - 1) {
        cardMaker.history.canvasState.pop()
    }
    return {
        ...cardMaker,
        canvas: redoCanvas,
        history: {
            ...cardMaker.history,
            stateId: newStateId,
        }
    }
}