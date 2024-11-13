import { useEffect, useState, type FC } from "react";
import Header from "../components/Header";
import Card from "../components/cards/Card";
import { useGetAllMoviesQuery } from "../features/services/movieApi";
import Search from "../components/Search";
import { useDispatch, useSelector } from "react-redux";
import { useLazyGetUserQuery } from "../features/services/authApi";
import { loginAction } from "../features/slices/auth";

interface MoviesProps { }

const Movies: FC<MoviesProps> = ({ }) => {
  const [page, setPage] = useState(1);
  const response = useGetAllMoviesQuery(page);


  const { movie } = useSelector((state: RootState) => state.movie);
  const handleNext = () =>
    setPage((prev) => Math.min(prev + 1, response?.data.total_pages));
  const handlePrevious = () => setPage((prev) => Math.max(prev - 1, 1));
  const dispatch = useDispatch();
  const [getUser, { data, isLoading }] = useLazyGetUserQuery();

  useEffect(() => {
    document.title = "Home";
    dispatch(loginAction(data));
    getUser();
  }, [data]);

  return (
    <>
      <Header isLoadingUser={isLoading} />
      <Search />
      {response.isLoading ? (
        <div className='grid lg:grid-cols-6 animate-pulse mt-6 mb-2 gap-2'>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map(
            () => (
              <div className='bg-slate-400 h-52 w-44 rounded-lg'></div>
            )
          )}
        </div>
      ) : (
        <div className=' grid lg:grid-cols-6 grid-cols-3 gap-2 mx-auto container p-2'>
          {movie?.length > 0 ? (
            <>
              {" "}
              {movie?.slice(0, 20).map((item) => (
                <Card
                  poster_path={item?.poster_path}
                  imageClassName='rounded-lg'
                  id={item?.id}
                  release_date={item?.release_date?.slice(0, 4)}
                  key={item?.id}
                  title={item?.title}
                  vote_average={item?.vote_average}
                />
              ))}
            </>
          ) : (
            <>
              {" "}
              {response.data?.results?.slice(0, 18).map((item) => (
                <Card
                  poster_path={item?.poster_path}
                  imageClassName='rounded-lg'
                  id={item?.id}
                  release_date={item?.release_date?.slice(0, 4)}
                  key={item?.id}
                  title={item?.title}
                  vote_average={item?.vote_average}
                />
              ))}
            </>
          )}
        </div>
      )}
      <div className='mx-auto p-2 container items-center justify-end flex gap-4 my-6'>
        <button onClick={handlePrevious} disabled={page === 1} className="pg-btn">
          Previous
        </button>
        <button onClick={handleNext} disabled={page === response?.data?.total_pages} className="pg-btn">
          Next
        </button>
      </div>
    </>
  );
};
export default Movies;
