import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <section className="container md:py-20 my-12 md:my-20 bg-[url('/src/assets/CTA.webp')] bg-center bg-cover bg-blend-overlay text-white bg-black/25 p-8">
      <div className="flex flex-col gap-4 lg:w-1/2 ">
        <span className="font-bold text-2xl md:text-3xl">
          Join our fitness community today!
        </span>
        <p className="md:text-base text-sm">
          Experience the best workouts and achieve your fitness goals with our
          state-of-the-art facilities and expert trainers.
        </p>
      </div>
      <Link
        to={"/about-us"}
        className="px-6 py-2 mt-6 inline-block bg-white text-black rounded-sm text-sm"
      >
        Learn More
      </Link>
    </section>
  );
};

export default CtaSection;
