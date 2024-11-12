import { useEffect, type FC } from "react";
import Header from "../components/Header";
import { loginAction } from "../features/slices/auth";
import { useDispatch, useSelector } from "react-redux";
import { useLazyGetUserQuery } from "../features/services/authApi";
import { RootState } from "../features/store";
import { useNavigate } from "react-router-dom";

interface ProfileProps {}

const Profile: FC<ProfileProps> = ({}) => {
  const dispatch = useDispatch();

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
    </>
  );
};
export default Profile;
