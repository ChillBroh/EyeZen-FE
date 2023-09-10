import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "../../components/Table";
import Loader from "../../components/Loader";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const GetAllQuestions = () => {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <div className="flex justify-center mt-16 items-center space-x-4">
            <p className="text-center text-5xl font-bold ">All Questions</p>
            <Link to={"/create-main-quiz"}>
              <Button btnName="Add a quesion" />
            </Link>
          </div>

          <Table data={questions} />
        </div>
      )}
    </div>
  );
};

export default GetAllQuestions;
