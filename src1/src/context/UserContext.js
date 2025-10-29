
import { createContext, useState } from "react";
export const UserContext = createContext();
export function UserProvider({ children }) {
  const [user, setUser] = useState(localStorage.getItem("username") || null);
  const login = (username) => { setUser(username); localStorage.setItem("username", username); };
  const logout = () => { setUser(null); localStorage.removeItem("username"); };
  return <UserContext.Provider value={{ user, login, logout }}>{children}</UserContext.Provider>;
}
