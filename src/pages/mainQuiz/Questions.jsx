import React, { useState } from "react";

const Questions = (props) => {
  const questions = props.data;

  // Initialize an array to store the checked state for each option
  const [checkedOptions, setCheckedOptions] = useState(
    Array(questions.length).fill(false)
  );

  //array to get input answers
  const [input, setInput] = useState([]);

  //array with predefine answers
  const answers = questions.map((item) => item.answer);
  let correctCount = 0;

  //generate final calculation
  answers.forEach((value, index) => {
    if (value === input[index]) {
      correctCount = correctCount + 1;
    }
  });

  const finalPercentage = (correctCount / answers.length) * 100;

  const selectRadio = (value, index) => {
    const updatedValues = [...input];
    updatedValues[props.num] = value;

    setInput(updatedValues);

    const updatedCheckedOptions = [...checkedOptions];
    updatedCheckedOptions[props.num] = index;

    // Update the state with the new array
    setCheckedOptions(updatedCheckedOptions);
    props.onFinalPercentatge(finalPercentage);
  };

  return (
    <div>
      <h1 className="text-3xl text-center mt-16">
        {questions[props.num].questions}
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
                  checked={checkedOptions[props.num] === index}
                  onChange={() => selectRadio(value, index)}
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
