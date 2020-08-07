import React from "react";
import styled from "@emotion/styled";

import WidthLimiter from "root/components/WidthLimiter";
import Flexbox from "root/components/Flexbox";
import { columnsToPx, spacing } from "root/styleutils/settings";
import Text, { Edgy } from "root/components/Text";

const Root = styled.div`
  padding: 2rem;
`;

const Stack = styled.div`
  & > * + * {
    margin-top: ${spacing(30)};
  }
`;

const Columns4 = styled.div`
  width: ${columnsToPx(4)};
  height: 50px;

  background-color: blue;
`;

const Columns5 = styled.div`
  width: ${columnsToPx(5)};
  height: 50px;

  background-color: red;
`;

const Columns6 = styled.div`
  width: ${columnsToPx(6)};
  height: 50px;

  background-color: yellow;
`;

export default function KitchenSink() {
  return (
    <Root>
      <p>This is not width limited</p>

      <WidthLimiter>
        <Stack>
          <Flexbox direction="column" gap="20px">
            <p>
              This IS width limited! It&apos;s also a Flex column with a 20px
              gap! Crazy...
            </p>

            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
          </Flexbox>

          <Flexbox direction="column-reverse" gap="20px">
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>Column Reverse!</p>
          </Flexbox>

          <Flexbox direction="row" gap="20px">
            <p>Hey look, a row!</p>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
          </Flexbox>

          <Flexbox direction="row-reverse" gap="20px">
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>Hey look, a row!</p>
          </Flexbox>

          <Flexbox inline direction="row-reverse" gap="20px">
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>Hey look, a row! And it&apos;s inline?</p>
          </Flexbox>

          <Columns4>This is four columns!</Columns4>
          <Columns5>This is five!</Columns5>
          <Columns6>This is six!</Columns6>
        </Stack>
      </WidthLimiter>

      <WidthLimiter>
        <Flexbox direction="column" gap="20px">
          <Text size="h1">Hey i am h1</Text>
          <Text size="h2">Hey i am h2</Text>
          <Text size="h3">Hey i am h3</Text>
          <Text>Hey this is base text</Text>
          <Text size="caption">Hey I am a caption</Text>

          <Text>
            This is regular text, but this is <Edgy>super edgy</Edgy>
          </Text>

          <Text>
            This is <em>italic</em> and this is <b>bold</b>. I am{" "}
            <u>underlined</u>
          </Text>
        </Flexbox>
      </WidthLimiter>
    </Root>
  );
}
