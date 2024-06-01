import feature from "../assets/hero2.jpg";

const Feature = () => {
  return (
    <section className="flex gap-20 py-20 container">
      <div className="w-[1200px] h-[500px]">
        <img
          src={feature}
          alt=""
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      <div className="flex flex-col gap-4 justify-center">
        <h2 className="text-3xl font-bold">
          Experience the Ultimate Fitness Journey with Gym Fit
        </h2>
        <p>
          At Gym Fit, we offer a wide range of facilities and unique features to
          help you achieve your fitness goals. From our top-of-the-line
          equipment to our expert trainers, we have everything you need to make
          the most of your workout.
        </p>
        <div className="flex gap-2">
          <div className="flex flex-col gap-2">
            <span className="font-semibold">Fitness Goals</span>
            <p>
              Track your progress, set new goals, and stay motivated with our
              workout todo list.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <span className="font-semibold">Fitness Goals</span>
            <p>
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
