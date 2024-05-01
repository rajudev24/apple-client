import Image from "next/image";
import { DoubleImageCardProps } from "./interface/IDoubleImageCard";
import { FaApple } from "react-icons/fa";

const DoubleImageCard: React.FC<DoubleImageCardProps> = ({
  imageOne,
  imageTwo,
  alt = "image",
  btnTwo = "",
  bgColorOne,
  bgColorTwo,
  headingOne,
  headingTwo,
  subHeadingOne,
  subHeadingTwo,
  conentPosition,
  modelName,
}) => {
  const contentClass =
    conentPosition === "bottom" ? "absolute bottom-4" : "absolute sm:top-4";
  const headingClass = (bgColor: string | undefined) =>
    `text-xl sm:text-4xl font-bold flex justify-center items-center ${
      bgColor === "black" ? "text-white" : ""
    }`;

  return (
    <div className="md:flex justify-between">
      {[
        {
          image: imageOne,
          heading: headingOne,
          bgColor: bgColorOne,
          subHeading: subHeadingOne,
        },
        {
          image: imageTwo,
          heading: headingTwo,
          bgColor: bgColorTwo,
          subHeading: subHeadingTwo,
          model: modelName,
        },
      ].map(({ image, heading, bgColor, subHeading, model }, index) => (
        <div key={index} className="relative flex justify-center m-1">
          <Image
            src={image}
            alt={alt}
            className="block"
            width={1500}
            height={500}
          />
          <div className={`${contentClass} text-center`}>
            <h1 className={headingClass(bgColor)}>
              {heading === "" ? "" : <FaApple />} {heading}
            </h1>
            {modelName && (
              <p className="text-red-500 font-semibold"> {model} </p>
            )}
            <p className={`${bgColor === "black" ? "text-white" : ""} mt-1`}>
              {subHeading}
            </p>
            <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-3xl">
              Learn More
            </button>
            {btnTwo && heading && (
              <button className="ml-2 font-semibold mt-2 px-6 py-2 border border-blue-500 text-blue-500 rounded-full">
                {heading === "Card" ? "Apply Now" : "Buy"}
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DoubleImageCard;
