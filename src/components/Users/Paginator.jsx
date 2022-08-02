import React from 'react';
import s from '../Users/Users.module.css';

const Paginator = ({
  totalUsersCount,
  pageSize,
  totalCount,
  currentPage,
  onPageChanged,
}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div className={s.pageNumbers}>
      {pages.map((p) => {
        return (
          <span
            key={Math.random(totalCount)}
            className={currentPage === p ? s.selected : ''}
            onClick={(e) => {
              onPageChanged(p);
            }}
          >
            {p}
          </span>
        );
      })}
    </div>
  );
};

export default Paginator;
