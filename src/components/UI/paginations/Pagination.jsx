import React from "react";
import St from "../../../styles/App.module.css"
import * as utils  from "../../Utils"

const Pagination = ({totalPages, page, changePage}) => {
  // console.log(page);
  const pagesArray = utils.getPagesArray(totalPages);

  return (
    <div className={St.page__wrapper}>
          {pagesArray.map(p => 
            <span 
              key={p}
              onClick={() => changePage(p)}
              className={page === p ? [St.page, St.page__current].join(' ') : St.page}
            >{p}</span>
          )}
        </div>
  );
}

export default Pagination;