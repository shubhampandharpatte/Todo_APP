// FilterButtons.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterTodos, markAllCompleted, clearCompletedTodos } from '../redux/actions';

const FilterButtons = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state) => state.filter);

  const handleFilter = (filter) => {
    dispatch(filterTodos(filter));
  };

  return (
    <div className="flex space-x-4 items-center">
      <select
        className="text-sm px-2 py-1 rounded border border-gray-300 focus:outline-none transition-colors duration-200 ease-in-out hover:border-blue-400 focus:border-blue-400"
        value={currentFilter}
        onChange={(e) => handleFilter(e.target.value)}
      >
        <option value="ALL">Default</option>
        <option value="COMPLETED">Completed</option>
        <option value="INCOMPLETE">Incomplete</option>
      </select>

      <button
        className="text-sm px-2 py-1 bg-green-500 text-white rounded ml-2 transition-transform transform hover:scale-105 focus:scale-105"
        onClick={() => dispatch(markAllCompleted())}
      >
        Mark All Completed
      </button>

      <button
        className="text-sm px-2 py-1 bg-red-500 text-white rounded ml-2 transition-transform transform hover:scale-105 focus:scale-105"
        onClick={() => dispatch(clearCompletedTodos())}
      >
        Clear Completed
      </button>
    </div>
  );
};

export default FilterButtons;
