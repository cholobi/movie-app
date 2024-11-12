import type { FC } from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

interface AuthLayoutProps {}

const AuthLayout: FC<AuthLayoutProps> = ({}) => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
export default AuthLayout;
