import React from "react";
import { ReactComponent as TestSvg } from "./copy.svg";
import { SVGCustom } from "svg-fill-custom";
import styled from "styled-components";

interface ComponentProps {
  width?: string;
  height?: string;
}

const DivRoot = styled.div<ComponentProps>`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const App = () => {
  return (
    <DivRoot>
      <SVGCustom src={<TestSvg />} fill={"red"} width={"200px"} />
      <SVGCustom src={<TestSvg />} fill={"#3cdc18"} width={"200px"} />
      <SVGCustom src={<TestSvg />} fill={"#d00cde"} width={"200px"} />
      <SVGCustom src={<TestSvg />} fill={"#fa5d07"} width={"200px"} />
      <SVGCustom src={<TestSvg />} fill={"#07dcc3"} width={"200px"} />
    </DivRoot>
  );
};

export default App
