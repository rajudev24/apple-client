import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddContent = () => {
  const [formState, setFormState] = useState({
    heading: "",
    subheading: "",
    section: "",
    image: null,
    imageUrl: "",
    submitting: false,
  });
  const { heading, subheading, section, image, imageUrl } = formState;

  const handleInputChange = (e: any) => {
    const { name, value, files } = e.target;
    if (name === "heading" || name === "subheading") {
      setFormState({ ...formState, [name]: value });
    }
    if (name === "image" && files && files.length > 0) {
      setFormState({ ...formState, image: files[0] });
    }
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === "section") {
      setFormState({ ...formState, section: value });
    }
  };

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
      return responseData.data.url;
    } catch (error) {
      console.error("Error uploading image:", error);
      throw error;
    }
  };

  const handleSubmitForm = async (e: any) => {
    e.preventDefault();
    try {
      setFormState({ ...formState, submitting: true });
      const imageUrl = await handleUploadImage();
      const data = {
        [section]: {
          heading,
          subheading,
          imageUrl,
        },
      };
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
        toast.success("Added the content!", { position: "top-right" });
      }
      setFormState({
        ...formState,
        heading: "",
        subheading: "",
        image: null,
        imageUrl: "",
        submitting: false,
      });
    } catch (error) {
      console.error("Error handling form submission:", error);
      setFormState({ ...formState, submitting: false });
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
          disabled={formState.submitting}
          className={`bg-indigo-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
            formState.submitting ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {formState.submitting ? "Submitting..." : "Upload & Submit"}
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddContent;
