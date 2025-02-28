import React from 'react';

const Input = ({label, id, ...props}) => {
  return (
    <p className='control'>
      <label htmlFor={id}>{label}</label>
      <input {...props} type="text" id={id} name={id} />
    </p>
  );
}

export default Input;