import SingalmageCard from "./components/SingalmageCard/SingalmageCard";
import image1 from "/public/imgs/banner.png";
import image2 from "/public/imgs/pic.png";
import image3 from "/public/imgs/pic-1.jpg";
import image4 from "/public/imgs/pic-3.png";
import image5 from "/public/imgs/pic-2.png";
import image6 from "/public/imgs/pic-4.png";
import image7 from "/public/imgs/pic-5.png";
import image8 from "/public/imgs/pic-6.png";
import image9 from "/public/imgs/pic-7.png";
import DoubleImageCard from "./components/DoubleImageCard/DoubleImageCard";
import Footer from "./components/Footer/Footer";
import SliderSectionTwo from "./components/SliderSectionTwo/SliderSectionTwo";
import SliderSectionOne from "./components/SliderSectionOne/SliderSectionOne";

import { IContent } from "../types";
import { GetServerSideProps } from "next";
import Header from "./components/Header/Header";

export default function Home({ content }: { content: IContent[] }) {
  const dataObject: IContent =
    content &&
    content.reduce((acc: any, item: IContent) => {
      if (item.banner) {
        acc.banner = item.banner;
      } else if (item.sectionOne) {
        acc.sectionOne = item.sectionOne;
      } else if (item.sectionTwo) {
        acc.sectionTwo = item.sectionTwo;
      }
      return acc;
    }, {});
  return (
    <>
      <div className="hidden sm:block">
        <Header />
      </div>
      <div className="bg-black text-center py-1">
        <p className="text-white sm:mt-16">
          {" "}
          Join us this Earth Day by recycling your Apple devices.{" "}
          <span className="text-blue-500"> Recycle for free {`>`}</span>
        </p>
      </div>
      <SingalmageCard
        image={dataObject.banner?.imageUrl || image1}
        alt="image"
        heading={dataObject?.banner?.heading || "Apple 2030"}
        subHeading={
          dataObject?.banner?.subheading ||
          "A Plan as innovative as our products"
        }
      />
      <SingalmageCard
        image={image2}
        alt="image"
        btnTwo="yes"
        bgColor="black"
        heading="iPhone 15 Pro"
        subHeading="Titanium. So strong. So light. So Pro."
      />
      <SingalmageCard
        image={image3}
        alt="image"
        btnTwo="yes"
        heading="iPhone 15"
        subHeading="New Camera. New Design. Newphoria."
      />
      <DoubleImageCard
        imageOne={dataObject.sectionOne?.imageUrl || image4}
        imageTwo={dataObject.sectionTwo?.imageUrl || image5}
        alt="image"
        btnTwo="yes"
        bgColorOne="black"
        headingOne=""
        headingTwo={dataObject.sectionTwo?.heading}
        subHeadingOne={
          dataObject.sectionOne?.subheading ||
          "Apple Worldwide Developers Conference.Join us online June 10–14."
        }
        subHeadingTwo={
          dataObject.sectionTwo?.subheading ||
          "Welcome to the era of spatial computing."
        }
        conentPosition="bottom"
      />
      <DoubleImageCard
        imageOne={image6}
        imageTwo={image7}
        alt="image"
        btnTwo="yes"
        bgColorTwo="black"
        headingOne="Macbook Air"
        headingTwo="Watch"
        subHeadingOne="Lean. Mean. M3 machine."
        subHeadingTwo="Smarter. Brighter. Mightier."
        conentPosition="top"
        modelName="SERIES 9"
      />
      <DoubleImageCard
        imageOne={image8}
        imageTwo={image9}
        alt="image"
        btnTwo="yes"
        headingOne="Card"
        headingTwo="Trade In"
        subHeadingOne="Get up to 3% Daily Cash back
        with every purchase."
        subHeadingTwo="Get $180-$630 in credit when you
        trade in iPhone 11 or higher.1"
        conentPosition="top"
      />
      <SliderSectionOne />
      <SliderSectionTwo />
      <Footer />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const response = await fetch(
      "https://crud-server-plum.vercel.app/api/v1/content/get-contents"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    console.log(data);
    return {
      props: {
        content: data.data,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        content: [],
      },
    };
  }
};
