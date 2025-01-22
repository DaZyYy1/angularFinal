export interface IProducts {
    id: number,
    uId: number,
    title: string,
    stock: boolean,
    price: number,
    SKU: number,
    quantity: number,
    detail: string,
    img: string,
    categories: string,
    review: {
        username: string,
        date: string,
        comment: string,
    }
    size:string,
    color:string
}
