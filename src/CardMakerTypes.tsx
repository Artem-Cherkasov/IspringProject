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

export type ArtObjUnit = {
    readonly type: string,
}

export type ImgUnit = {
    readonly src: string,
}

export type TextUnit = {

}

export type TextConst = {
    readonly id: number,
    readonly type: 'text',
    readonly text: string,
    readonly fontFamily: string,
    readonly width: number,
    readonly height: number,
    readonly posX: number,
    readonly posY: number,
    readonly size: number,
    readonly bold: boolean,
    readonly italic: boolean,
    readonly underline: boolean,
}

export type ImgConst = {
    readonly id: number,
    readonly type: 'img',
    readonly width: number,
    readonly height: number,
    readonly posX: number,
    readonly posY: number,
    readonly img: ImgUnit,
}

export type ArtObjConst = {
    readonly id: number,
    readonly type: 'artObj',
    readonly width: number,
    readonly height: number,
    readonly posX: number,
    readonly posY: number,
    readonly artObj: ArtObjUnit,
}

export type CanvasElement = TextConst | ImgConst | ArtObjConst
   

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

