import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "../../components/Table";
import Loader from "../../components/Loader";

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
          <p className="text-center mt-16 text-5xl font-bold">All Questions</p>
          <Table data={questions} />
        </div>
      )}
    </div>
  );
};

export default GetAllQuestions;
