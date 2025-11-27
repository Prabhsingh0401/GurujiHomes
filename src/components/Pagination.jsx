export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const maxVisible = 5;
  let visiblePages = pages;

  if (pages.length > maxVisible) {
    if (currentPage <= 3) {
      visiblePages = pages.slice(0, maxVisible);
    } else if (currentPage >= pages.length - 2) {
      visiblePages = pages.slice(-maxVisible);
    } else {
      visiblePages = pages.slice(currentPage - 3, currentPage + 2);
    }
  }

  return (
    <div className="flex justify-center items-center gap-2 mt-12 flex-wrap animate-fade-in">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-white border-2 border-stone-300 rounded-xl text-stone-700 hover:border-stone-400 hover:bg-stone-50 disabled:opacity-50 disabled:cursor-not-allowed transition duration-300 transform hover:scale-105 active:scale-95"
      >
        Previous
      </button>

      {/* First Page & Dots */}
      {visiblePages[0] > 1 && (
        <>
          <button
            onClick={() => onPageChange(1)}
            className="px-3 py-2 bg-white border-2 border-stone-300 rounded-xl text-stone-700 hover:border-stone-400 hover:bg-stone-50 transition duration-300 transform hover:scale-105"
          >
            1
          </button>
          {visiblePages[0] > 2 && <span className="px-2 py-2 text-stone-500">...</span>}
        </>
      )}

      {/* Page Numbers */}
      {visiblePages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-2 rounded-xl font-semibold transition duration-300 transform hover:scale-105 active:scale-95 ${
            currentPage === page
              ? 'bg-gradient-to-r from-stone-700 to-stone-800 text-white shadow-md hover:shadow-lg'
              : 'bg-white border-2 border-stone-300 text-stone-700 hover:border-stone-400 hover:bg-stone-50'
          }`}
        >
          {page}
        </button>
      ))}

      {/* Last Page & Dots */}
      {visiblePages[visiblePages.length - 1] < totalPages && (
        <>
          {visiblePages[visiblePages.length - 1] < totalPages - 1 && (
            <span className="px-2 py-2 text-stone-500">...</span>
          )}
          <button
            onClick={() => onPageChange(totalPages)}
            className="px-3 py-2 bg-white border-2 border-stone-300 rounded-xl text-stone-700 hover:border-stone-400 hover:bg-stone-50 transition duration-300 transform hover:scale-105"
          >
            {totalPages}
          </button>
        </>
      )}

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-white border-2 border-stone-300 rounded-xl text-stone-700 hover:border-stone-400 hover:bg-stone-50 disabled:opacity-50 disabled:cursor-not-allowed transition duration-300 transform hover:scale-105 active:scale-95"
      >
        Next
      </button>
    </div>
  );
}
