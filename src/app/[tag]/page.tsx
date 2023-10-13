"use client"

import React, { useState } from 'react';
import { useGetFilteredProductsQuery } from '../../../rtk/features/apiReducerSlice' 
import { useRouter } from 'next/navigation';
import Button from '../../../component/Button';
import Input from '../../../component/Input';
import Text from '../../../component/Text';
import List from '../../../component/List';
import { productType } from '../../../interface/interface';
import Item from '../../../component/Item';



interface pageProp {
    params: {tag:string},
}

const FilterPage = ({params}:pageProp) => {
    const {tag} =  params;
    const [filterTag,setFilterTag] = useState<string>('');
    const {data:allProducts,isLoading, isSuccess} =useGetFilteredProductsQuery(tag);
    const router = useRouter();
    const handelRoute = (route:string) => {
        router.push(route);
    }
    const handelFilterChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setFilterTag(e.target.value);
    }
    const handelFilter = () => {
        handelRoute(`/${filterTag}`)
    }
    return (
        <div style={{textAlign:"center"}}>
            <h1>Product Catalog</h1>
            <div>
                filtered bu :
                <Input type="text" onChange={handelFilterChange}/>
                <Button text="filter" onClick={handelFilter}/>
            </div>
            <div>
                <div>{isLoading && <Text text='Loading.........'/>}</div>
            </div>
            <List>
                {
                    (allProducts && isSuccess) && allProducts.map((product:productType)=>(
                        <Item key={product.id}>
                            <Item>name :{product.name}</Item>
                            <Item>price :{product.price}</Item>
                            <Item>tag :{product.tag}</Item>
                            <Button onClick={() => {
                                    handelRoute(`productDetails/${product.id}`)
                                }} text="go to details"/>
                        </Item>
                        )
                    )
                }
            </List>
        </div>
    )
}

export default FilterPage;