"use client"

import { useState} from "react"
import { useGetProductsQuery,useGetFilteredProductsQuery } from "../../rtk/features/apiReducerSlice"
import List from "../../component/List"
import Item from "../../component/Item"
import Text from "../../component/Text"
import { productType } from "../../interface/interface"
import { useRouter } from "next/navigation"
import Button from "../../component/Button"
import Input from "../../component/Input"

export default function ProductCatalog() {
    const [filterTag,setFilterTag] = useState<string>('');
    const {data:allProducts,isLoading, isSuccess} =useGetProductsQuery('');
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
