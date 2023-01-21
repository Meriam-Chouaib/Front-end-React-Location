export interface IAnnonce {
   // _id:String,
    region: String,
    description: String,
    nbPiece:  Number,
    price:  Number,
    pictures:  String

}

export interface IIAnnonce {
    //  _id:String,
    // region: String,
    // description: String,
    // nbPiece:  Number,
    // price:  Number,
    // pictures:  String

    price: number,
    description: string,
    nbPiece: number,
     _id: string,
    region: string,
    pictures: string
}




export interface Iannonces{
    annonces: IIAnnonce[];
}