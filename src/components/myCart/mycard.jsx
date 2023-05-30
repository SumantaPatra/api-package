import { useState, useEffect } from "react";
import { Card } from "./cards";
import { useNavigate } from "react-router-dom";
import {
  ParentDiv,
  HeadingParent,
  Heading,
  HeadingText,
  Parent,
  PriceContainer,
  MyCart,
} from "./style";
import { Price } from "./priceDetail";
import { TypographyText } from "@zopsmart/zs-components";

export function MyCard() {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  // let [discount, setDiscount] = useState(0);
  const navigate = new useNavigate();
  const [currPrice, setCurrentPrice] = useState(0);
  const [discount, setDiscount] = useState(0);

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

  useEffect(() => {
    let discountPrice = 0;
    let price = 0;
    product?.forEach((item) => {
      price += item.storeSpecificData
        ? Number(item.storeSpecificData[0]?.mrp)
        : 0;
      discountPrice += item.storeSpecificData
        ? Number(item.storeSpecificData[0]?.discount)
        : 0;
    });

    setCurrentPrice(price);
    setDiscount(discountPrice);
  }, [product]);

  function setPrice(price, disCount, flag) {
    console.log(flag);
    const updatedPrice =
      flag === 1 ? currPrice + Number(price) : currPrice - Number(price);
    const updatedDiscount =
      flag === 1 ? discount + Number(disCount) : discount - Number(disCount);
    setCurrentPrice(updatedPrice);
    setDiscount(updatedDiscount);
  }
  if (loading) return <span>Loading...</span>;
  return (
    <>
      {" "}
      {currPrice > 0 ? (
        <MyCart>
          <ParentDiv>
            <HeadingParent>
              <HeadingText>ITEMS NAME</HeadingText>
              <HeadingText>QUANTITY</HeadingText>
              <HeadingText>PRICE</HeadingText>
            </HeadingParent>
            <Parent>
              {product?.map((item) => {
                const p =
                  item?.storeSpecificData && item?.storeSpecificData[0]?.mrp;
                return (
                  <Card
                    cb={setPrice}
                    price={p}
                    item={item}
                    removeList={setProduct}
                    list={product}
                  />
                );
              })}
            </Parent>
          </ParentDiv>
          <PriceContainer>
            <Heading>
              <TypographyText variant="xs" children="Price Details" />
            </Heading>
            <Price price={currPrice} discount={discount} currency="₹" />
          </PriceContainer>
        </MyCart>
      ) : null}
    </>
  );
}
