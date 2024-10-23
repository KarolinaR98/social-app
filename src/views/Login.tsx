import { useState } from "react";
import { LoggedInUser, LoginData } from "../types";
import loginApiService from "../apiService/loginApiService";
import { Navigate } from "react-router-dom";

type LoginProps = {
  user: LoggedInUser | null,
  setUser: (user: LoggedInUser | null) => void,
};

const Login = (props: LoginProps) => {
  const [loginMessage, setLoginMessage] = useState<string>("");
  const [formData, setFormData] = useState<LoginData>({
    username: "",
    password: "",
  });

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    const name = target.name;

    setFormData({
      ...formData,
      [name]: target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    loginApiService.login(formData.username, formData.password).then((data) => {
      if (Array.isArray(data.username)) {
        setLoginMessage(data.username[0]);
      } else if (Array.isArray(data.password)) {
        setLoginMessage(data.password[0]);
      } else if (data.error) {
        setLoginMessage("Incorrect username or password");
      } else {
        setLoginMessage("");
        props.setUser(data);
        localStorage.setItem("user", JSON.stringify(data));
      }
    });
  };

  return (
    <div className="container flex items-center justify-center h-screen min-h-[450px] m-auto">
      {props.user && <Navigate to={'/'}/>}
      <div className="w-full max-w-xs">
        <form
          className="border-[1px] border-gray-500 px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          {loginMessage && <p className="text-red-800">{loginMessage}</p>}
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="username"
              id="username"
              type="text"
              value={formData.username}
              placeholder="Username"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              name="password"
              id="password"
              type="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="******************"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 m-auto rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
