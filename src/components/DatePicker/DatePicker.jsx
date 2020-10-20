import React, { useMemo, useState } from 'react';
import './DatePicker.scss';
import shortid from 'shortid';


export const DatePicker = ({ text, date, onDateChanged }) => {
  const idValue = useMemo(() => shortid.generate(), []);
  return (
    <>
      <div>
        <label className='pt-2 date-picker-text' for={idValue}>{text}:</label>
      </div>
        <input value={date} className='date-picker-input' onChange={({ target }) => { onDateChanged(target.value) }} name={text} type="date" id={idValue} />
    </>
  )
}
