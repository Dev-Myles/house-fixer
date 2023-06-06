import { type ReactNode } from "react";

type TChildren = {
  children: ReactNode;
  bgColor?: string | "#ffffff";
};

const SectionProvider: React.FC<TChildren> = ({ children, bgColor }) => {
  const styles = {
    backgroundColor: bgColor,
  };

  return (
    <div
      style={{ ...styles }}
      className="m-4 mx-auto  w-[90vw] max-w-xl rounded-lg  px-5 py-4  text-center shadow-lg [&>p]:max-w-prose "
    >
      {children}
    </div>
  );
};

export default SectionProvider;
