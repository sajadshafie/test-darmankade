import React from "react";
import type { NextPage } from "next";

interface Props {
  onClick: () => void;
  content: string;
  className: string;
}

const Appbutton: NextPage<Props> = ({
  onClick,
  className,
  content,
}) => {
  return (
    <div className={`button-class ${className}`} onClick={onClick}>
      {content}
    </div>
  );
};
export default Appbutton;
