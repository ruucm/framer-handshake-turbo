import { FC } from "react";

type ButtonPropsT = {
  type?: "button" | "submit" | "reset";
  children?: React.ReactNode | string;
};

export const Button: FC<ButtonPropsT> = ({ type, children }) => {
  return (
    <button type={type} style={{ background: "green", color: "white" }}>
      {children}
    </button>
  );
};
