import { useState, type FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../features/store";

interface PaginationProps {}

const Pagination: FC<PaginationProps> = ({}) => {
  const [page, setPage] = useState(1);
  const { movie } = useSelector((state: RootState) => state.movie);
  const handleNext = () => setPage((prev) => Math.min(prev + 1, movie?.length));
  const handlePrevious = () => setPage((prev) => Math.max(prev - 1, 1));
  return (
    <nav aria-label='Page navigation example'>
      <ul className='inline-flex -space-x-px text-base h-10'>
        <li>
          <a
            href='#'
            className='flex items-center justify-center px-4 h-10 ms-0 leading-tight transition-all text-white bg-zinc-50/15 border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
          >
            First
          </a>
        </li>
        <li>
          <div
            onClick={() => handlePrevious()}
            className='flex items-center justify-center px-4 h-10 leading-tight transition-all text-white bg-zinc-50/15 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
          >
            Previous
          </div>
        </li>
        {[1, 2, 3, 4, 5, 6].map((item, index) => (
          <li>
            <a
              href='#pppp'
              className='flex items-center justify-center px-4 h-10 leading-tight transition-all text-white bg-zinc-50/15 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
            >
              {2 + 1}
            </a>
          </li>
        ))}

        <li>
          <a
            href='#'
            className='flex items-center justify-center px-4 h-10 leading-tight transition-all text-white bg-zinc-50/15 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
          >
            ...
          </a>
        </li>
        <li>
          <a
            href='#'
            className='flex items-center justify-center px-4 h-10 leading-tight transition-all text-white bg-zinc-50/15 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
          >
            500
          </a>
        </li>

        <li>
          <a
            href='#'
            className='flex items-center justify-center px-4 h-10 leading-tight transition-all text-white bg-zinc-50/15 border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Pagination;
