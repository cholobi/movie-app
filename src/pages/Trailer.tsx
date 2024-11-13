import { useEffect, type FC } from "react";
import Header from "../components/Header";
import { loginAction } from "../features/slices/auth";
import { useDispatch } from "react-redux";
import { useLazyGetUserQuery } from "../features/services/authApi";
import { useGetMovieTrailerQuery } from "../features/services/movieApi";
import { useParams } from "react-router-dom";

interface TrailerProps {}

const Trailer: FC<TrailerProps> = ({}) => {
    const dispatch = useDispatch();
    const params = useParams()
    console.log(params.id);
    
    const [getUser, { data, isLoading }] = useLazyGetUserQuery();
    const res = useGetMovieTrailerQuery({movie_id:params.id})
    console.log(res.data);
    

  useEffect(() => {
    document.title = "Home";
    dispatch(loginAction(data));
    getUser();
  }, [data]);
  return (
    <>
      <Header isLoadingUser={isLoading} />
      <div className='container mx-auto p-2  relative mt-2'>
              <h1 className='text-xl text-white font-bold bg-red-500 p-1'>Trailer</h1>
              <div>
                  
              </div>
              
      </div>
    </>
  );
};
export default Trailer;
