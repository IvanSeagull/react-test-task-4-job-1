import React from 'react';

import styles from './Table.module.css';

import Sort from '../../assets/Sort.svg';

const headers = [
  {
    name: 'Дата',
    id: 'date',
  },
  {
    name: 'Название',
    id: 'name',
  },
  {
    name: 'Количество',
    id: 'amount',
  },
  {
    name: 'Расстояние',
    id: 'distance',
  },
];

const Table = ({ data, sortBy, setSortBy, sortType, setSortType }) => {
  const handleClicking = (item) => {
    if (sortBy === item.id) {
      if (sortType === 'asc') setSortType('desc');
      else setSortType('asc');
    } else {
      setSortBy(item.id);
      setSortType('asc');
    }
  };

  return (
    <div className={styles.wrapper}>
      <table className={styles.tg}>
        <thead>
          <tr>
            {headers?.map((item) => (
              <th key={item.id} onClick={item.id !== 'date' ? () => handleClicking(item) : null}>
                <div>
                  <h3>{item.name}</h3>
                  {sortBy === item.id && <img src={Sort} />}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => (
            <tr key={item.id}>
              <td>{item.date.slice(0, 10)}</td>
              <td>{item.name}</td>
              <td>{item.amount}</td>
              <td>{item.distance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
