import { createTextChangeRange } from "typescript";
import { ArtObjConst, Background, CanvasElement, ImgConst, ImgUnit, TextConst } from "../../../CardMakerTypes";
import { getCardMaker } from "../../../editor";


export async function exportInPNG(): Promise<void> {

    const canvasImg: HTMLCanvasElement = document.createElement("canvas"); 
    const ctx: CanvasRenderingContext2D | null = canvasImg.getContext("2d")
    const background = getCardMaker().canvas.background
    const elementList = getCardMaker().canvas.elementList

    canvasImg.width = getCardMaker().canvas.width
    canvasImg.height = getCardMaker().canvas.height

    async function backgroundConvert(background: Background): Promise<void> {
        if (ctx) {
            if (background.color) {
                ctx.fillStyle = background.color
                ctx.fillRect(0, 0, canvasImg.width, canvasImg.height);
            } else if (background.src) {
                const img: HTMLImageElement = new Image()
                img.crossOrigin = "anonymous"
                img.src = background.src;
                await img.decode()
                ctx.drawImage(img, 0, 0)
            }
        }
    }

    async function elementsConvert(elementList: CanvasElement[]): Promise<void> {
        for (const element of elementList) {
            switch(element.type) {
                case "img":
                    await imgConvert(element);
                    break
                case "artObj":
                    await artObjConvert(element);
                    break
                case "text":
                    textConvert(element);
                    break
            }
        }
    }

    async function imgConvert(image: ImgConst): Promise<void> {
        const img: HTMLImageElement = new Image()
        img.crossOrigin = "anonymous"
        img.src = image.img.src;
        await img.decode()
        ctx?.drawImage(img, image.posX, image.posY, image.width, image.height)
    }

    async function artObjConvert(artObject: ArtObjConst): Promise<void> {
        const artObj: HTMLImageElement = new Image()
        artObj.crossOrigin = "anonymous"
        artObj.src = artObject.artObj.type;
        await artObj.decode()
        ctx?.drawImage(artObj, artObject.posX, artObject.posY, artObject.width, artObject.height)
    }

    function textConvert(txt: TextConst): void {
        const lineHeight = 1.2;
        let style = ""

        const div = document.createElement("div");
        div.innerHTML = txt.text
        if (txt.italic) style += "italic "
        if (txt.bold) style += "bold "
        style += txt.size + "px " + txt.fontFamily
        console.log(style)
        if (ctx) {
            ctx.fillStyle = txt.color
            ctx.font = style
            ctx.fillText(div.innerHTML, txt.posX, txt.posY);
        }
    }

    await backgroundConvert(background)
    await elementsConvert(elementList)

    const file = "image.png"
    const fileUrl = canvasImg.toDataURL(file)
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "Новая открытка";
    link.click();
}

