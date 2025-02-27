import React from 'react';

const Input = ({label, id, ...props}) => {
  return (
    <>
    <label htmlFor={id}>{label}</label>
    <input {...props} type="text" id={id} name={id} />
    </>
  );
}

export default Input;