import { BiChevronRight } from "react-icons/bi";
import { FaCube } from "react-icons/fa6";
import { Link } from "react-router-dom";

const FeatureList = () => {
  return (
    <section className="py-20 container px-4">
      <div className="flex flex-col text-center ">
        <h3 className="md:text-4xl text-xl font-bold">
          Discover the Benefits of Our Gym Fit Membership
        </h3>

        <div className="flex md:flex-row flex-col gap-4 mt-12 lg:mt-20">
          <div className="flex flex-col items-center space-y-4">
            <FaCube size={40} />
            <span className="font-bold">
              Achieve Your Fitness Goals with Gym Fit
            </span>
            <p>Track your workouts, reps, exercises, and loads with ease.</p>
            <Link to="/sign-up" className="flex gap-2 items-center">
              Sign Up <BiChevronRight />
            </Link>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <FaCube size={40} />
            <span className="font-bold">
              Achieve Your Fitness Goals with Gym Fit
            </span>
            <p>Track your workouts, reps, exercises, and loads with ease.</p>
            <Link to="/sign-up" className="flex gap-2 items-center">
              Join Now <BiChevronRight />
            </Link>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <FaCube size={40} />
            <span className="font-bold">
              Achieve Your Fitness Goals with Gym Fit
            </span>
            <p>Track your workouts, reps, exercises, and loads with ease.</p>
            <Link to="/sign-up" className="flex gap-2 items-center">
              Sign Up <BiChevronRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureList;
