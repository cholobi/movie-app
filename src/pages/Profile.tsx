import { useEffect, type FC } from "react";
import Header from "../components/Header";
import { loginAction } from "../features/slices/auth";
import { useDispatch, useSelector } from "react-redux";
import { useLazyGetUserQuery } from "../features/services/authApi";
import { RootState } from "../features/store";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

interface ProfileProps {}

const Profile: FC<ProfileProps> = ({}) => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
    },
    onSubmit: (value) => {
      console.log(value);
    },
  });

  const [getUser, { data }] = useLazyGetUserQuery();
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(loginAction(data));
    getUser();
    if (isAuthenticated) {
      navigate("/profile");
    } else {
      navigate("/");
    }
  }, [data, isAuthenticated, dispatch, navigate]);
  return (
    <>
      <Header />
      <div className='container mx-auto lg:grid grid-cols-1 lg:w-1/2 relative gap-8 mt-2'>
        <div className=' p-2'>
          <h1 className='text-white text-md font-bold uppercase '>
            personal details
          </h1>
          <div className='  flex flex-col gap-2 mt-3'>
            <div className=''>
              <label
                htmlFor='first_name'
                className='block mb-2 text-sm font-medium text-white'
              >
                First name
              </label>
              <input
                type='text'
                id='first_name'
                name='first_name'
                value={formik.values.first_name}
                onChange={formik.handleChange}
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='John'
                required
              />
            </div>
            <div className='w-full'>
              <label
                htmlFor='first_name'
                className='block mb-2 text-sm font-medium text-white'
              >
                Email address
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={formik.values.email}
                onChange={formik.handleChange}
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='John'
                required
              />
            </div>
            <div className=''>
              <label
                htmlFor='first_name'
                className='block mb-2 text-sm font-medium text-white'
              >
                Lastname
              </label>
              <input
                type='text'
                id='last_name'
                name='last_name'
                value={formik.values.last_name}
                onChange={formik.handleChange}
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='John'
                required
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Profile;
