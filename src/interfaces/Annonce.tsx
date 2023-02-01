export interface IAnnonce {
   // _id:String,
    region: string,
    description: string,
    nbPiece:  Number,
    price:  Number,
    pictures:  any[]

}

export interface IIAnnonce {

     _id: string,


    region: string,
    description: string,
    nbPiece:  Number,
    price:  Number,
    pictures:  any[]
}

export interface Iannonces{
    annonces: IIAnnonce[];
}

export interface IAnnonceProps {

    annonce:IIAnnonce,
    annonceIndex: number,
    onUpdate(annonce: IAnnonce, id: string): void,
    onRemove(annonce: IAnnonce, id: string): void,
    onGetAnnonce(id:string):void
}
export interface IEditAnnonceProps {
    onBackBtnClickHnd: () => void,
    onSubmitAnnonce: (data: IAnnonce,id:string ) => void,
    annonce:IIAnnonce
}
export interface IAnnonceFormProps {
    onBackBtnClickHnd?: () => void,
    onSubmitAnnonce?: (data: IIAnnonce ) => void,
    isEdit?:boolean,
    annonce?:IIAnnonce
}
export interface IAnnonceListProps{
    list:IIAnnonce[],

}
