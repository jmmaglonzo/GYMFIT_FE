const CtaSection = () => {
  return (
    <section className="container bg-[url('/src/assets/CTA.jpg')] bg-center bg-cover bg-blend-overlay text-white bg-black/25 p-8">
      <div className="flex flex-col gap-4 w-1/2 ">
        <span className="font-bold text-3xl">
          Join our fintess community today!
        </span>
        <p>
          Experience the best workouts and achieve your fitness goals with our
          state-of-the-art facilities and expert trainers.
        </p>
      </div>
      <button className="px-6 py-2 mt-6 bg-white text-black rounded-sm text-sm">
        Learn More
      </button>
    </section>
  );
};

export default CtaSection;
