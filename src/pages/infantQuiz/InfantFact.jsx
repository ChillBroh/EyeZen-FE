import React, { useState } from "react";
import axios from "axios";
import { storage } from "../../utils/FireBaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

const CreateFact = () => {
  const [title, setTitle] = useState("");
  const [descriptionText, setDescriptionText] = useState(""); // Store as text
  const [imageUrl, setImageUrl] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleImageUpload = async (e) => {
    const selectedImage = e.target.files[0];

    if (!selectedImage) {
      alert("Please select an image file");
      return;
    }

    const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
    const fileType = selectedImage.type;

    if (!allowedTypes.some((type) => fileType.includes(type))) {
      alert("Please upload a valid image file (JPEG, JPG, or PNG)");
      return;
    }

    setIsUploading(true);

    const imageRef = ref(storage, `infantFacts/${selectedImage.name + v4()}`);
    try {
      const snapshot = await uploadBytes(imageRef, selectedImage);
      const url = await getDownloadURL(snapshot.ref);
      setImageUrl(url);
      setIsUploading(false);
    } catch (error) {
      console.error("Error uploading image:", error);
      setErrorMessage("Error uploading image.");
      setIsUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isUploading) {
      alert("Please wait for the image to finish uploading.");
      return;
    }

    // Convert the comma-separated text to an array
    const descriptionArray = descriptionText.split(",").map((item) => item.trim());

    try {
      const response = await axios.post("http://localhost:5000/api/infantFact", {
        title: title,
        description: descriptionArray,
        imageURL: imageUrl,
      });

      if (response.status === 201) {
        setTitle("");
        setDescriptionText(""); // Clear the text input
        setImageUrl("");
        setErrorMessage("");
        alert("Infant fact added successfully");
      }
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.error);
      } else {
        setErrorMessage("An error occurred while adding the infant fact.");
      }
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add Infant Fact</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border rounded px-3 py-2 w-full"
            required
            disabled={isUploading}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description (Comma-separated):</label>
          <input
            type="text"
            value={descriptionText}
            onChange={(e) => setDescriptionText(e.target.value)}
            className="border rounded px-3 py-2 w-full"
            required
            disabled={isUploading}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="block"
            required
            disabled={isUploading}
          />
        </div>
        {isUploading && (
          <div className="mb-4">
            <p className="text-gray-700">Uploading image...</p>
          </div>
        )}
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        {imageUrl && (
          <div className="mb-4">
            <p className="block">Image URL:</p>
            <img src={imageUrl} alt="Uploaded" width="200" className="mt-2" />
          </div>
        )}
        <button
          type="submit"
          className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ${
            isUploading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isUploading}
        >
          {isUploading ? "Adding Fact..." : "Add Fact"}
        </button>
      </form>
    </div>
  );
};

export default CreateFact;
