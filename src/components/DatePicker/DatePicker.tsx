import React, { FunctionComponent, useMemo } from "react";
import "./DatePicker.scss";
import shortid from "shortid";

interface Props {
  text: string;
  date?: string;
  onDateChanged: (value: string) => void;
}

export const DatePicker: FunctionComponent<Props> = ({
  text,
  date,
  onDateChanged,
}) => {
  const idValue = useMemo(() => shortid.generate(), []);
  return (
    <>
      <label className="pt-2 date-picker-text" htmlFor={idValue}>
        {text}:
      </label>
      <input
        value={date}
        className="date-picker-input"
        onChange={({ target }) => onDateChanged(target.value)}
        name={text}
        type="date"
        id={idValue}
      />
    </>
  );
};
