import React from "react";
import styled from "styled-components";

interface SVGProps {
  fill?: string;
  stroke?: string;
  padding?: string;
  width?: string;
  height?: string;
  maxWidth?: string;
  maxHeight?: string;
  className?: string;
  src?: any;
  callback?: any;
}

const SvgBox: React.FunctionComponent<SVGProps> = (props) => {
  const { src, callback } = props;
  const SvgImage = src;

  const onClickAction = () => {
    if (callback && typeof callback === "function") {
      callback();
    }
  };

  return (
    <div {...props} onClick={onClickAction}>
      {SvgImage}
    </div>
  );
};

export const SVGCustom = styled(SvgBox)`
  & svg {
    fill: ${(props) => props.fill};
    stroke: ${(props) => props.stroke};
    padding: ${(props) => props.padding};
    width: ${(props) => props.width || "100%"};
    height: ${(props) => props.height || "100%"};
    max-width: ${(props) => props.maxWidth};
    max-height: ${(props) => props.maxHeight};
  }
`;
