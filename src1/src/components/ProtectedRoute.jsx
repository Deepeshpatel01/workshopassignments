
import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
export default function ProtectedRoute({ children }) {
  const { user } = useContext(UserContext);
  const location = useLocation();
  if (!user) return <Navigate to="/login" replace state={{ from: location }} />;
  return children;
}
