import type { FC } from "react";
import Spinner from "../Spinner";

import { useLazyGetRequestTokenQuery } from "../../features/services/authApi";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { addToWatchlist } from "../../features/actions/addWatchList";
import { useSelector } from "react-redux";
import { RootState } from "../../features/store";

interface RecardsProps {
  poster_path: string;
  overview: string;
  title: string;
  isauthenticated?: boolean;
  id?: string;
}

const Recards: FC<RecardsProps> = ({
  poster_path,
  overview,
  title,
  isauthenticated,
  id,
}) => {
  const [, { data, isLoading, isSuccess }] = useLazyGetRequestTokenQuery();
  const { user, token } = useSelector((state:RootState) => state?.auth);


  const handleAddToWatchList = () => {
    addToWatchlist(user?.id, token, id,title);
  };

  if (isSuccess) {
    window.location.href = `https://www.themoviedb.org/authenticate/${data?.request_token}?redirect_to=http://localhost:5173/callback`;
  }

  return (
    <div className='flex flex-col  ring-inset ring-1 rounded-lg relative'>
      <div className='flex gap-2 p-4'>
        <div className='flex flex-col'>
          <h1 className='text-white font-bold text-xl'>{title}</h1>
          {/* <p className='text-zinc-500 text-sm'>2h40m.2022.Fantansy.Action</p> */}
          <p className='text-sm w-60  p-2 h-24'>
            {!overview ? "No overview" : overview?.slice(0, 115) + "..."}
          </p>
        </div>
        <figure className='img-cover'>
          <img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt='thor'
            className='img-box rounded-lg'
            width={100}
            height={100}
          />
        </figure>
      </div>
      <div className='flex p-2 m-3 justify-between'>
        <button className='btn ring-0 text-sm  text-white bg-zinc-800 flex items-center gap-2'>
          Watch Trailer
          <span className='material-symbols-rounded'>play_circle</span>
        </button>

        {isLoading ? (
          <Spinner />
        ) : (
          <>
            {isauthenticated ? (
              <button
                className='btn text-sm flex items-center gap-2'
                onClick={() => handleAddToWatchList()}
              >
                Add Watchlist
                <span className='material-symbols-rounded'>bookmark</span>
              </button>
            ) : (
              <Link to='/login' className='btn text-sm flex items-center gap-2'>
                Add Watchlist
                <span className='material-symbols-rounded'>bookmark</span>
              </Link>
            )}
          </>
        )}
      </div>
    </div>
  );
};
export default Recards;
