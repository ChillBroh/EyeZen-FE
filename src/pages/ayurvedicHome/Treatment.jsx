import React from "react";
import { useParams } from "react-router-dom";
import { treatmentsData } from "../Data";

const Treatment = () => {
  const { id } = useParams();

  const selectedTreatment = treatmentsData.find(
    (treatment) => treatment.id === parseInt(id)
  );

  if (!selectedTreatment) {
    return <div>Treatment not found</div>;
  }

  const imageStyle = {
    width: "100%",
    maxHeight: "400px",
    objectFit: "cover",
    borderRadius: "0.5rem",
  };

  return (
    <div>
      <div className="lg:px-28 px-12 lg:pt-8 lg:pb-3 pt-3 pb-3">
        <span className="text-xl font-bold text-[#004AAD]">
          {selectedTreatment.title}
        </span>
      </div>
      <div className="lg:px-28 px-12 py-4">
        <div className="rounded-3xl">
          <img
            src={selectedTreatment.image}
            alt={selectedTreatment.title}
            className="mx-auto "
            style={imageStyle}
          />
        </div>
      </div>
      <div className="lg:px-28 px-12 py-4">
        <p className="text-gray-700">{selectedTreatment.description}</p>
      </div>
      <div className="lg:px-28 px-12 py-4 pb-12">
        {/* Comment Section */}
        <h2 className="text-xl font-bold mb-4">Comments</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="comment" className="block text-gray-700 font-bold">
              Your Comment:
            </label>
            <textarea
              id="comment"
              name="comment"
              className="w-full border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Post Comment
          </button>
        </form>
      </div>
    </div>
  );
};

export default Treatment;
