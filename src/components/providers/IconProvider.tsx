import { type ReactNode } from "react";
import { IconContext } from "react-icons";

type TChildren = {
  children: ReactNode;
};

const IconProvider: React.FC<TChildren> = ({ children }) => {
  return (
    <IconContext.Provider
      value={{ style: { verticalAlign: "middle", fontSize: "28px" } }}
    >
      {children}
    </IconContext.Provider>
  );
};

export default IconProvider;
