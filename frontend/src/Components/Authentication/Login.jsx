import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router";
function Login() {
  const navigate = useNavigate();
  return (
    <div className="flex ">
      <div className=" w-1/2 flex flex-col items-center gap-4 h-[100vh] justify-center">
        {/* <p>Logo</p> */}
        <div className="mr-16 flex flex-col gap-2">
          <p className="text-4xl font-bold">Login</p>
          <p>Find the job made for you!</p>
        </div>
        <div className="flex items-center gap-4 border border-2 border-black  w-1/2  px-3 py-2 font-bold rounded cursor-pointer justify-center">
          <FcGoogle className="text-xl" />
          <p>Login with Google</p>
        </div>
        <p className="text-xs text-slate-500">or Login with Email</p>
        <input
          class=" border border-1 border-black rounded py-3 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  w-1/2  "
          id="email"
          type="text"
          placeholder="Email"
        />
        <input
          class=" border border-1 border-black rounded py-3 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  w-1/2  "
          id="username"
          type="password"
          placeholder="Password"
        />

        <p className="underline text-sm cursor-pointer ml-40">
          Forgot Password?
        </p>
        <button className=" w-1/2 cursor-pointer text-white bg-black py-3 px-2 rounded-md">
          Login
        </button>
        <p
          className="underline cursor-pointer"
          onClick={() => navigate("/signup")}
        >
          Create an Account
        </p>
      </div>
      <div className=" w-1/2 ">
        <img src="/Assets/login banner.png" alt="" />
        <div className="flex justify-center">
          <p className="text-5xl font-bold text-center w-1/2">
            Find the job &nbsp; made for &nbsp; you. &nbsp; &nbsp;
          </p>
        </div>
      </div>
    </div>
  );
}
export { Login };
