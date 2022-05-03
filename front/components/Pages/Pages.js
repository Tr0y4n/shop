import React from "react";
import { Pagination } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setPageAction } from "../../store/PagesReducer";

export default function Pages() {
  const state = useSelector((state) => state.pagesReducer);
  const pageCount = Math.ceil(state.totalCount / state.limit);
  const dispatch = useDispatch();
  const pages = [];

  for (let i = 0; i < pageCount; i++) {
    pages.push(i + 1);
  }

  return (
    <Pagination className="mt-5">
      {pages.map((page) => (
        <Pagination.Item
          key={page}
          active={state.page === page}
          onClick={() => dispatch(setPageAction(page))}
        >
          {page}
        </Pagination.Item>
      ))}
    </Pagination>
  );
}
