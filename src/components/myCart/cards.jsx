import { Button, TypographyText } from "@zopsmart/zs-components";
import { useState } from "react";
import {
  ElementWrap,
  ImgWrap,
  Image,
  NameWrapper,
  NameWrap,
  RemoveButtonContainer,
  RemoveButton,
  ButtonContainer,
  ButtonWrap,
  Square,
  Prices,
  Wrapper,
  RightWrap
} from "./style";
import PlusIcon from "./Icon/plus.svg";
import MinusIcon from "./Icon/minus.svg";

export function Card({ item, removeList, list, cb }) {
  const [count, setCount] = useState(1);
  const data = item.storeSpecificData;
  const clickHandler = (price, discount, flag) => {
    cb(price, discount, flag);
  };
  let totalPrice = 0
  return (
    <>
      {data &&
        data.map((val) => {
          totalPrice = totalPrice+val.mrp
          return (
            <>
              {val.mrp && count >= 1 ? (
                <ElementWrap>
                  <ImgWrap>
                    <Image
                      src={item.images && item.images[0]}
                      alt=""
                      srcset=""
                    />
                  </ImgWrap>
                  <Wrapper>
                    <NameWrapper>
                      <NameWrap>
                        <TypographyText variant="xs" children={item.name} />
                      </NameWrap>
                      <RemoveButtonContainer>
                        <RemoveButton
                          text="Remove"
                          variant="textOnly"
                          size="s"
                          onClick={() => {
                            removeList(list?.filter((l) => l.id !== item.id));
                          }}
                        />
                      </RemoveButtonContainer>
                    </NameWrapper>
                    <RightWrap>
                    <ButtonWrap>
                      <ButtonContainer minus>
                        <Button
                          icon={MinusIcon}
                          variant="textOnly"
                          onClick={() => {
                            const c = count - 1;
                            setCount(c);
                            clickHandler(val.mrp, val.discount, -1);
                          }}
                        />
                      </ButtonContainer>
                      <Square
                        onChange={(event) => setCount(event.target.value)}
                        type="number"
                        value={count}
                      />
                      <ButtonContainer plus>
                        <Button
                          variant="textOnly"
                          icon={PlusIcon}
                          onClick={() => {
                            const c = count + 1;
                            setCount(c);
                            clickHandler(val.mrp, val.discount, 1);
                          }}
                        />
                      </ButtonContainer>
                    </ButtonWrap>
                    <Prices>
                      {val.currency.symbol} {val.mrp}
                    </Prices>
                    </RightWrap>
                  </Wrapper>
                </ElementWrap>
              ) : null}
            </>
          );
        })}
    </>
  );
}
