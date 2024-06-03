import { FormEvent, useState } from "react";
import { useSignup } from "../hooks/useSignup";
import { Toaster } from "sonner";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, isLoading } = useSignup();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    await signup(email, password);
  };

  return (
    <section className="md:my-20 md:py-20 my-12 container">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col p-4 w-[400px] mx-auto  bg-white gap-4 shadow-xl"
      >
        <h3 className="font-bold md:text-3xl text-sm mb-4">Sign Up</h3>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="w-full py-2 px-4 bg-[#dfe0e2]"
          placeholder="Enter email"
        />

        <label htmlFor="email">Password:</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className="w-full py-2 px-4 bg-[#dfe0e2]"
          placeholder="Enter password"
        />
        <Toaster position="top-right" richColors />
        <button
          disabled={isLoading}
          className="px-8 text-white bg-black py-1 rounded-md "
        >
          Sign Up
        </button>
        <span className="text-xs">
          The password must include uppercase letters, lowercase letters, and
          special characters.
        </span>
      </form>
    </section>
  );
};

export default Signup;
