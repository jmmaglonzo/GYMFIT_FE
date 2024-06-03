import { FormEvent, useState } from "react";
import { useSignup } from "../hooks/useSignup";
import { Toaster } from "sonner";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toggle, setToggle] = useState(false);
  const { signup, isLoading } = useSignup();
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await signup(email, password, navigate);
    setEmail("");
    setPassword("");
  };

  return (
    <section className="md:my-20 md:py-20 my-12 container px-4">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col p-4 md:w-[400px] mx-auto bg-white gap-4 shadow-xl"
      >
        <h3 className="font-bold md:text-3xl text-sm mb-4">Sign Up</h3>
        <div className="flex gap-2 items-center text-center text-xs">
          <span className="text-slate-500">Already have an account?</span>
          <Link className="hover:underline text-[#38cb6e] " to={"/login"}>
            Login
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

        <label htmlFor="password">Password:</label>
        <div className="flex items-center gap-2 py-2 px-4 bg-[#dfe0e2] cursor-pointer">
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
        <Toaster position="top-right" richColors />
        <button
          disabled={isLoading}
          className="px-8 text-white bg-black py-1 rounded-md"
        >
          Sign Up
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
