import React, { useState } from "react";
import data from "../../assets/databse/data";

const Questions = () => {
  const questions = data[0];
  const [checked, setChecked] = useState(undefined);
  const selectRadio = () => {
    setChecked(true);
    console.log("Radio Checked");
  };
  return (
    <div>
      <h1 className="text-3xl text-center mt-16">{questions.question}</h1>
      <div className="mt-16 text-2xl ml-48 sm:ml-16 xs:ml-0">
        <ul key={questions.id}>
          {questions.options.map((value, index) => (
            <li>
              <input
                type="radio"
                name="answers"
                id={`q${index}-option`}
                value={checked}
                onChange={selectRadio}
                className="mx-16 ml-32 mt-10"
              />
              <label htmlFor={`q${index}-option`}>{value}</label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Questions;
