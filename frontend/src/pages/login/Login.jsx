import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div
        className="w-full p-6 rounded-lg shadow-md bg-blue-400  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-25
"
      >
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-blue-500"> ChatMate</span>
        </h1>

        <form>
          <div>
            <label className="p-2 label font-semibold">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10 "
            />
          </div>

          <div>
            <label className="p-2 label font-semibold">
              <span className="text-base label-text">Password</span>
            </label>

            <input
              type="password"
              placeholder="Enter password"
              className="w-full input input-bordered h-10 "
            />
          </div>

          <Link to="/signup">
            <a
              href=""
              className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
            >
              {"Dont't"} have an account ?
            </a>
          </Link>

          <div>
            <button className="btn btn-block btn-sm mt-2">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
