import React, { useState } from "react";
import data from "../../assets/databse/data";

const Questions = (props) => {
  const questions = data;

  const [checked, setChecked] = useState(false);
  const selectRadio = () => {
    setChecked(true);
    props.onRadioSelect(true);
    console.log(checked);
  };
  return (
    <div>
      <h1 className="text-3xl text-center mt-16">
        {questions[props.num].question}
      </h1>
      <div className="mt-16 text-3xl ml-48 sm:ml-16 xs:ml-0">
        <ul>
          {questions[props.num].options.map((value, index) => (
            <div key={index}>
              <li>
                <input
                  type="radio"
                  name="answers"
                  id={`q${index}-option`}
                  className="mx-16 ml-32 mt-10 hover:cursor-pointer"
                  onClick={selectRadio}
                />
                <label
                  htmlFor={`q${index}-option`}
                  className="hover:cursor-pointer"
                >
                  {value}
                </label>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Questions;
