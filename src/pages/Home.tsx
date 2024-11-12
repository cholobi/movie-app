import { FC, useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Populars from "../components/Populars";
import Trendings from "../components/Trendings";
import Recommandations from "../components/Recommandations";
import { useLazyGetUserQuery } from "../features/services/authApi";
import { useDispatch } from "react-redux";
import { loginAction } from "../features/slices/auth";

interface HomeProps {}

const Home: FC<HomeProps> = ({}) => {
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
      <Hero />
      <Recommandations />
      <Populars />
      <Trendings />
    </>
  );
};
export default Home;
