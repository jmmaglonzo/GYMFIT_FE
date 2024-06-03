import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { toast } from "sonner";

interface SignupResponse {
  email: string;
  password: string;
  error?: string; // Include 'error' as an optional property
}

export const useSignup = () => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { dispatch } = useAuthContext();

  const signup = async (email: string, password: string): Promise<void> => {
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

      localStorage.setItem("user", JSON.stringify(data));

      dispatch({ type: "LOGIN", payload: data });

      toast.success("Successfully Registered");
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
