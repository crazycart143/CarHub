import { MouseEventHandler } from "react";

// define the types of the passed props so typescript wont complain
// put ? if it is optional
export interface CustomButtonProps {
  title: String;
  containerStyles?: String;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit"; //means it can either be button or submit
}
