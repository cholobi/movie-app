import type { FC } from "react";
import { useLazyGetRequestTokenQuery } from "../../features/services/authApi";

interface LoginProps {}

const Login: FC<LoginProps> = ({}) => {
  const [getRequestToken, { data, isSuccess }] =
    useLazyGetRequestTokenQuery();

  // Button click handler to trigger the query
  const handleClick = async () => {
    await getRequestToken();
  };

  if (isSuccess) {
    window.location.href = `https://www.themoviedb.org/authenticate/${data?.request_token}?redirect_to=http://localhost:5173/callback`;
  }
  return (
    <div className='flex flex-col relative'>
      <figure className='absolute z-0 opacity-5 w-full h-full'>
        <img
          src={
            "https://static.toiimg.com/thumb/msid-112527716,width-1280,height-720,resizemode-4/112527716.jpg"
          }
          className='bg-cover w-full'
          alt=''
        />
      </figure>
      <div className='absolute z-50 p-4 bg-zinc-900 lg:w-1/2 lg:left-80 top-24 container mx-auto flex justify-center items-center'>
        <div className=' p-6 w-full'>
          <h2 className=' text-center text-3xl font-bold mb-4'>Login</h2>

          <div className='mt-6 items-center justify-center gap-2 grid '>
            <a href='#'>
              <figure className='flex items-center justify-center gap-2 p-2 bg-zinc-500 rounded-lg hover:bg-zinc-300 transition-all hover:text-black'>
                <img src='./company_logo/google.png' alt='google' />
                <p>Continue with google</p>
              </figure>
            </a>

            <button
              className='flex items-center justify-center gap-2 p-2 bg-zinc-500 rounded-lg hover:bg-zinc-300 transition-all hover:text-black'
              onClick={() => handleClick()}
            >
              <p>Continue to Login</p>
            </button>

            <a
              href={"https://www.themoviedb.org/signup"}
              target='_blank'
              className='hover:underline'
            >
              {" "}
              Dont have an account ? click here to register
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
