import React, { useMemo, useState } from 'react';
import './DatePicker.scss';
import shortid from 'shortid';


export const DatePicker = ({ text, date, onDateChanged }) => {
  const idValue = useMemo(() => shortid.generate(), []);
  return (
    <>
      <label className='pt-5 date-picker-text' for={idValue}>{text}:</label>
      <input value={date} className='date-picker-input' onChange={({ target }) => { onDateChanged(target.value) }} name={text} type="date" id={idValue} />
    </>
  )
}
