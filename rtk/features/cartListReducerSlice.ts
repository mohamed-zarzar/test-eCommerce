import {createSlice, PayloadAction } from '@reduxjs/toolkit'
import { stateList,cartType,productType } from '../../interface/interface'


interface productWithAmount {
    product: productType | undefined,
    amount :number,
}

const initialState: stateList = {
    list: [],
}




const cartListReducerSlice = createSlice({
    name: 'cartListReducerSlice',
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<productWithAmount>) => {
        const findCart = state.list.find((cart)=> cart.id === action.payload.product?.id);
        if(findCart){
            findCart.amount += action.payload.amount;
            findCart.bulkPrice += action.payload.amount * (action.payload.product?.price || 1);
        } else {
            const newCart :cartType = {
                id : action.payload.product?.id || 1,
                name:action.payload.product?.name || "non",
                amount:action.payload.amount,
                bulkPrice : action.payload.amount * (action.payload.product?.price || 1)
            }
            state.list.push(newCart)
        }
        },
        removeProduct:(state, action: PayloadAction<number>) => {
            const findCart = state.list.find((cart)=> cart.id === action.payload);
            if(findCart) {
                state.list = state.list.filter((cart)=> cart.id !== action.payload)
            }
        },
        updateProduct:(state, action: PayloadAction<{id:number,price:number}>) => {
            const findCart = state.list.find((cart)=> cart.id === action.payload.id);
            if(findCart){
                if(action.payload.price > 0) {
                    findCart.amount++;
                    findCart.bulkPrice += action.payload.price;
                } else {
                    findCart.amount--;
                    findCart.bulkPrice += action.payload.price;
                }
            }
        },
    },
}
)

export default cartListReducerSlice.reducer;
export const { addProduct,removeProduct,updateProduct} = cartListReducerSlice.actions;