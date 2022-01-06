export type FileData = {
    src: string,
    width: number,
    height: number
}

export async function imgReader(file: File): Promise<FileData> {
    const imgReaderPromise = new Promise((resolve, reject) => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject
    })

    const img = new Image();
    img.src = await imgReaderPromise as string;
    await img.decode();

    return{
        src: img.src,
        width: img.width,
        height: img.height
    }
}