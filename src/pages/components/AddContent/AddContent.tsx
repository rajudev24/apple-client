import Image from "next/image";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddContent = () => {
  const [heading, setHeading] = useState("");
  const [subheading, setSubheading] = useState("");
  const [section, setSection] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (name === "heading") setHeading(value);
    if (name === "subheading") setSubheading(value);
    if (name === "image" && files && files.length > 0) setImage(files[0]);
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === "section") setSection(value);
  };

  const handleUploadImage = async () => {
    const formData = new FormData();
    if (image) {
      formData.append("image", image);
    }
    console.log(formData);
    try {
      const response = await fetch(
        "https://api.imgbb.com/1/upload?key=15744b6cf47c8879b2cbb847289f51e9",
        {
          method: "POST",
          body: formData,
        }
      );

      const responseData = await response.json();
      setImageUrl(responseData.data.url);
      return responseData.data.url;
    } catch (error) {
      console.error("Error uploading image:", error);
      throw error;
    }
  };

  const handleSubmitForm = async (e: any) => {
    e.preventDefault();
    try {
      setSubmitting(true);
      const imageUrl = await handleUploadImage();
      console.log(section);
      const data = {
        [section]: {
          heading,
          subheading,
          imageUrl,
        },
      };
      console.log(data);
      const dbResponse = await fetch(
        "https://crud-server-plum.vercel.app/api/v1/content/create-content",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const dbData = await dbResponse.json();
      if (dbData) {
        toast.success("Added the content !", {
          position: "top-right",
        });
      }

      setHeading("");
      setSubheading("");
      setImage(null);
      setImageUrl("");
      setSubmitting(false);
    } catch (error) {
      console.error("Error handling form submission:", error);
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-gray-100 rounded-lg shadow-lg">
      <form onSubmit={handleSubmitForm}>
        <div className="mb-4">
          <select
            className="w-full p-2 rounded-sm"
            name="section"
            value={section}
            onChange={handleSelectChange}
            required
          >
            <option value="">Please Select Option</option>
            <option value="banner">Banner</option>
            <option value="sectionOne">Section One</option>
            <option value="sectionTwo">Section Two</option>
          </select>
        </div>
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
            required
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
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700 font-bold mb-2">
            Image ({section === "banner" ? "1921 * 693" : " 943 * 581"})
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

export default AddContent;
