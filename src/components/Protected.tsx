import { FC } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../features/store";
interface protectedRouteProps {
  isAuthenticated?: boolean;
  children: React.ReactNode;
}
export const ProtectedRoute: FC<protectedRouteProps> = ({ children }) => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  
  return isAuthenticated ? children : <Navigate to='/' replace />;
};

export default ProtectedRoute;
