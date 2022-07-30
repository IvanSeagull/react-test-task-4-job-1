import axios from 'axios';
import React from 'react';

import './App.css';

import FilterField from './components/FilterField';
import Pagination from './components/Pagination';
import Table from './components/Table';

function App() {
  const [totalItems, setTotalItems] = React.useState([]);

  // filters state
  const [filterColumn, setFilterColumn] = React.useState('date');
  const [filterType, setFilterType] = React.useState('equal');
  const [filterValue, setFilterValue] = React.useState('');

  // sorts state
  const [sortBy, setSortBy] = React.useState('id');
  const [sortType, setSortType] = React.useState('asc');

  // pagination states
  const [totalPages, setTotalPages] = React.useState(5);
  const [currentPage, setCurrentPage] = React.useState(1);

  const fetchData = async () => {
    const url = `
    http://127.0.0.1:3001/items?${filterColumn && 'filterColumn=' + filterColumn}${
      filterType && '&filterCondition=' + filterType
    }${'&filterValue=' + filterValue}${'&sortBy=' + sortBy}${'&sortType=' + sortType}`;
    const { data } = await axios.get(url);
    setTotalItems(data.res);
    setTotalPages(Math.ceil(data.res.length / 5));
    setCurrentPage(1);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  React.useEffect(() => {
    fetchData();
    setCurrentPage(1);
  }, [sortBy, sortType]);

  return (
    <div className="App">
      <FilterField
        filterColumn={filterColumn}
        setFilterColumn={setFilterColumn}
        filterType={filterType}
        setFilterType={setFilterType}
        filterValue={filterValue}
        setFilterValue={setFilterValue}
        fetchData={fetchData}
      />
      <Table
        data={totalItems?.slice(5 * (currentPage - 1), 5 * currentPage)}
        sortBy={sortBy}
        setSortBy={setSortBy}
        sortType={sortType}
        setSortType={setSortType}
      />
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default App;
