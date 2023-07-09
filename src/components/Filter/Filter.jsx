import React from "react";
import { nanoid } from 'nanoid'
import css from './Filter.module.css'

const Filter = ({ filterValue, onChange }) => {
  const filterInputId = nanoid();

  return (
    <div className={css.filter}>
      <label className={css.lable} htmlFor={filterInputId}>find contacts by name</label>
      <input
        type="text"
        value={filterValue}
        id={filterInputId}
        onChange={onChange}
      />
    </div>
  );
};

export default Filter;