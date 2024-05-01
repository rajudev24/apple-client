import { StaticImageData } from "next/image";

export type DoubleImageCardProps = {
  imageOne: StaticImageData | string;
  imageTwo: StaticImageData | string;
  conentPosition?: string;
  alt: string;
  btnTwo?: string;
  bgColorOne?: string;
  bgColorTwo?: string;
  headingOne?: string;
  headingTwo?: string;
  subHeadingOne: string;
  subHeadingTwo: string;
  modelName?: string;
};
