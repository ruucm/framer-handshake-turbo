import ToggleDesign from "https://framer.com/m/Toggle-Yuir.js@GU8mDPeIcJ6B3wVsddYP";
import { FC } from "react";

type TogglePropsT = {
  onClick?: () => void;
};

export const Toggle: FC<TogglePropsT> = ({ onClick }) => {
  return <ToggleDesign onClick={onClick} />;
};
