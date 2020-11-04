import React, { useMemo } from 'react';
import './DatePicker.scss';
import shortid from 'shortid';

export const DatePicker = ({ text, date, onDateChanged }: {text:string,date:number,onDateChanged:Function}):JSX.Element => {
  const idValue = useMemo(() => shortid.generate(), []);
  return (
    <>
        <label className='pt-2 date-picker-text' htmlFor={idValue}>{text}:</label>
        <input value={date} className='date-picker-input' onChange={({ target }) => onDateChanged(target.value)} name={text} type="date" id={idValue} />
    </>
  )
}
