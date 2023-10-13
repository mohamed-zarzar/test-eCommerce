/* eslint-disable react/jsx-key */
"use client"


import { useRouter } from "next/navigation"
import Button from "../../../component/Button";
import { useAppDispatch, useAppSelector } from "../../../rtk/hook";
import List from "../../../component/List";
import Item from "../../../component/Item";
import Text from "../../../component/Text";
import { removeProduct,updateProduct } from "../../../rtk/features/cartListReducerSlice";
import { cartType } from "../../../interface/interface";
import useToner from "../../../hooks/useToner";
import Toner from "../../../component/Toner";

function SingleCart(props:cartType) {
    const dispatch = useAppDispatch();
    const {id,name,amount,bulkPrice }= props;
    const {increase,decrease,value} = useToner(amount);
    const handelIncrease = () => {
        increase();
        dispatch(updateProduct({
            id,
            price:bulkPrice/amount,
        }))
    }
    const handeDecrease = () => {
        if (value !== 1) {
            decrease();
            dispatch(updateProduct({
                id,
                price: -(bulkPrice/amount),
            }))
        } else {
            dispatch(removeProduct(id))
        } 
    }
    return (
        <Item >
            <Text text={`name : ${name}`}/>
            <Text text={`amount : ${amount}`}/>
            <Text text={`bulk price : ${bulkPrice}`}/>
            <Toner increase={handelIncrease} decrease={handeDecrease} value={value}/>
            <Button text="remove" onClick={()=>dispatch(removeProduct(id))}/>
        </Item>
    )
}


export default function Cart() {
    const carts = useAppSelector(state => state.listOfcarts.list);
    const totalPrice = () => {
        let cur =0;
        for(let i = 0 ; i < carts.length; i++ ) {
            cur+= carts[i].bulkPrice;
        }
        return cur;
    }
    const router = useRouter();
    const routeToCheckoutPage = () => {
        router.push('/checkout');
    }
    
    return (
        <div style={{textAlign:"center"}}>
            <h1>Cart page</h1>
            <List>
                {
                    carts && carts.map((cart)=>(
                        <SingleCart {...cart} key={cart.id}/>
                    ))
                }
            </List>
            <Text text={`total price :  ${totalPrice()}`}/>
            <Button text='go to checkoout page' onClick={routeToCheckoutPage}/>
        </div>
) 
}