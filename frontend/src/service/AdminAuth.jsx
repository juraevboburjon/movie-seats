import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthService";

function AdminAuth({ children }) {
  const { role } = useAuth();
  return role === "admin" ? children : <Navigate to={"/"} />;
}

export default AdminAuth;
