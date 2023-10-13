"use client"

import { useRouter } from "next/navigation"
import Button from "../../../component/Button";
import Form from "../../../component/Form";
import Input from "../../../component/Input";
import Lable from "../../../component/Lable";
import Item from "../../../component/Item";
import SelectList from "../../../component/SelectList";
import Select from "../../../component/Select";
import { useState } from "react";
import { useAppSelector } from "../../../rtk/hook";
import { useAddOrderMutation } from "../../../rtk/features/apiReducerSlice";





export default function Checkout() {
    const [addOrder] = useAddOrderMutation();
    const carts = useAppSelector(state => state.listOfcarts.list);
    const [paymentMethod,setPaymentMethod] = useState<string>('');
    const [deliveryMethod,setDeliveryMethod] = useState<string>('');
    const [formData,setFormData] = useState<any>(null);
    const handeFormChange = (e: React.FormEvent<HTMLFormElement>) => {
        setFormData(e.currentTarget.elements)
    }
    const handelPaymentMethodChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
        setPaymentMethod(e.target.value);
    }
    const handelDeliveryMethodChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
        setDeliveryMethod(e.target.value);
    }
    const handelAddOrder = ()=> {
        const total = () => {
            let cur =0;
            for(let i = 0 ; i < carts.length; i++ ) {
                cur+= carts[i].bulkPrice;
            }
            return cur;
        }
        const body = {
            "products": carts,
            "total":total(),
            "firstname": formData[0].value,
            "lastname": formData[1].value,
            "phone number": formData[2].value,
            "country": formData[3].value,
            "city": formData[4].value,
            "address": formData[5].value,
            "payment method": paymentMethod,
            "delivery method": deliveryMethod,
        }
        addOrder(JSON.stringify(body));
    }

    const router = useRouter();
    const routeToProductCatalogPage = () => {
        router.push('/');
    }
    return (
        <div style={{textAlign:"center"}}>
            <h1>Checkout page</h1>
            <Form onChange={handeFormChange}>
                <Item>
                    <Lable text="firstnam"/>
                    <Input type="text"/>
                </Item>
                <Item>
                    <Lable text="lastname"/>
                    <Input type="text"/>
                </Item>
                <Item>
                    <Lable text="phone number"/>
                    <Input type="number"/>
                </Item>
                <Item>
                    <Lable text="country"/>
                    <Input type="text"/>
                </Item>
                <Item>
                    <Lable text="city"/>
                    <Input type="text"/>
                </Item>
                <Item>
                    <Lable text="address"/>
                    <Input type="text"/>
                </Item>
                <Lable text="payment method"/>
                <SelectList onChang={handelPaymentMethodChange}>
                    <Select value="delivery" text={"delivery"}/>
                    <Select value="bank account" text={"bank account"}/>
                </SelectList>
                <Lable text="delivery method"/>
                <SelectList onChang={handelDeliveryMethodChange}>
                    <Select value="pickup" text={"pickup"}/>
                    <Select value="aramax" text={"aramax"}/>
                </SelectList>
            </Form>
            <Button text="send" onClick={handelAddOrder}/>
            <hr/>
            <Button onClick={routeToProductCatalogPage} text="go to product catalog page"/>
        </div>
) 
}