import { Link } from "react-router-dom";
import Gender from "./Gender";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-blue-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-25">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign up <span className="text-blue-500"> ChatApp</span>
        </h1>

        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text font-semibold">
                Full Name
              </span>
            </label>

            <input
              type="text"
              placeholder="John Doe"
              className="w-full input input-bordered  h-10 "
            />
          </div>
          <div>
            <label className="label p-2 font-semibold ">
              <span className="text-base label-text">Username</span>
            </label>

            <input
              type="text"
              placeholder="johndoe"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label font-semibold p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-2 font-semibold">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10"
            />
          </div>

          <Gender />

          <Link to="/login">
            <a
              className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
              href="#"
            >
              Already have an account?
            </a>
          </Link>

          <div>
            <button className="btn btn-block btn-sm mt-2 border border-slate-700">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
