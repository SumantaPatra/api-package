import styled from "styled-components";
import { Button } from "@zopsmart/zs-components";

export const ParentDiv = styled.div`
  max-width: 88rem;
  background: rgb(243, 243, 243);
  @media (min-width: 64rem){
    margin: 0 2rem;
    margin-bottom: 8rem;
  }

  @media (min-width: 37.5rem){
    margin-bottom: 3rem;
  }
`;
export const HeadingParent = styled.div`
  padding: 2rem;
  background: #ffffff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  @media (min-width: 37.5rem) {
    display: grid;
    grid-template-columns: 5fr 2fr 1fr;
  }
  @media (min-width: 64rem) {
    padding: 1.5rem 0.8rem 1.5rem 2.5rem;
  }
`;

export const ItemNames = styled.div`
  display: flex;
`;
export const PriceQuantity = styled.div`
  display: flex;
  justify-content: space-around;
  position: relative;
  gap: 16rem;
  right: 2rem;
`;

export const HeadingText = styled.span`
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: -0.26px;
  line-height: 1rem;
  opacity: 0.5;
  color: black;
  padding-top: 7px;
`;

export const Parent = styled.div`
  padding-bottom: 1rem;
  background: #ffffff;
  @media (min-width: 64rem) {
    padding: 0rem 2rem 1rem 2rem;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const ElementWrap = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 2rem 0;
  background: #ffffff;
`;

export const Image = styled.img`
  height: 10rem;
`;

export const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  gap: 8rem;
`;

export const ButtonContainer = styled.div`
  letter-spacing: -0.26px;
  background-color: ${({ plus }) => (plus ? "#1FB9EA" : "none")};
  height: 2rem;
  width: 2rem;
  border: ${({ plus }) => (plus ? "none" : "1px solid black")};
  border-radius: 50%;
  line-height: 1rem;
  opacity: 0.5;
  position: relative;
  top: 0.5rem;

  &:hover {
    background: "none";
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-left: 4rem;
  width: 100%;
`;

export const RightWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media (min-width: 37.5rem) {
    flex-direction: row;
  }
`;

export const RemoveButtonContainer = styled.div`
  height: 1rem;
  width: 4rem;
  opacity: 0.5;
`;
export const ButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Square = styled.input`
  width: 100%;
  max-width: 3rem;
  height: 3rem;
  padding: 1rem 0.5rem;
  text-align: center;
  border: 1px solid rgb(0, 0, 0);
  border-radius: 4px;
  font-weight: 600;
  margin: 0rem 0.5rem;
  &[type="number"]::-webkit-inner-spin-button,
  &[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
export const Prices = styled.p`
  display: flex;
`;
export const RemoveButton = styled(Button)`
  font-weight: 400;
  letter-spacing: -0.26px;
  line-height: 0.5rem;
  color: black;
`;
export const ImgWrap = styled.div`
  height: 10rem;
  width: 10rem;
`;

export const NameWrap = styled.div`
  height: 1rem;
`;

export const PriceWrap = styled.div`
  display: flex;
  justify-content: space-between;
  line-height: 2.14;
`;

export const PriceWrapper = styled.div`
  height: 20rem;
  width: 20rem;
`;

export const PriceVal = styled.span``;

export const PriceDiscount = styled.div`
  width: 100%;
  padding: 2rem 2rem 0px;
  @media (min-width: 48rem) {
    padding: 0px 2rem;
  }
`;

export const HrLine = styled.span`
  display: block;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  margin: 1rem 0;
`;

export const PriceContainer = styled.div`
  width: 100%;
  background: rgb(255, 255, 255);
  padding: 0px 0px 2rem;
  height: max-content;
  @media (min-width: 64rem) {
    margin: 0rem 2rem 0 0;
    max-width: 30vw;
    min-width: 30vw;
    position: sticky;
    top: 3rem;
  }
`;

export const MyCart = styled.div`
  padding: 2rem 0;
  background: rgb(243, 243, 243);
  @media (min-width: 64rem) {
    display: flex;
    padding: 3.2rem 0;
  }
`;

export const Heading = styled.div`
  padding-top: 20px;
  font-size: 2rem;
  font-weight: 600;
  color: rgb(0, 0, 0);
  margin: 2rem;
`;

export const Typo = styled.div`
  text-align: right;
  line-height: 1.2rem;
`;

export const CheckoutButton = styled.div`
  display: inline-block;
  width: 100%;
  padding: 1rem;
  height: 4rem;
  border-radius: 4px;
  background-color: rgb(31, 185, 234);
  font-size: 1.4rem;
  font-weight: 600;
  text-align: center;
  color: rgb(255, 255, 255);
  margin-top: 2rem;
`;
