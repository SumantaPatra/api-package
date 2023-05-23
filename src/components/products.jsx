import { Product } from "@zopsmart/zs-components";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import './style.css'
export function ProductList(){

    const [product,setProduct] = useState();
    const [loading,setLoading] = useState(true);
    const navigate = useNavigate();
    const containerStyle = {
      margin: '10px',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
      gridGap: '10px',
      // display: 'flex',
      // flexWrap: 'wrap',
      // width: '100%',
      // flexGrow: '1'
    };

    useEffect(()=>{
      async function fetchData(){
        const ecObj = await window.ec;
        const prod = await ecObj.catalogue.product.getProductCollection();
        const list = prod.getProducts().getProductList()
        setProduct(list)
        setLoading(false)
      }
      try {
        fetchData()
        console.log(product)
      } catch (error) {
        navigate("/error")
      }
    },[])

    if(loading) return <span>Loding...</span>


    return (
      <div>
        <div style={containerStyle}>
            {
              product?.map((p,index)=>{
                return (
                  <div className="ProductCard">
                    <Product imageURL={p && p.images && p.images[0]} title={p?.name.slice(0,12)} description={p?.slug} sellingPrice={p?.discount} mrp={(p&& p.storeSpecificData && p.storeSpecificData[0].mrp)}   key={index}  />
                  </div>
                )
              })
            }
        </div>
     </div>
    )
}