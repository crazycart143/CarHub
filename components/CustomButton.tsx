"use client";

import React from "react";
import Image from "next/image";
import { CustomButtonProps } from "@/types";

//reusable button component
//props are being defined from interface from types folder
const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  btnType,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      onClick={handleClick}
      className={`custom-btn ${containerStyles}`}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default CustomButton;
