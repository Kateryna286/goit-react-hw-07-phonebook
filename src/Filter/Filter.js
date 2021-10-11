import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../Redux/contacts/contacts-actions';
import { getFilter } from '../Redux/contacts/contacts-selector';
import './Filter.css';

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <div className="filter">
      <label>
        <span className="filterText">Filter</span>
        <input
          type="text"
          value={value}
          onChange={e => dispatch(actions.updateFilter(e.target.value))}
        />
      </label>
    </div>
  );
}
