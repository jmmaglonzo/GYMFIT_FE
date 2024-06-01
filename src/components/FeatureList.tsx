import { FaCube } from "react-icons/fa6";

const FeatureList = () => {
  return (
    <section className="my-12 md:my-20 md:py-20 container px-4">
      <div className="flex flex-col text-center ">
        <h3 className="md:text-4xl text-xl font-bold">
          Discover the Benefits of Our Gym Fit Membership
        </h3>

        <div className="flex md:flex-row flex-col gap-4 mt-12 lg:mt-20">
          <div className="flex flex-col items-center space-y-4">
            <FaCube size={40} />
            <span className="font-bold text-sm w-1/2">
              Achieve Your Fitness Goals with Gym Fit
            </span>
            <p>Track your workouts, reps, exercises, and loads with ease.</p>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <FaCube size={40} />
            <span className="font-bold text-sm w-1/2">
              Get Access to State-of-the-Art Equipment and Facilities
            </span>
            <p>
              Experience a wide range of fitness classes and training programs.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <FaCube size={40} />
            <span className="font-bold text-sm w-1/2">
              Receive Personalized Guidance and Support from Our Trainers
            </span>
            <p>
              Stay motivated and reach your fitness milestones with our expert
              team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureList;
