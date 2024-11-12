import { useEffect, useState, type FC } from "react";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../features/slices/auth";
import {
  useGetWatchListMoviesQuery,
  useLazyGetUserQuery,
} from "../features/services/authApi";
import { RootState } from "../features/store";
import { useNavigate } from "react-router-dom";
import Card from "../components/cards/Card";
import { getRecommendedMovies } from "./Data";
import axios from "axios";
import { Movie, useGetLatestMoviesQuery } from "../features/services/movieApi";
import Table from "../components/table/Table";
import Spinner from "../components/Spinner";

interface DashboardProps {}

const Dashboard: FC<DashboardProps> = ({}) => {
  const dispatch = useDispatch();
  const response = useGetWatchListMoviesQuery();

  const [getUser, { data, isLoading }] = useLazyGetUserQuery();
  const movies = useGetLatestMoviesQuery();
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(loginAction(data));
    getUser();
    if (isAuthenticated) {
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  }, [data, isAuthenticated, dispatch, navigate]);
  const [recMovies, setRecMovies] = useState<Movie[]>([]);

  useEffect(() => {
    getRecommendedMovies().map((item) => {
      try {
        axios
          .get(item.url)
          .then((res) => setRecMovies(res.data?.results?.slice(0, 4)));
      } catch (error) {
        console.log("error occurred", error);
      }
    });
  }, []);
  return (
    <>
      <Header isLoadingUser={isLoading} />
      <div className=' container mx-auto mt-4'>
        <div className='flex justify-between gap-4'>
          <div className='px-1'>
            <div className='flex justify-between'>
              <h1 className='text-lg font-bold'>Recommended</h1>
              <a
                href='#'
                className='text-sm text-zinc-50/30 transition-colors hover:text-white'
              >
                View more
              </a>
            </div>
            {response.isLoading ? (
              <div className='grid grid-cols-4 animate-pulse mt-6 gap-4'>
                {[1, 2, 3, 4].map(() => (
                  <div className='bg-slate-400 w-32 h-24 rounded-lg'></div>
                ))}
              </div>
            ) : (
              <div className='grid lg:grid-cols-4 grid-cols-2 md:grid-cols-4 gap-3 rounded-lg hover:ring-inset hover:ring-1 transition-all hover:p-2 '>
                {recMovies?.slice(0, 4)?.map((item: any) => (
                  <Card
                    figClass='w-36 h-24'
                    imageClassName='img-cover rounded-lg hover:scale-95 transition-all '
                    vote_average={item?.vote_average}
                    id={item?.id}
                    poster_path={item?.poster_path}
                    title={item?.title}
                    release_date={item?.release_date?.slice(0, 4)}
                  />
                ))}
              </div>
            )}
          </div>
          <div className=' px-2'>
            <div className='flex justify-between'>
              {response.isLoading ? (
                <Spinner />
              ) : (
                <h1 className='text-lg font-bold mb-2'>
                  My watchlist ({response.data?.length})
                </h1>
              )}
              <a
                href='#'
                className='text-sm mb-2 text-zinc-400 hover:text-white'
              >
                View more
              </a>
            </div>
            {response.isLoading ? (
              <div className='grid grid-cols-4 animate-pulse mt-6 gap-4'>
                {[1, 2, 3, 4].map(() => (
                  <div className='bg-slate-400 w-32 h-24 rounded-lg'></div>
                ))}
              </div>
            ) : (
              <div className='grid lg:grid-cols-4 grid-cols-2 md:grid-cols-4 gap-3 rounded-lg hover:ring-inset hover:ring-1 transition-all hover:p-4'>
                {response.data?.slice(0, 4)?.map((item: any) => (
                  <Card
                    figClass='w-32 h-24'
                    imageClassName='img-cover rounded-lg hover:scale-95 transition-all '
                    vote_average={item?.vote_average}
                    id={item?.id}
                    poster_path={item?.poster_path}
                    title={item?.title}
                    release_date={item?.release_date?.slice(0, 4)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
        <div className='flex flex-col'>
          {movies.isLoading ? (
            <div className='bg-slate-300 rounded-lg animate-pulse mt-6 w-full h-72'></div>
          ) : (
            <div className=' mt-6'>
              <Table data={movies?.data || []} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Dashboard;
