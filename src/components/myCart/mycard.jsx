import { useState, useEffect } from "react";
import { Card } from "./cards";
import { useNavigate } from "react-router-dom";
import {
  ParentDiv,
  HeadingParent,
  PriceQuantity,
  HeadingText,
  ItemNames,
  DivWrapper,
} from "./style";

export function MyCard() {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const navigate = new useNavigate();

  useEffect(() => {
    async function fetchData() {
      const ecObj = await window.ec;
      const prod = await ecObj.catalogueFeature?.product.getProductCollection();
      const list = prod.getProducts().getProductList();
      setProduct(list);
      setLoading(false);
    }
    try {
      fetchData();
      console.log(product, "hded");
    } catch (error) {
      navigate("/error");
    }
  }, []);

  if (loading) return <span>Loding...</span>;
  //   const imageList = product[0].images
  //   console.log(imageList, 'dh')
  return (
    // <GrandWrap>
    <ParentDiv>
      <HeadingParent>
        <ItemNames>
          <HeadingText>ITEMS NAME</HeadingText>
        </ItemNames>
        <PriceQuantity>
          <HeadingText>QUANTITY</HeadingText>
          <HeadingText>PRICE</HeadingText>
        </PriceQuantity>
      </HeadingParent>
      <DivWrapper>
        {product?.map((item) => {
          return <Card item={item} removeList={setProduct} list={product} />;
        })}
      </DivWrapper>
    </ParentDiv>
  );
}
