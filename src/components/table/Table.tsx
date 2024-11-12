import type { FC } from "react";
interface Movie {
  poster_path: string;
  title: string;
  release_date: string;
  vote_average: string;
  original_language: string;
}
interface TableProps {
  data: Movie[];
}

const Table: FC<TableProps> = ({ data }) => {
  const checkLanguage = (lang: string) => {
    switch (lang) {
      case "en":
        return "English";
      case "es":
        return "English";
      default:
        "English";
    }
  };
  return (
    <div className='relative overflow-x-auto'>
      <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 '>
        <thead className='text-xs uppercase  dark:bg-gray-700 bg-zinc-500 text-white'>
          <tr>
            <th scope='col' className='px-6 py-3'>
              title
            </th>
            <th scope='col' className='px-6 py-3'>
              poster
            </th>
            <th scope='col' className='px-6 py-3'>
              rate
            </th>
            <th scope='col' className='px-6 py-3'>
              language
            </th>
            <th scope='col' className='px-6 py-3'>
              date
            </th>
          </tr>
        </thead>
        <tbody>
          {data.slice(0, 5).map((item) => (
            <tr className='bg-zinc-200 border-b border-white'>
              <th
                scope='row'
                className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
              >
                {item.title}
              </th>
              <td className='px-6 py-4'>
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  alt='poster'
                  width={32}
                  height={32}
                  className='rounded-md overflow-hidden'
                />
              </td>
              <td className='px-6 py-4'>{item.vote_average}</td>
              <td className='px-6 py-4'>
                {checkLanguage(item.original_language)}
              </td>
              <td className='px-6 py-4'>{item.release_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
