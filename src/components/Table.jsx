import React from "react";
import Button from "../components/Button";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Table = (props) => {
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    const confirmResult = await Swal.fire({
      title: "Are you sure you want to delete this Question?",
      text: "This action cannot be undone",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it",
      cancelButtonText: "No, cancel",
      reverseButtons: true,
    });
    //check the button confirmation
    if (confirmResult.isConfirmed) {
      try {
        await axios.delete(`http://localhost:5000/api/mainQuiz/${id}`);
        Swal.fire("Expense Deleted!", "", "success");
        navigate("/create-main-quiz");
      } catch (err) {
        console.log(err);
        Swal.fire(err.message, "", "error");
      }
    }
  };

  return (
    <div className="mx-auto  px-4  sm:px-6   lg:px-8 mb-24">
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-center text-sm font-light">
                <thead className="border-b bg-[#004AAD] font-medium dark:border-neutral-800 dark:text-neutral-50">
                  <tr>
                    <th scope="col" className=" px-6 py-4">
                      No
                    </th>
                    <th scope="col" className=" px-6 py-4">
                      Disease
                    </th>
                    <th scope="col" className=" px-6 py-4">
                      Question
                    </th>
                    <th scope="col" className=" px-6 py-4">
                      Option1
                    </th>
                    <th scope="col" className=" px-6 py-4">
                      option2
                    </th>
                    <th scope="col" className=" px-6 py-4">
                      Answer
                    </th>
                    <th scope="col" className=" px-6 py-4">
                      Action
                    </th>
                  </tr>
                </thead>

                {props.data.map((value, index) => (
                  <tbody key={value._id}>
                    <tr className="border-b dark:border-neutral-500">
                      <td className="whitespace-wrap  px-6 py-4 font-medium">
                        {index + 1}
                      </td>
                      <td className="whitespace-wrap  px-6 py-4">
                        {value.disease}
                      </td>
                      <td className="whitespace-wrap  px-6 py-4">
                        {value.questions}
                      </td>
                      <td className="whitespace-wrap  px-6 py-4">
                        {value.options[0]}
                      </td>
                      <td className="whitespace-wrap  px-6 py-4">
                        {value.options[1]}
                      </td>
                      <td className="whitespace-wrap  px-6 py-4">
                        {value.answer}
                      </td>
                      <td className="whitespace-wrap  px-6 py-4">
                        <div className="grid grid-cols-2 ">
                          <div className="mr-24">
                            <Button
                              btnName="Delete"
                              color="red"
                              size="13px"
                              onClick={() => handleDelete(value._id)}
                            />
                          </div>
                          <div className="ml-5">
                            <Link to={`/update-main-quiz/${value._id}`}>
                              <Button
                                btnName="Edit"
                                color="black"
                                size="13px"
                              />
                            </Link>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
