import Image from "next/image";
import { SingalmageCardProps } from "./interfaces/ISingalmageCardProps";

const SingalmageCard: React.FC<SingalmageCardProps> = (props) => {
  const {
    image,
    alt = "image",
    btnTwo = "",
    bgColor,
    heading,
    subHeading,
  } = props;
  return (
    <div className="relative flex justify-center my-1">
      <Image
        src={image}
        alt={alt}
        className="block"
        width={1500}
        height={500}
      />
      <div className="absolute sm:top-8 text-center">
        <h1
          className={`${
            bgColor === "black"
              ? "text-white text-xl sm:text-4xl font-bold"
              : "text-xl sm:text-4xl font-bold"
          }`}
        >
          {heading}
        </h1>
        <p
          className={`${
            bgColor === "black"
              ? "text-white mt- 1 sm:mt-2 font-semibold"
              : " mt- 1 sm:mt-2 font-semibold"
          }`}
        >
          {" "}
          {subHeading}{" "}
        </p>
        <div className="-mt-2">
          <button className=" px-4 py-2 bg-blue-500 text-white rounded-3xl">
            Learn More
          </button>
          {btnTwo ? (
            <button className="ml-2 font-semibold px-6 py-2 border-1 border-blue-500 text-blue-500 rounded-full">
              Buy
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default SingalmageCard;
