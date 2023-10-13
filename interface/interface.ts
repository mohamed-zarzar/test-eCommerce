interface productType {
    id:number,
    name: string,
    price: number,
    tag :string,
    description:string,
}

interface apiReducerType {
    data: productType[],
    loading:boolean,
}

interface cartType {
    id : number,
    name: string,
    amount : number,
    bulkPrice : number,
}

interface stateList {
    list : cartType[];
}



export type {
    cartType,
    stateList,
    productType,
    apiReducerType,
}
// {
    //   "products": [],
    //   "total": 0,
    //   "firstname": "",
    //   "lastname": "",
    //   "phone number": "",
    //   "country": "",
    //   "city": "",
    //   "address": "",
    //   "payment method": "",
    //   "delivery method": ""
    // }