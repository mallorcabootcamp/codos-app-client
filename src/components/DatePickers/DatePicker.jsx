import React, { useState } from 'react';
import './DatePicker.scss';
import shortid from 'shortid';


export const DatePicker = ({ text }) => {

  const [date, setDate] = useState('');

  const idValue = shortid.generate()

  const handleChange = ({ target }) => {
    const { name, value } = target
    setDate(() => ({
      [name]: value
    }));
  };

  return (
    <>
      <label className='pt-5 date-picker-text' for={idValue}>{text}:</label>
      <input className='date-picker-input text-center' onChange={handleChange} name={text} type="date" id={idValue} />
    </>
  )
}
