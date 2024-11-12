import type { FC } from "react";
import Header from "../components/Header";
import { useGetMovieDetailQuery } from "../features/services/authApi";
import { useParams } from "react-router-dom";
import Card from "../components/cards/Card";
import { useSelector } from "react-redux";
import { addToWatchlist } from "../features/actions/addWatchList";
import { RootState } from "../features/store";

interface DetailsProps {}

const Details: FC<DetailsProps> = ({}) => {
  const { user, token } = useSelector((state: RootState) => state?.auth);
  const { id } = useParams<{ id: string }>();

  const { data, isLoading } = useGetMovieDetailQuery(id);
  const handleAddToWatchList = () => {
    addToWatchlist(user?.id, token, id, data?.title);
  };

  return (
    <div className="">
      <Header />
      <div className=' container mx-auto grid grid-cols-[2fr_3fr_4fr] top-4 relative'>
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
            <button
              className='bg-green-400 px-14 rounded-lg active:scale-95 active:text-white transition-transform py-3 mt-2'
              onClick={() => handleAddToWatchList()}
            >
              Add Watchlist
            </button>
          </div>
        )}

        <div className=' p-6 flex flex-col items-start'>
          <h2 className='text-4xl font-bold '>The mandalorian</h2>
          <h3 className='text-xl font-bold px-1'>2024</h3>
          <p className='text-lg font-bold px-1'>Drama / Comedy / Romance</p>
          <p className='text-sm px-1'>Rate 7.8</p>
        </div>
        <div></div>
      </div>
    </div>
  );
};
export default Details;
