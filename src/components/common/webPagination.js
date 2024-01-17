import React from "react";
import _ from "lodash";
export const Pagination = (props) => {
  const { dataCount, pageSize, currentPage, onPageSelect } = props;

  const pageCount = Math.ceil(dataCount / pageSize);
  const pages = _.range(1, pageCount + 1);

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pages.map((page) => (
          <li
            key={page}
            className={currentPage === page ? "page-item active" : "page-item"}
          >
            <a onClick={() => onPageSelect(page)} className="page-link">
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
