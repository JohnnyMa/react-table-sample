import React, { useState, useMemo, useRef } from "react";
import { TableProps } from "./interface";
import "./Table.css";

const Table: React.FC<TableProps> = ({
  data,
  columns,
  defaultPageSize = 10,
  fixedLeftColumns = 0,
  fixedRightColumns = 0,
}) => {
  const [sortColumn, setSortColumn] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(
    Math.ceil(data.length / defaultPageSize)
  );
  const [pageSize, setPageSize] = useState(defaultPageSize);

  const sortedData = useMemo(() => {
    if (sortColumn) {
      return [...data].sort((a, b) => {
        if (a[sortColumn] < b[sortColumn]) {
          return sortOrder === "asc" ? -1 : 1;
        }
        if (a[sortColumn] > b[sortColumn]) {
          return sortOrder === "asc" ? 1 : -1;
        }
        return 0;
      });
    }
    return data;
  }, [data, sortColumn, sortOrder]);

  const visibleColumns = useMemo(() => {
    const cols = columns.slice();
    if (fixedLeftColumns > 0) {
      cols.splice(0, fixedLeftColumns);
    }
    if (fixedRightColumns > 0) {
      cols.splice(-fixedRightColumns);
    }
    return cols;
  }, [columns, fixedLeftColumns, fixedRightColumns]);

  const visibleData = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;
    return sortedData.slice(start, end);
  }, [currentPage, pageSize, sortedData]);

  const handleSortClick = (columnKey: string) => {
    if (columnKey === sortColumn) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(columnKey);
      setSortOrder("asc");
    }
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  const handlePageSizeChange = (newPageSize: string) => {
    const parsedPageSize = parseInt(newPageSize);
    const newPageCount =
      parsedPageSize === 0 ? 1 : Math.ceil(sortedData.length / parsedPageSize);

    setCurrentPage(1);
    setPageSize(parsedPageSize);
    setTotalPages(newPageCount);
  };

  const tableRef = useRef<HTMLTableElement>(null);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (tableRef.current) {
      tableRef.current.style.left = `-${e.currentTarget.scrollLeft}px`;
    }
  };

  if (!data || data.length === 0) {
    return <div className="table-wrapper empty">No data available</div>;
  }

  return (
    <>
      <div className="table-wrapper" onScroll={handleScroll}>
        <table className="table-left table-item">
          <thead>
            <tr>
              {columns.slice(0, fixedLeftColumns).map((col, index, arr) => (
                <th
                  key={col.key}
                  className="fixed-left-columns"
                  style={{
                    width: col.width + "px",
                  }}
                  onClick={() => {
                    if (col.sortable) {
                      handleSortClick(col.key);
                    }
                  }}
                >
                  {col.name}
                  {sortColumn === col.key && (
                    <span className="sort-arrow">
                      {sortOrder === "asc" ? " ▲" : " ▼"}
                    </span>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {visibleData.map((row, i) => (
              <tr key={i}>
                {columns.slice(0, fixedLeftColumns).map((col) => (
                  <td key={col.key} className="fixed-left-columns">
                    {row[col.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <table className="table-scrollable table-item" ref={tableRef}>
          <thead>
            <tr>
              {visibleColumns.map((col) => (
                <th
                  key={col.key}
                  style={{ width: col.width + "px" }}
                  onClick={() => {
                    if (col.sortable) {
                      handleSortClick(col.key);
                    }
                  }}
                >
                  {col.name}
                  {sortColumn === col.key && (
                    <span className="sort-arrow">
                      {sortOrder === "asc" ? " ▲" : " ▼"}
                    </span>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {visibleData.map((row, i) => (
              <tr key={i}>
                {visibleColumns.map((col) => (
                  <td key={col.key}>{row[col.key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <table className="table-right table-item">
          <thead>
            <tr>
              {columns.slice(-fixedRightColumns).map((col, index, arr) => (
                <th
                  key={col.key}
                  style={{
                    width: col.width + "px",
                  }}
                  className="fixed-right-columns"
                  onClick={() => {
                    if (col.sortable) {
                      handleSortClick(col.key);
                    }
                  }}
                >
                  {col.name}
                  {sortColumn === col.key && (
                    <span className="sort-arrow">
                      {sortOrder === "asc" ? " ▲" : " ▼"}
                    </span>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {visibleData.map((row, i) => (
              <tr key={i}>
                {columns.slice(-fixedRightColumns).map((col) => (
                  <td key={col.key} className="fixed-right-columns">
                    {row[col.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pagination-wrapper">
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageClick(page)}
              disabled={page === currentPage}
            >
              {page}
            </button>
          ))}
        </div>
        <select
          name="selectedFruit"
          className="paginator"
          defaultValue={pageSize}
          onChange={(e) => handlePageSizeChange(e.target.value)}
        >
          <option value="5">5 / page</option>
          <option value="10">10 / page</option>
          <option value="15">15 / page</option>
        </select>
      </div>
    </>
  );
};

export default Table;
