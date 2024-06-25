import React, { useState } from "react";

const FromValidation = () => {
  let [inputValue, setInputValue] = useState("");
  let inputRef = React.createRef();
  let inputValueRef = "";

  const inputValidationByRef = () => {
    inputValueRef = inputRef.current.value;
  };

  const inputValidation = (e) => {
    setInputValue(e?.target?.value);
  };
  return (
    <>
      <input type="text" value={inputValue} onChange={inputValidation} />
      <h4>{inputValue}</h4>

      <input type="text" ref={inputRef} value={inputValueRef} />
      <h4>{inputValue}</h4>
    </>
  );
};

export default FromValidation;
