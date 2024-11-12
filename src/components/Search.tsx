import type { FC } from "react";
import { genres } from "../pages/Data";

interface SearchProps {}

const Search: FC<SearchProps> = ({}) => {
  const filter = () => {
    console.log("filter data");
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    filter();
    console.log(e.target.value);
  };
  return (
    <div className='container mx-auto'>
      <div className=' p-2 flex flex-col items-center gap-2'>
        <div className=''>
          <input
            type='text'
            id='first_name'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5  outline-none ring-0'
            placeholder='Enter a keyword'
            required
          />
        </div>
        <div className=' p-2 flex gap-2'>
          <div>
            <label
              htmlFor='countries'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
              Genres
            </label>
            <select
              id='countries'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            >
              <option selected>Choose a country</option>
              <option value='US'>United States</option>
              <option value='CA'>Canada</option>
              <option value='FR'>France</option>
              <option value='DE'>Germany</option>
            </select>
          </div>
          <div>
            <label
              htmlFor='countries'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
              Rating
            </label>
            <select
              id='countries'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            >
              <option selected>Choose a country</option>
              <option value='US'>United States</option>
              <option value='CA'>Canada</option>
              <option value='FR'>France</option>
              <option value='DE'>Germany</option>
            </select>
          </div>
          <div>
            <label
              htmlFor='countries'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
              Year of release
            </label>
            <select
              id='countries'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            >
              <option selected>Choose a country</option>
              <option value='US'>United States</option>
              <option value='CA'>Canada</option>
              <option value='FR'>France</option>
              <option value='DE'>Germany</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Search;
