function BookPagination({ items, setItems, nextPage }) {
  let totalPage = Math.ceil((items.totalItems / 20)) || 1;
  totalPage -= 1;

  function handleClick(e) {
    handleClassStyle(e);

    const index = e.target.id * 20;
    setItems({ ...items, startIndex: index });
    nextPage(index);
  }

  function handleClassStyle(e) {
    const activeButton = document.querySelector('li.active');
    activeButton.classList.remove('active');
    e.target.parentElement.classList.add("active");
  }

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        <>
          <li className="page-item active">
            <a
              id={0}
              className="page-link"
              href="#book-container"
              onClick={handleClick}
            >
              1
            </a>
          </li>
          {[...Array(totalPage)].map((n, i) => {
            return (
              <li className="page-item" key={i+1}>
                <a
                  id={i+1}
                  className="page-link"
                  href="#book-container"
                  onClick={handleClick}
                >
                  {i + 2}
                </a>
              </li>
            );
          })}
        </>
      </ul>
    </nav>
  );
}

export default BookPagination;
