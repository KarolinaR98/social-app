import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import { LoggedInUser } from "./types";
import axios from "axios";

function App() {

  const [user, setUser] = useState<LoggedInUser | null>(null);
  axios.defaults.headers.common['Authorization'] = "Bearer " + (user ? user.jwt_token : "");


  return (
    <>
      <Navbar user={user} setUser={setUser}/>
      <AppRoutes user={user} setUser={setUser}/>
    </>
  );
}

export default App;
