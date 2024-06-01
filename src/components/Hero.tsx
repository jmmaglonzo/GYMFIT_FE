const Hero = () => {
  return (
    <section className=" bg-[url('/src/assets/heromobile.webp')] bg-center bg-cover bg-blend-overlay text-white bg-black/30 ">
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
          <button className="px-6 py-2 bg-black text-white rounded-sm text-sm">
            Sign Up
          </button>
          <button className="px-6 py-2 bg-white text-black rounded-sm text-sm">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
