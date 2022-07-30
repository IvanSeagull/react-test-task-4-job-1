import React from 'react';

import styles from './FilterField.module.css';

const FilterField = ({
  filterColumn,
  setFilterColumn,
  filterType,
  setFilterType,
  filterValue,
  setFilterValue,
  fetchData,
}) => {
  return (
    <div className={styles.wrapper}>
      <h2>Фильтр</h2>
      <div className={styles.body}>
        <select
          value={filterColumn}
          onChange={(e) => {
            setFilterColumn(e.target.value);
          }}
          id="column"
          name="column">
          <option value="date">Дата</option>
          <option value="name">Название</option>
          <option value="amount">Количество</option>
          <option value="distance">Расстояние</option>
        </select>

        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          id="type"
          name="type">
          <option value="equal">Равно</option>
          <option value="include">Содержит</option>
          {filterColumn !== 'name' && (
            <>
              <option value="less">Меньше</option>
              <option value="more">Больше</option>
            </>
          )}
        </select>
        <input
          value={filterValue}
          onChange={(e) => setFilterValue(e.target.value)}
          type="text"
          id="value"
          name="value"
          placeholder={
            filterColumn === 'date' && filterType !== 'include' ? 'YYYY-MM-DD' : 'Значение'
          }
        />
        <button onClick={() => fetchData()} type="button">
          Отфильтровать
        </button>
      </div>
    </div>
  );
};

export default FilterField;
