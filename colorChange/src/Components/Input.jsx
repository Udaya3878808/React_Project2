import React from "react";

const Input = ({colorValue,setColorValue,setHexValue,isDarkText,setIsDarkText}) => {
  function handleChange(e) {
    setColorValue(e.target.value);
    setHexValue(colorNames(e.target.value));
  }
  function handleDelete(e) {
    setIsDarkText(!isDarkText);
  }
  return (
    <div>
      <form>
        <label>Add Color Name</label>
        <input
          type="text"
          placeholder="Add color Name"
          required
          value={colorValue}
          onChange={(e) => handleChange(e)}
        />
        <button type="button" onClick={(e) => handleDelete(e)}>
          toggle Text color
        </button>
      </form>
    </div>
  );
};

export default Input;
