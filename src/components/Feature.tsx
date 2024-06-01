import feature from "../assets/hero2.webp";

const Feature = () => {
  return (
    <section className="flex gap-20 lg:flex-row md:my-20 flex-col md:py-20 py-12 container p-4">
      <div className="lg:w-[1200px] lg:h-[500px] order-2 lg:order-1">
        <img
          src={feature}
          alt=""
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      <div className="flex lg:order-2 order-1 flex-col gap-4 justify-center">
        <h2 className="md:text-3xl text-xl font-bold">
          Experience the Ultimate Fitness Journey with Gym Fit
        </h2>
        <p className="md:text-base text-sm">
          At Gym Fit, we offer a wide range of facilities and unique features to
          help you achieve your fitness goals. From our top-of-the-line
          equipment to our expert trainers, we have everything you need to make
          the most of your workout.
        </p>
        <div className="flex md:flex-row flex-col gap-2">
          <div className="flex flex-col gap-2">
            <span className="font-semibold md:text-base text-sm">
              Fitness Goals
            </span>
            <p className="md:text-base text-sm">
              Track your progress, set new goals, and stay motivated with our
              workout todo list.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <span className="font-semibold md:text-base text-sm ">
              Fitness Goals
            </span>
            <p className="md:text-base text-sm">
              Track your progress, set new goals, and stay motivated with our
              workout todo list.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
