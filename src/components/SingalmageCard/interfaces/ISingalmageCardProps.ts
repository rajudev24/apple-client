import { StaticImageData } from "next/image";

export type SingalmageCardProps = {
  image: StaticImageData | string;
  alt: string;
  btnTwo?: string;
  bgColor?: string;
  heading: string;
  subHeading: string;
};
