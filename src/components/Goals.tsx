import { FaCube } from "react-icons/fa6";
import goals from "../assets/hero9.webp";

const Goals = () => {
  return (
    <section className="flex lg:flex-row flex-col md:my-20 gap-20 my-12 md:py-20 p-4 container">
      <div className="flex flex-col gap-4 lg:text-start text-center lg:w-[80%] justify-center">
        <h3 className="font-bold text-xl md:text-4xl">
          Stay motivated with personalized fitness plans and goal-setting tools.
        </h3>
        <p className="md:text-base text-sm">
          At Gym Fit, we believe that fitness is not just about physical health,
          but also about mental well-being and community support. By joining Gym
          Fit, you'll have access to state-of-the-art facilities, expert
          trainers, and a supportive community that will help you achieve your
          fitness goals. With flexible membership plans, we make it easy for you
          to prioritize your health and make fitness a part of your everyday
          life.
        </p>

        <ul className="flex flex-col gap-4 text-sm md:text-base lg:items-start items-center">
          <li className="flex gap-4 items-center">
            <FaCube />
            <p>Improve your strength and build lean muscle mass</p>
          </li>
          <li className="flex gap-4 items-center">
            <FaCube />
            <p>Boost your energy and improve your endurance</p>
          </li>
          <li className="flex gap-4 items-center">
            <FaCube />
            <p>Stay motivated with our supportive fitness community</p>
          </li>
        </ul>
      </div>

      <div className="lg:w-[1200px] lg:h-[500px]">
        <img
          src={goals}
          alt=""
          className="w-full h-full object-cover rounded-md"
        />
      </div>
    </section>
  );
};

export default Goals;
