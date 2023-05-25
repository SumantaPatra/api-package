import { Button, TypographyText } from "@zopsmart/zs-components";
import { useState } from "react";
import {
  ElementWrap,
  ImgWrap,
  Image,
  Wrapper,
  NameWrap,
  RemoveButtonContainer,
  RemoveButton,
  ButtonContainer,
  ButtonWrap,
  Square,
  Prices,
} from "./style";
import PlusIcon from "./Icon/plus.svg";
import MinusIcon from "./Icon/minus.svg";

export function Card({ item, removeList, list }) {
  const [count, setCount] = useState(1);
  const data = item.storeSpecificData;
  // if(item.images.length > 0){
  //   setCount(1)
  // }
  console.log(item.images, "dchd");
  console.log(item);
  return (
    <>
      {data &&
        data.map((val) => {
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
                  </Wrapper>
                  <ButtonWrap>
                    <ButtonContainer minus>
                      <Button
                        icon={MinusIcon}
                        variant="textOnly"
                        onClick={() => {
                          setCount(count - 1);
                        }}
                      />
                    </ButtonContainer>
                    <Square type="number" value={count} />
                    <ButtonContainer plus>
                      <Button
                        variant="textOnly"
                        icon={PlusIcon}
                        onClick={() => setCount(count + 1)}
                      />
                    </ButtonContainer>
                  </ButtonWrap>
                  {item.storeSpecificData &&
                    item.storeSpecificData.map((data) => {
                      return (
                        <Prices>
                          {data.currency.symbol} {data.mrp}
                        </Prices>
                      );
                    })}
                </ElementWrap>
              ) : null}
            </>
          );
        })}
    </>
  );
}
