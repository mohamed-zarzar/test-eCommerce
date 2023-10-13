"use client"

import React, { useEffect, useState } from 'react'
import Item from '../../../../component/Item';
import { productType } from '../../../../interface/interface';
import useToner from '../../../../hooks/useToner';
import Toner from '../../../../component/Toner';
import { useAppDispatch,useAppSelector } from '../../../../rtk/hook';
import { addProduct } from '../../../../rtk/features/cartListReducerSlice';
import Button from '../../../../component/Button';
import { useRouter } from 'next/navigation';

interface pageProp {
    params: {id:string},
}

const ProductDetails = ({params}:pageProp) => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const {increase,decrease,value} = useToner(1);
    const [product,setProduct] = useState<productType>();
    const {id} =  params;
    const handelAddProduct = () => {
            dispatch(addProduct({product:product,amount:value}));
            router.push('/cart');
    }
    useEffect(()=>{
        fetch(`http://localhost:8000/products/${id}`)
        .then(res => res.json())
        .then(data => setProduct(data))
        
    },[])
    return (
            <div style={{textAlign:"center"}}>
                <div>Product details of id : {id}</div>
                <Item>
                    <Item>
                        name : {product?.name}
                    </Item>
                    <Item>
                        tag : {product?.tag}
                    </Item>
                    <Item>
                        price : {product?.price}
                    </Item>
                    <Item>
                        description : {product?.description}
                    </Item>
                </Item>
                <Toner value={value} increase={increase} decrease={decrease}/>
                <Button text='add to carts' onClick={handelAddProduct}/>
            </div>
    )
}

export default  ProductDetails;