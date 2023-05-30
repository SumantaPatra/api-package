import { Button, TypographyText } from "@zopsmart/zs-components";
import {
  PriceWrap,
  PriceVal,
  HrLine,
  PriceDiscount,
  Typo,
  CheckoutButton,
} from "./style";

export function Price({ price, discount, currency }) {
  return (
    <PriceDiscount>
      <PriceWrap>
        <TypographyText variant="Paragraph" children="Price" />
        <PriceVal>
          {currency} {price}
        </PriceVal>
      </PriceWrap>
      <PriceWrap>
        <TypographyText variant="Paragraph" children="Discount" />
        <PriceVal>
          {currency} {discount}
        </PriceVal>
      </PriceWrap>
      <PriceWrap>
        <TypographyText variant="Paragraph" children="Delivery Charges" />
        <PriceVal>{currency} 0.00</PriceVal>
      </PriceWrap>
      <PriceWrap>
        <TypographyText variant="Paragraph" children="Sub Total" />
        <PriceVal>
          {currency} {price - discount}
        </PriceVal>
      </PriceWrap>
      <HrLine />
      <PriceWrap>
        <TypographyText variant="Paragraph" children="Total to pay" />
        <PriceVal>
          {currency} {price - discount}
        </PriceVal>
      </PriceWrap>
      <Typo>
        <TypographyText
          variant="Caption"
          children="Payment inlusives of all taxes"
        />
      </Typo>
      <CheckoutButton>
        <Button text="Proceed to Checkout" variant="textOnly" />
      </CheckoutButton>
    </PriceDiscount>
  );
}
