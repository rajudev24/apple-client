import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateContent = () => {
  const router = useRouter();
  const { id } = router.query;
  const [content, setContent] = useState<any>();

  const [formState, setFormState] = useState({
    heading: "",
    subheading: "",
    image: null,
    imageUrl: "",
    submitting: false,
  });

  const { heading, subheading, image, imageUrl, submitting } = formState;

  const handleInputChange = (e: any) => {
    const { name, value, files } = e.target;
    if (name === "heading" || name === "subheading") {
      setFormState((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    } else if (name === "image" && files && files.length > 0) {
      setFormState((prevState) => ({
        ...prevState,
        image: files[0],
      }));
    }
  };

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const res = await fetch(
          `https://crud-server-plum.vercel.app/api/v1/content/${id}`
        );
        const result = await res.json();
        if (result) {
          setContent(result.data);
          setFormState((prevState) => ({
            ...prevState,
            heading:
              result.data?.banner?.heading ||
              result.data?.sectionOne?.heading ||
              result.data?.sectionTwo?.heading,
            subheading:
              result.data?.banner?.subheading ||
              result.data?.sectionOne?.subheading ||
              result.data?.sectionTwo?.subheading,
          }));
        } else {
          console.log("Content not found");
        }
      } catch (error) {
        console.error("Error fetching content:", error);
      }
    };
    fetchContent();
  }, [id]);

  const handleUploadImage = async () => {
    const formData = new FormData();
    if (image) {
      formData.append("image", image);
    }
    try {
      const response = await fetch(
        "https://api.imgbb.com/1/upload?key=15744b6cf47c8879b2cbb847289f51e9",
        {
          method: "POST",
          body: formData,
        }
      );
      const responseData = await response.json();
      return responseData?.data?.url;
    } catch (error) {
      console.error("Error uploading image:", error);
      throw error;
    }
  };

  const handleSubmitForm = async (e: any) => {
    e.preventDefault();
    try {
      setFormState((prevState) => ({
        ...prevState,
        submitting: true,
      }));
      const imageUrl = await handleUploadImage();
      let key = "";
      if (content.banner) {
        key = "banner";
      } else if (content.sectionOne) {
        key = "sectionOne";
      } else if (content.sectionTwo) {
        key = "sectionTwo";
      }
      const data = {
        [key]: {
          heading,
          subheading,
          imageUrl,
        },
      };
      const dbResponse = await fetch(
        `https://crud-server-plum.vercel.app/api/v1/content/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const dbData = await dbResponse.json();
      if (dbData) {
        toast.success("Updated Successfully!", {
          position: "top-right",
        });
        router.push("/admin");
      }
    } catch (error) {
      console.error("Error handling form submission:", error);
      setFormState((prevState) => ({
        ...prevState,
        submitting: false,
      }));
    }
  };

  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-gray-100 rounded-lg shadow-lg">
      <form onSubmit={handleSubmitForm}>
        <div className="mb-4">
          <label
            htmlFor="heading"
            className="block text-gray-700 font-bold mb-2"
          >
            Heading
          </label>
          <input
            type="text"
            name="heading"
            className="w-full px-3 py-2 leading-tight focus:outline-none focus:shadow-outline rounded-sm"
            placeholder="Enter heading"
            value={heading}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="subheading"
            className="block text-gray-700 font-bold mb-2"
          >
            Subheading
          </label>
          <input
            type="text"
            name="subheading"
            className="w-full px-3 py-2 leading-tight focus:outline-none focus:shadow-outline rounded-sm"
            placeholder="Enter subheading"
            value={subheading}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700 font-bold mb-2">
            Image
          </label>
          <input
            type="file"
            name="image"
            accept="image/*"
            className="w-full px-3 py-2 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleInputChange}
            required
          />
        </div>
        <button
          type="submit"
          disabled={submitting}
          className={`bg-indigo-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
            submitting ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {submitting ? "Submitting..." : "Upload & Submit"}
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default UpdateContent;
