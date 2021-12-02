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

  const onClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    console.log(event);
    alert("ok Click");
  };

  return (
    <DivRoot>
      <SVGCustom src={<TestSvg />} fill={"red"} width={"200px"} callback={onClick} />
      <SVGCustom src={<TestSvg />} fill={"#3cdc18"} width={"200px"} callback={onClick} />
      <SVGCustom src={<TestSvg />} fill={"#d00cde"} width={"200px"} callback={onClick} />
      <SVGCustom src={<TestSvg />} fill={"#fa5d07"} width={"200px"} callback={onClick} />
      <SVGCustom src={<TestSvg />} fill={"#07dcc3"} width={"200px"} callback={onClick} />
    </DivRoot>
  );
};

export default App
