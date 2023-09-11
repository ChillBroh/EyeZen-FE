import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "../../components/Table";
import Loader from "../../components/Loader";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const GetAllQuestions = () => {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [disease, setDisease] = useState([]);

  useEffect(() => {
    const getAllData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/mainQuiz");
        setQuestions(response.data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    };
    getAllData();
  }, []);

  const uniqueDisease = Array.from(
    new Set(questions.map((type) => type.disease))
  );

  const filterdDisease = questions.filter((value) => {
    return value.disease === disease;
  });

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <div className="lg:flex lg:justify-center mt-16 items-center space-x-4 xs:grid xs:grid-rows-2 sm:grid sm:grid-cols-2">
            <p className="text-center text-5xl font-bold ">All Questions</p>
            <Link to={"/create-main-quiz"}>
              <Button btnName="Add a quesion" />
            </Link>
          </div>
          <div className="lg:w-1/2 lg:ml-3 lg:pb-0 pb-4">
            <select
              onChange={(e) => setDisease(e.target.value)}
              className="w-full bg-gray-200 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#004AAD]"
            >
              <option value="All Types">All Types</option>
              {uniqueDisease.map((disease, index) => (
                <option key={index} value={disease}>
                  {disease}
                </option>
              ))}
            </select>
          </div>

          <Table data={disease === "All Types" ? questions : filterdDisease} />
        </div>
      )}
    </div>
  );
};

export default GetAllQuestions;
