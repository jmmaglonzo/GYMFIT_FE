import { Fade } from "react-awesome-reveal";

const Intro = () => {
  return (
    <Fade triggerOnce={true} duration={2000}>
      <div className="lg:bg-[url('/src/assets/about.webp')] bg-[url('/src/assets/aboutmobile.webp')] bg-center bg-cover bg-blend-overlay text-white bg-black/40 ">
        <div className="container flex flex-col h-screen justify-center items-center p-4 gap-2">
          <div className="text-center space-y-4  md:w-2/3">
            <h1 className="lg:text-6xl text-3xl md:text-4xl font-bold">
              About Us
            </h1>
            <p className="md:text-xl text-sm">
              Welcome to Gym Fit, where your fitness journey begins! At Gym Fit,
              we believe that everyone deserves the opportunity to achieve their
              personal best in health and wellness. Our mission is to provide a
              welcoming and supportive environment where you can push your
              limits, achieve your goals, and transform your life.
            </p>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Intro;
