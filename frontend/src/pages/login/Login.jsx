import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin.js";


const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("")

  const {loading, login} = useLogin()

  const handleSubmit = async (e) =>{
    e.preventDefault();
    await login(username, password)
  }

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div
        className="w-full p-6 rounded-lg shadow-md bg-blue-400  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-25
"
      >
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-blue-300"> ChatMate</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="p-2 label font-semibold">
              <span className="text-base label-text text-white">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10 "
              value={username}
              onChange={(e)=> setUsername(e.target.value)}
            />
          </div>

          <div>
            <label className="p-2 label font-semibold">
              <span className="text-base label-text text-white">Password</span>
            </label>

            <input
              type="password"
              placeholder="Enter password"
              className="w-full input input-bordered h-10 "
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>

          <Link
            to="/signup"
            className="text-sm text-white hover:underline hover:text-gray-400 mt-6 px-2 inline-block"
          >
            {"Dont't"} have an account ?
          </Link>

          <div>
            <button className="btn btn-block btn-sm mt-2 border text-white border-none font-normal hover:bg-gray-600 bg-gray-500" disabled={loading}>
              {loading ? (
                 <span className="loading loading-spinner"></span>
              ) : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
