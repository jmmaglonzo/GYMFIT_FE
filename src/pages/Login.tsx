import { FormEvent, useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { Toaster } from "sonner";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { Link } from "react-router-dom";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toggle, setToggle] = useState(false);

  const { login, isLoading } = useLogin();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    await login(email, password);
  };

  return (
    <section className="md:my-20 md:py-20 my-12 container px-4">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col p-4 md:w-[400px] mx-auto  bg-white gap-4 shadow-xl"
      >
        <h3 className="font-bold md:text-3xl text-sm ">Login</h3>
        <div className="flex gap-2 items-center text-center text-xs">
          <span className="text-slate-500">Don't have an account?</span>
          <Link className="hover:underline text-[#38cb6e] " to={"/sign-up"}>
            Sign up
          </Link>
        </div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="w-full py-2 px-4 bg-[#dfe0e2]"
          placeholder="Enter email"
        />

        <div className="flex items-center gap-2  py-2 px-4 bg-[#dfe0e2] cursor-pointer ">
          <input
            type={toggle ? "text" : "password"}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="w-full bg-transparent outline-none"
            placeholder="Enter password"
          />
          <div onClick={() => setToggle((c) => !c)}>
            {toggle ? <BsEyeSlash /> : <BsEye />}
          </div>
        </div>
        <Toaster richColors position="top-right" />
        <button
          disabled={isLoading}
          className="px-8 text-white bg-black py-1 rounded-md "
        >
          Login
        </button>

        <span className="text-[9px] text-center">
          The password must include uppercase letters, lowercase, number, and
          special characters.
        </span>
      </form>
    </section>
  );
};

export default Signup;
