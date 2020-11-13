import React from "react";

const InputFill = (props) => {
  return (
    <>
      <label className={props.classLabel} htmlFor={props.for}>
        {props.labelName}
      </label>
      <input
        onChange={props.handleChange}
        required={props.isRequired}
        className={props.classNamesInput}
        type={props.type}
        maxLength={props.lenght}
        value={props.value}
        name={props.nameInput}
        id={props.id}
        placeholder={props.placeholder}
      />
    </>
  );
};

export default InputFill;
