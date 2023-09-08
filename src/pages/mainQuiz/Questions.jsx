import React, { useState } from "react";
import Data from "../../assets/infantVisionImg/databse/data";

const Questions = () => {
  const [checked, setChecked] = useState(undefined);
  const selectRadio = () => {
    setChecked(true);
    console.log("Radio Checked");
  };
  return (
    <div>
      <h1 className="text-3xl text-center mt-16">
        Have you experienced any sudden and severe vision loss in one or both
        eyes?
      </h1>
      <div className="mt-16 text-2xl ml-48 sm:ml-16 xs:ml-0">
        <ul>
          <li>
            <input
              type="radio"
              name="answers"
              id="option1"
              value={checked}
              onChange={selectRadio}
              className="mx-16 ml-32 mt-10"
            />
            <label htmlFor="option1">Yes</label>
          </li>
          <li>
            <input
              type="radio"
              name="answers"
              id="option1"
              value={checked}
              onChange={selectRadio}
              className="mx-16 ml-32 mt-10"
            />
            <label htmlFor="option1">No</label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Questions;
