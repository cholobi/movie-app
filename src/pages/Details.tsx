import type { FC } from "react";
import Header from "../components/Header";
import { useGetMovieDetailQuery } from "../features/services/authApi";
import { useParams } from "react-router-dom";
import Card from "../components/cards/Card";
import { useSelector } from "react-redux";
import { addToWatchlist } from "../features/actions/addWatchList";
import { RootState } from "../features/store";
import { useGetSimilarMoviesQuery } from "../features/services/movieApi";

interface DetailsProps {}

const Details: FC<DetailsProps> = ({}) => {
  const { user, token, isAuthenticated } = useSelector(
    (state: RootState) => state?.auth
  );
  const { id } = useParams<{ id: string }>();
  console.log(id);

  const { data, isLoading } = useGetMovieDetailQuery(id);
  const handleAddToWatchList = () => {
    addToWatchlist(user?.id, token, id, data?.title);
  };
  const res = useGetSimilarMoviesQuery(id);

  return (
    <div className=''>
      <Header />
      <div className=' container mx-auto grid lg:grid-cols-[2fr_3fr_4fr] top-4 relative'>
        {isLoading ? (
          <div className='flex flex-col gap-y-2'>
            <div className='bg-slate-400 animate-pulse w-52 h-72 rounded-lg'></div>
            <div className='bg-slate-400 animate-pulse w-52 h-12 rounded-lg'></div>
          </div>
        ) : (
          <div className='p-4'>
            <Card
              poster_path={data?.poster_path}
              imageClassName='img-cover rounded-lg hover:scale-95 transition-all'
              figClass='w-52 h-42'
            />
            {isAuthenticated && (
              <button
                className='bg-green-400 px-14 rounded-lg active:scale-95 active:text-white transition-transform py-3 mt-2'
                onClick={() => handleAddToWatchList()}
              >
                Add Watchlist
              </button>
            )}
          </div>
        )}

        {isLoading ? (
          <div
            className='
        flex flex-col gap-2'
          >
            <p className='text-white text-2xl bg-slate-400 w-2/3 h-12 rounded-md animate-pulse'></p>
            <p className='text-white text-2xl bg-slate-400 w-1/2 h-10 rounded-md animate-pulse'></p>
            <p className='text-white text-2xl bg-slate-400 w-1/4 h-10 rounded-md animate-pulse'></p>
          </div>
        ) : (
          <div className=' p-6 flex flex-col items-start mt-2'>
            <h2 className='text-4xl font-bold '>{data?.title}</h2>
            <h3 className='text-xl font-bold px-1'>
              {data?.release_date?.slice(0, 4)}
            </h3>

            <p className='text-lg font-bold px-1'>
              {data?.genres.map((item) => (
                <>{" " + item?.name + " " + "/" + " "}</>
              ))}
            </p>
            <p className='text-sm px-1'>Rate {data?.vote_average}</p>
          </div>
        )}
        <div className='mt-4'>
          <h2 className=' p-1'>Similar movies</h2>
          {res.isLoading ? (
            <div className='grid lg:grid-cols-4 mt-4 p-2'>
              {[1, 2, 3, 4].map((item) => (
                <div className='w-32 rounded-lg  h-56 bg-slate-300 animate-pulse'></div>
              ))}
            </div>
          ) : (
            <div className='grid grid-cols-4 gap-2'>
              {res.data?.slice(0, 8).map((item) => (
                <Card
                  poster_path={item?.poster_path}
                  imageClassName='rounded-lg'
                  id={item?.id}
                  release_date={item.release_date.slice(0, 4)}
                  vote_average={item?.vote_average}
                  title={item?.title}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Details;
