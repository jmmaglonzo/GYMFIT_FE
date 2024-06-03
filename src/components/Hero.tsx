import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const Hero = () => {
  const { user } = useAuthContext();
  return (
    <section className=" bg-[url('/src/assets/heromobile.webp')] lg:bg-[url('/src/assets/hero1.webp')] bg-center bg-cover bg-blend-overlay text-white bg-black/30 ">
      <div className="container flex flex-col h-screen justify-center items-center gap-2">
        <div className="text-center space-y-4 lg:w-1/2 md:w-2/3">
          <h1 className="lg:text-5xl text-3xl md:text-4xl font-bold">
            Achieve Your Fitness Goals with Gym Fit
          </h1>
          <p>
            Welcome to GymBuddy, the ultimate platform for tracking your
            workouts and achieving your fitness goals. Sign up today and start
            your journey to a healthier you.
          </p>
        </div>
        <div className="flex gap-4 mt-6">
          <Link
            to="/sign-up"
            className={`px-6 py-2 bg-black text-white rounded-sm text-sm ${
              user ? "hidden" : "block"
            }`}
          >
            Sign Up
          </Link>
          <Link
            to="/about-us"
            className="px-6 py-2 bg-white text-black rounded-sm text-sm"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
