import { css } from "styled-components";

// @mixin flex(
//   $direction: row,
//   $justify: start,
//   $align: stretch,
//   $gap: 0,
//   $wrap: nowrap
// ) {
//   display: flex;
//   flex-direction: $direction;
//   justify-content: $justify;
//   align-items: $align;
//   gap: $gap;
//   flex-wrap: $wrap;
// }
export const flexMixin = ({
  direction = "row",
  justify = "flex-start",
  align = "stretch",
  gap = 0,
  wrap = "nowrap"
} = {}) => {
  return css`
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
    gap: ${gap};
    flex-wrap: ${wrap};
  `;
};


// @mixin font(
//   $size, 
//   $weight: 400
// ) {
//   font-size: $size;
//   font-weight: $weight;
// }
export const fontMixin = ({
  size= "14px",
  weight= 400
} = {}) => {
  return css`
  font-size: ${size};
  font-weight: ${weight};
  `;
};

export const tag_color = "#d7fa00";
export const gray = "rgb(160, 160, 160)";
// $tag-color: #d7fa00;
// $gray: rgb(160, 160, 160);