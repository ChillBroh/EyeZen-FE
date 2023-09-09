import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import { AiTwotoneHome } from "react-icons/ai";

const CreateQuiz = () => {
  const navigate = useNavigate();

  //store database states

  const [Disease, setDisease] = useState("");
  const [Question, setQuestion] = useState("");
  const [amount, setAmount] = useState(0);
  const [Option1, setOption1] = useState("");

  //send data to database
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Disease === "" || amount === 0 || Option1 === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "missing required fields!",
      });
      return;
    }

    try {
      const result = await Swal.fire({
        title: "Confirm Expenses Details",
        showDenyButton: true,
        confirmButtonText: "confirm",
        denyButtonText: `cancel`,
      });

      if (result.isConfirmed) {
        const response = await axios.post(
          "http://localhost:5000/api/mainQuiz",
          {
            Disease,
            Question,
            amount,
            Option1,
          }
        );
        Swal.fire(response.data.message, "", "success");
        navigate("/");
      } else {
        Swal.fire("Expense adding Cancelled!", "", "error");
      }
    } catch (err) {
      // using err instead of error
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: err.message,
      });
    }
  };

  const handeleCancel = async (e) => {
    e.preventDefault();

    try {
      const result = await Swal.fire({
        title: "Are You Sure You want to cancel?",
        showDenyButton: true,
        confirmButtonText: "confirm",
        denyButtonText: `cancel`,
        icon: "warning",
      });

      if (result.isConfirmed) {
        navigate("/");
      }
    } catch (err) {
      // using err instead of error
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: err.message,
      });
    }
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-10 sm:px-4 sm:py-15 lg:max-w-7xl lg:px-8">
      <Link to={`/`}>
        <button type="button" data-te-ripple-init data-te-ripple-color="light">
          <AiTwotoneHome className="text-black hover:text-red-700 text-4xl" />
        </button>
      </Link>
      <form>
        <div className="space-y-12">
          <div>
            <h2 className="text-3xl font-semibold leading-7 text-[#004AAD] text-center">
              Add Questions to Main Quiz
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              {/* select disease*/}
              <div className="sm:col-span-3">
                <label
                  htmlFor="disease"
                  className="block text-lg font-medium leading-6 text-gray-900"
                >
                  Select a disease
                </label>
                <div className="mt-2">
                  <select
                    id="disease"
                    name="disease"
                    className="block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(e) => {
                      setDisease(e.target.value);
                    }}
                  >
                    <option>--Select one--</option>
                    <option value={"Myopia"}>Myopia</option>
                    <option value={"Hyperopia"}>Hyperopia</option>
                    <option value={"Color Blindness"}>Color Blindness</option>
                    <option value={"Contrast Sensitvity"}>
                      Contrast Sensitivity
                    </option>
                    <option value={"Depth Precision"}>Depth Precision</option>
                    <option value={"Macular Degeneration"}>
                      Macular Degeneration
                    </option>
                  </select>
                </div>
              </div>

              {/* add questions */}
              <div className="col-span-full">
                <label
                  htmlFor="question"
                  className="block text-lg font-medium leading-6 text-gray-900"
                >
                  Add a Question
                </label>

                <div className="mt-2">
                  <textarea
                    rows={10}
                    type="text"
                    name="question"
                    id="question"
                    className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Question"
                    onChange={(e) => {
                      setQuestion(e.target.value);
                    }}
                  />
                </div>
              </div>
              {/* add Option1*/}
              <div className="sm:col-span-3">
                <label
                  htmlFor="option1"
                  className="block text-lg font-medium leading-6 text-gray-900"
                >
                  Option1
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="option1"
                    id="option1"
                    className="block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(e) => {
                      setOption1(e.target.value);
                    }}
                  />
                </div>
              </div>
              {/* amount */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="amount"
                  className="block text-lg font-medium leading-6 text-gray-900"
                >
                  Add Amount
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    name="amount"
                    id="amount"
                    placeholder="Amount spent"
                    className="block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(e) => {
                      setAmount(e.target.value);
                    }}
                  />
                </div>
              </div>

              {/* reset submit button */}
              <div className="mt-6 flex text-rightjustify-end gap-x-6">
                <button
                  type="reset"
                  className="text-lg font-semibold leading-6  text-red-700"
                  onClick={handeleCancel}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-md text-right bg-black px-3 py-2 text-lg font-semibold text-white shadow-sm hover:bg-[#41A4FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateQuiz;
