import styled from "styled-components";
import { Button } from "@zopsmart/zs-components";

export const ParentDiv = styled.div`
  max-width: 88rem;
`;
export const HeadingParent = styled.div`
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 2rem 2rem 2rem 4rem;
`;

export const ItemNames = styled.div`
  display: flex;
  position: relative;
  right: 13rem;
`;
export const PriceQuantity = styled.div`
  display: flex;
  justify-content: space-around;
  position: relative;
  gap: 16rem;
  left: 4rem;
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


export const DivWrapper = styled.div``;

export const ElementWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr 1fr 1fr;
  align-items: center;
  width: 100%;
  height: 15rem;
  gap: 7rem;
  padding: 0.4rem 2rem 2rem 2rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const Image = styled.img`
  width: 20rem;
  height: 100%;
  padding: 1rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  width: 28rem;
  padding: 2rem 0;
  height: 100%;
  position: relative;
  right: 4rem;
`;

export const ButtonContainer = styled.div`
  letter-spacing: -0.26px;
  background-color: ${({ plus }) => (plus ? "#1FB9EA" : "none")};
  height: 2rem;
  width: 2rem;
  border: ${({ plus }) => (plus ? 'none' :'1px solid black')};
  border-radius: 50%;
  line-height: 1rem;
  opacity: 0.5;
  position: relative;
  top: 0.5rem;

  &:hover {
    background: "none";
  }
`;
export const RemoveButtonContainer = styled.div`
  height: 1rem;
  width: 4rem;
  opacity: 0.5;
`;
export const ButtonWrap = styled.div`
  display: flex;
  height: 9rem;
  position: relative;
  right: 4rem;
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
  position: relative;
  right: 1rem;
  bottom: 4rem;
`;
export const RemoveButton = styled(Button)`
  font-weight: 400;
  letter-spacing: -0.26px;
  line-height: 0.5rem;
  color: black;
`;
export const ImgWrap = styled.div`
  height: 13rem;
  width: 10rem;
`;

export const NameWrap = styled.div`
  height: 1rem;
`;