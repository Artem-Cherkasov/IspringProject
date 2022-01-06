export type CardMakerType = {
    readonly canvas: CanvasUnit,
    readonly history: ActionHistory,
    readonly templates: Template[],
    readonly filterList: Filter[],
    readonly selectedElements: number[],
}

export type ActionHistory = {
    readonly canvasState: CanvasUnit[],
    readonly stateId: number,
}

export type Templates = {
    readonly name: string,
    readonly json: string,
}

export type CanvasUnit = {
    readonly width: number,
    readonly height: number,
    readonly currentFilter: Filter,
    readonly elementList: CanvasElement[],
    readonly background: Background,
}

export enum CollectionOfArtObject {
    cloud = 'object path',
    car = 'object path',
    tree = 'object path',
    mushroom = 'object path',
    flower = 'object path',
}

export type ArtObj = {
    readonly type: string,
}

export type Img = {
    readonly src: string,
}

export type TextUnit = {
    readonly text: string,
    readonly size: number,
    readonly bold: boolean,
    readonly italic: boolean,
    readonly underline: boolean,
    readonly fontFamily: string,
}

export type CanvasElement = {
    readonly id: number,
    readonly type: string,
    readonly width: number,
    readonly height: number,
    readonly posX: number,
    readonly posY: number,
    readonly text?: TextUnit,
    readonly img?: Img,
    readonly artObj?: ArtObj,
}

export type Background = {
    readonly color: string | null,
    readonly src: string | null,
}

export type Filter = {
    readonly color: string,
    readonly transparency: number,
}

export type Template = {
    readonly name: string,
    readonly json: string,
}

