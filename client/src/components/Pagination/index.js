import React from 'react';
import styles from './Pagination.module.css';

import ArrLeft from '../../assets/arrLeft.svg';
import ArrRight from '../../assets/arrRight.svg';

const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
  const handleMinus = () => {
    currentPage !== 1 && setCurrentPage((prev) => prev - 1);
  };
  const handlePlus = () => {
    currentPage !== totalPages && setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.btnCon} onClick={() => handleMinus()}>
        <img src={ArrLeft} />
      </div>
      <p className={styles.counter}>
        {currentPage} / {totalPages}
      </p>
      <div className={styles.btnCon} onClick={() => handlePlus()}>
        <img src={ArrRight} />
      </div>
    </div>
  );
};

export default Pagination;
