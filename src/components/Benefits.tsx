import { FaCube } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { Fade } from "react-awesome-reveal";

const Benefits = () => {
  const { user } = useAuthContext();
  return (
    <section className="container my-12 md:my-20 md:py-20 px-4">
      <Fade triggerOnce={true} duration={2000}>
        <div className="flex lg:flex-row flex-col gap-8">
          <div className="flex flex-col gap-4 w-[95%] ">
            <span className="font-bold">Get Fit</span>
            <h3 className="md:text-4xl text-xl font-bold">
              Why Choose Gym Fit for Your Fitness Journey
            </h3>
            <p className="md:text-base text-sm">
              At Gym Fit, we believe that fitness is not just about physical
              health, but also about mental well-being and community support. By
              joining Gym Fit, you'll have access to state-of-the-art
              facilities, expert trainers, and a supportive community that will
              help you achieve your fitness goals. With flexible membership
              plans, we make it easy for you to prioritize your health and make
              fitness a part of your everyday life.
            </p>
            <div>
              {user ? (
                <Link
                  to={"/about-us"}
                  className="px-8 py-2 border border-white bg-black text-white"
                >
                  About
                </Link>
              ) : (
                <Link
                  to={"/sign-up"}
                  className="px-8 py-2 border border-white bg-black text-white"
                >
                  Join
                </Link>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <Fade
              triggerOnce={true}
              duration={2000}
              cascade={true}
              direction="up"
            >
              <div className="flex flex-col gap-4 border border-black p-4 rounded-sm">
                <FaCube size={20} />
                <span className="font-bold text-xl">Community Support</span>
                <p>
                  At Gym Fit, you'll become part of a supportive community of
                  like-minded individuals who are on their own fitness journeys.
                  Share your progress, get inspired, and motivate each other to
                  push harder.
                </p>
              </div>

              <div className="flex flex-col gap-4 border border-black p-4 rounded-sm">
                <FaCube size={20} />
                <span className="font-bold text-xl">Flexible Membership</span>
                <p>
                  We understand that life can get busy, which is why we offer
                  flexible membership plans that fit your schedule. Whether you
                  prefer morning workouts, evening sessions, or weekend classes,
                  we have options that work for you.
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default Benefits;
