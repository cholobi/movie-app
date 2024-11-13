import { useEffect, useState, type FC } from "react";
import { genres, rating, sortOptions, year } from "../pages/Data";
import { useFormik } from "formik";
import { useGetFilterMoviesQuery } from "../features/services/movieApi";
import Spinner from "./Spinner";
import { useDispatch } from "react-redux";
import { getFiteredMovies } from "../features/slices/movieSlice";
import { toast } from "react-toastify";

interface SearchProps {}

const Search: FC<SearchProps> = ({}) => {
  const [formValues, setFormValues] = useState({
    query: "",
    maxRating: 7,
    sortBy: "release_date.asc",
    page: 1,
    startYear: 2000,
    endYear: 2024,
    genre: "",
  });

  const { isLoading, data } = useGetFilterMoviesQuery(formValues);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFiteredMovies(data));
  }, [data]);

  const formik = useFormik({
    initialValues: {
      movie_name: "",
      genres: "",
      rating: "",
      year: "",
      sort_by: "",
    },

    onSubmit: (value) => {
      const dataValues = {
        query: value.movie_name,
        genres: value.genres,
        maxRating: value.rating,
        sortBy: value.sort_by,
        page: 1,
        startYear: value.year.slice(0, 4),
        endYear: value.year.slice(5, 9),
      };
      setFormValues(dataValues);
    },
  });

  return (
    <form className='container mx-auto' onSubmit={formik.handleSubmit}>
      <div className=' p-2 flex flex-col items-center gap-2'>
        <div className='flex gap-4'>
          <div>
            <input
              name='movie_name'
              type='text'
              value={formik.values.movie_name}
              onChange={formik.handleChange}
              id='movie_name'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5  outline-none ring-0'
              placeholder='Enter a keyword'
              required
            />
          </div>
          {isLoading ? (
            <Spinner />
          ) : (
            <button
              className='bg-green-400 px-6 rounded-lg active:scale-95 '
              type='submit'
            >
              Search
            </button>
          )}
        </div>
        <div className=' p-2 flex gap-2'>
          <div>
            <label
              htmlFor='countries'
              className='block mb-2 text-sm font-medium text-white'
            >
              Genres
            </label>
            <select
              id='genres'
              name='genres'
              onChange={formik.handleChange}
              value={
                formik.values.genres.length == 0 ? "All" : formik.values.genres
              }
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            >
              <option selected value=''>
                All
              </option>
              {genres.map((item) => (
                <option value={item.id} key={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor='countries'
              className='block mb-2 text-sm font-medium text-white'
            >
              Rating
            </label>
            <select
              id='rating'
              name='rating'
              value={formik.values.rating}
              onChange={formik.handleChange}
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            >
              <option selected value='All'>
                All
              </option>
              {rating.map((item) => (
                <option value={item.id}>{item.rate}</option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor='countries'
              className='block mb-2 text-sm font-medium text-white'
            >
              Year
            </label>
            <select
              id='year'
              name='year'
              onChange={formik.handleChange}
              value={formik.values.year}
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            >
              <option selected value={"All"}>
                All
              </option>
              {year.map((item) => (
                <option value={item.year}>{item.year}</option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor='countries'
              className='block mb-2 text-sm font-medium text-white'
            >
              Sort by
            </label>
            <select
              id='sort_by'
              name='sort_by'
              value={formik.values.sort_by}
              onChange={formik.handleChange}
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            >
              <option selected value={"release_date.asc"}>
                Release date
              </option>
              {sortOptions.map((item) => (
                <option value={item.value}>{item.label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </form>
  );
};
export default Search;
