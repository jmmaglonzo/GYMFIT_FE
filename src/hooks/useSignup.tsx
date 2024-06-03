import { useState } from "react";
import { toast } from "sonner";

interface SignupResponse {
  email: string;
  password: string;
  error?: string;
}

export const useSignup = () => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signup = async (
    email: string,
    password: string,
    navigate: (path: string) => void
  ): Promise<void> => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch(
        "https://workout-crud.vercel.app/api/user/signup",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );

      const data: SignupResponse = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Signup failed");
      }

      toast.success("Successfully Registered! Please log in.");

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
        toast.error(err.message);
      } else {
        setError("An error occurred");
        toast.error("An error occurred");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { signup, isLoading, error };
};
