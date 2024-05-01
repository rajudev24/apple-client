import { IContent } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const ShowContent = () => {
  const [content, setContent] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://crud-server-plum.vercel.app/api/v1/content/get-contents"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setContent(data.data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const dataObject: IContent = content.reduce((acc: any, item: IContent) => {
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
      <div className="sm:flex justify-around">
        {content && content.length > 0 ? (
          <div className=" m-4 p-4 shadow-lg rounded-md">
            <p className="text-xl font-semibold">
              {" "}
              {dataObject?.banner?.heading}{" "}
            </p>
            <p className="mb-2"> {dataObject.banner?.subheading} </p>
            <Image
              src={dataObject?.banner?.imageUrl || ""}
              alt="image"
              width={400}
              height={400}
              className="mb-4 rounded-md"
            />
            <Link
              href={content[0]?._id || ""}
              className="bg-green-500 text-white font-semibold py-2 px-4 rounded-md "
            >
              Update
            </Link>
          </div>
        ) : null}
        {content && content.length > 1 ? (
          <div className=" m-4 p-4 shadow-lg rounded-md">
            <p className="text-xl font-semibold">
              {" "}
              {dataObject?.sectionOne?.heading}{" "}
            </p>
            <p className="mb-2"> {dataObject.sectionOne?.subheading} </p>

            <Image
              src={dataObject?.sectionOne?.imageUrl || ""}
              alt="image"
              width={400}
              height={400}
              className="mb-4 rounded-md"
            />
            <Link
              href={content[1]?._id || ""}
              className="bg-green-500 text-white font-semibold py-2 px-4 rounded-md "
            >
              Update
            </Link>
          </div>
        ) : null}
        {content && content.length > 2 ? (
          <div className=" m-4 p-4 shadow-lg rounded-md">
            <p className="text-xl font-semibold">
              {" "}
              {dataObject?.sectionTwo?.heading}{" "}
            </p>
            <p className="mb-2"> {dataObject.sectionTwo?.subheading} </p>

            <Image
              src={dataObject?.sectionTwo?.imageUrl || ""}
              alt="image"
              width={400}
              height={400}
              className="mb-4 rounded-md"
            />
            <Link
              href={content[2]?._id || ""}
              className="bg-green-500 text-white font-semibold py-2 px-4 rounded-md "
            >
              Update
            </Link>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default ShowContent;
