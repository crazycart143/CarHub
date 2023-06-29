import { MouseEventHandler } from "react";

// define the types of the passed props so typescript wont complain
// put ? if it is optional
export interface CustomButtonProps {
  title: String;
  containerStyles?: String;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit"; //means it can either be button or submit
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}

export interface SearchManufacturerProps {
  manufacturer: String;
  setManufacturer: (manufacturer: string) => void;
}

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}
export interface CarCardProps {
  model: string;
  make: string;
  mpg: number;
  transmission: string;
  year: number;
  drive: string;
  cityMPG: number;
}

export interface FilterProps {
  manufacturer: string;
  year: number;
  fuel: string;
  limit: number;
  model: string;
}
