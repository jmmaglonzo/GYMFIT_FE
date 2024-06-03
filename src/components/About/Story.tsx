import { Fade } from "react-awesome-reveal";

const Story = () => {
  return (
    <section className="flex md:space-y-40 space-y-8 text-center md:text-start flex-col container px-4 md:py-20 my-12 md:my-20">
      <Fade duration={2000} cascade={true} triggerOnce={true} direction="right">
        <div className="flex items-center md:flex-row flex-col">
          <h3 className="font-bold md:text-6xl md:w-1/2">Our Story</h3>
          <p className="md:w-1/2 lg:text-xl md:text-base text-sm">
            Founded in 2010, Gym Fit was born out of a passion for fitness and a
            commitment to community. Our founders, Jane Doe and John Smith,
            envisioned a space where individuals of all fitness levels could
            come together, support one another, and strive for greatness. From
            humble beginnings, we have grown into a thriving fitness community,
            driven by our dedication to helping you succeed.
          </p>
        </div>

        <div className="flex items-center md:flex-row flex-col">
          <h3 className="font-bold md:text-6xl md:w-1/2 md:order-2 order-1 md:flex md:justify-end">
            Our Facilities
          </h3>
          <p className="md:w-1/2 md:order-1 order-2 lg:text-xl md:text-base text-sm">
            Our state-of-the-art facilities are designed to cater to all your
            fitness needs. We offer a wide range of equipment, from cardio
            machines and free weights to resistance training and functional
            fitness gear. Our spacious and clean environment ensures that you
            can work out comfortably and safely.
          </p>
        </div>

        <div className="flex items-center md:flex-row flex-col">
          <h3 className="font-bold md:text-6xl md:w-1/2">Our Team</h3>
          <p className="md:w-1/2 lg:text-xl md:text-base text-sm">
            At Gym Fit, our team of certified trainers and fitness experts is
            here to guide and motivate you every step of the way. Whether you're
            a beginner or a seasoned athlete, our knowledgeable staff will
            provide personalized training programs, nutritional advice, and
            ongoing support to help you reach your goals.
          </p>
        </div>
      </Fade>
    </section>
  );
};

export default Story;
