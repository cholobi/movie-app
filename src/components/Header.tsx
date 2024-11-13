import { useEffect, useState, type FC } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { useLazyGetRequestTokenQuery } from "../features/services/authApi";
import Spinner from "./Spinner";
import { RootState } from "../features/store";
import swal from "sweetalert";
import { logout } from "../features/actions/Auth";

interface HeaderProps {
  isLoadingUser?: boolean;
}

const navItems: {
  label: string;
  link: string;
  className: string;
  id: number;
}[] = [{ id: 1, label: "Home", link: "/", className: "navLink" }];

const Header: FC<HeaderProps> = ({ isLoadingUser }) => {
  const [getRequestToken, { data, isLoading, isSuccess }] =
    useLazyGetRequestTokenQuery();

  const handleClick = async () => {
    await getRequestToken();
  };

  const handleLogout = async () => {
    swal({
      title: "Are you sure?",
      icon: "warning",
      buttons: {
        cancel: {
          text: "Cancel",
          value: false,
          visible: true,
          closeModal: true,
        },
        confirm: {
          text: "Yes",
          value: true,
          visible: true,
          closeModal: false,
        },
      },
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        const sessionId = localStorage.getItem("sessionId");
        if (sessionId) {
          const success = await logout(sessionId);
          if (success) {
            window.location.href = "/";
          }
        }
      }
    });
  };
  const { isAuthenticated, user } = useSelector(
    (state: RootState) => state?.auth
  );

  if (isSuccess) {
    window.location.href = `https://www.themoviedb.org/authenticate/${data?.request_token}?redirect_to=http://localhost:5173/callback`;
  }

  const [search, setSearch] = useState<Boolean>(false);
  useEffect(() => {
    // dispatch();
  }, []);

  return (
    <div className='flex flex-col'>
      <div className='navbar'>
        <Link to={"/"} className='flex items-center'>
          <figure className=' h-16 w-16 object-cover flex rounded-sm p-4'>
            <img src='./logo_copy.png' alt='logo' width={500} height={500} />
          </figure>
          <span className='font-bold lg:flex hidden'>MovieSTreamer</span>
        </Link>
        <div className='lg:flex  gap-4 hidden'>
          {navItems?.map(({ label, link, className, id }) => (
            <ul id={id.toString()}>
              <Link to={link}>
                <li
                  className={`${
                    className +
                    "text-zinc-300 px-2 py-1 rounded-lg hover:text-white transition-colors hover:underline"
                  }`}
                >
                  {label}
                </li>
              </Link>
            </ul>
          ))}
          {isAuthenticated && (
            <ul>
              <Link
                to='/dashboard'
                className={` text-zinc-300 px-2 py-1  flex items-center rounded-lg hover:text-white transition-colors hover:underline`}
              >
                Dashboard
              </Link>
            </ul>
          )}
          <ul>
            <Link
              to='/movies'
              className={` text-zinc-300 px-2 py-1  flex items-center rounded-lg hover:text-white transition-colors hover:underline`}
            >
              Movies
            </Link>
          </ul>
        </div>
        <div className='flex items-center justify-center gap-4'>


          {!isAuthenticated && (
            <button type='button' className='btn'>
              Sign up
            </button>
          )}
          {isAuthenticated ? (
            <button
              type='button'
              className='btn btn-success font-bold'
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <>
              {isLoading || isLoadingUser ? (
                <Spinner />
              ) : (
                <button
                  type='button'
                  className='btn btn-success font-bold'
                  onClick={() => handleClick()}
                >
                  Login
                </button>
              )}
            </>
          )}
          {isLoading && !isAuthenticated ? (
            <Spinner />
          ) : (
            <>
              <p className='text-sm uppercase'>{user?.username}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default Header;
