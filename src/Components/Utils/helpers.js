export const getBackgroundColor = (props) => {
  return props.variant === "contained" ? "#8A2B06" : "#fff";
};
export const getBorderRadius = (props) => {
  return props.borderRadius === "rounded" ? "20px" : "6px";
};
export const getColor = (props) => {
  return props.variant === "contained" ? "#fff" : "#9B3107";
};
export const getBorder = (props) => {
  return props.variant === "contained" ? "none" : "1px solid #9B3107";
};
export const getBorderColor = (props) => {
  return props.variant === "contained" ? "none" : "2px solid #9b3107";
};
