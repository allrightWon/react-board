import "./Pagination.css";

const Pagination = ({ currentPage, totalPages, onChangePage }) => {
  return (
    <div className="pagination">
      <button
        className="prev-page-btn"
        onClick={() => onChangePage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <i className="bi bi-caret-left"></i>
      </button>
      <div className="pages">
        {Array.from({ length: totalPages }, (_, index) => {
          const page = index + 1;

          return (
            <button
              key={page}
              className={`page-btn ${page === currentPage ? "active" : ""}`}
              onClick={() => onChangePage(page)}
            >
              {page}
            </button>
          );
        })}
      </div>
      <button
        className="next-page-btn"
        onClick={() => onChangePage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <i className="bi bi-caret-right"></i>
      </button>
    </div>
  );
};
export default Pagination;
