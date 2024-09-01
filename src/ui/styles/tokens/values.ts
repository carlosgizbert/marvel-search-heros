import * as T from "./types";

const colors: T.Colors = {
  background10: "#fff",
  background20: "#191919",
  primary10: "#ED1D24",
  text10: "#121212",
  text20: "#808080",
  dark10: "#191919",
  white: "#FFF",
};

const gridSpace: T.GridSpace = {
  small: "8px",
  medium: "16px",
  large: "32px"
};

const marginDefault: T.Margin = {
  normal: "8px",
  small: "4px",
  medium: "12px",
  large: "16px",
  xlarge: "24px",
};

const spacingDefault: T.Spacing = {
  small: "8px",
  medium: "16px",
  large: "32px",
  xmedium: "64px"
};

const roundedDefault: T.Rounded = {
  large: "16px",
  medium: "8px",
  small: "4px",
};

const shadowLevelDefault: T.ShadowLevel = {
  small: "10px 22px 24px rgba(0, 0, 0, 0.5)"
};

const fontFamilyDefault: T.FontFamily = {
  primary: "Inter, sans-serif"
};

const fontSizeDefault: T.FontSize = {
  body: {
    thin: "0.75rem",
    small: "0.87rem",
    normal: "1rem",
    medium: "1.5rem",
    xmedium: "2rem",
    large: "2.5rem"
  },
  title: {
    small: "1.5rem",
    medium: "2rem",
    large: "2.5rem"
  }
};

const fontWeightDefault: T.FontWeight = {
  regular: "400",
  semibold: "500",
  bold: "600"
};

export {
  colors,
  fontFamilyDefault,
  fontSizeDefault,
  fontWeightDefault,
  gridSpace,
  marginDefault,
  roundedDefault,
  shadowLevelDefault,
  spacingDefault,
}