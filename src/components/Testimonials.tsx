import { FaStar } from "react-icons/fa6";
import { users } from "../utils/testimonials";
import { Fade } from "react-awesome-reveal";

const Testimonials = () => {
  return (
    <section className="container my-12 md:mt-20 md:py-20 px-4">
      <div className="flex flex-col  space-y-4">
        <Fade triggerOnce={true}>
          <h3 className="font-bold text-2xl md:text-3xl text-center">
            Customer testimonials
          </h3>
          <p className="text-center md:text-base text-sm">
            Testimonials from Our Valued Members
          </p>
        </Fade>

        <div className="flex lg:flex-row flex-col gap-4 items-center">
          <Fade
            triggerOnce={true}
            duration={1500}
            cascade={true}
            direction="down"
          >
            {users.map((user) => (
              <div
                key={user.id}
                className="border border-black rounded-sm p-4 space-y-4"
              >
                <div className="flex items-center">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>

                <p className=" text-sm">{user.testimonial}</p>

                <div className="flex gap-2 items-center">
                  <img className="w-10 h-10 rounded-full " src={user.img} />
                  <div className="flex flex-col">
                    <span className="text-sm font-bold">{user.name}</span>
                    <p className="text-sm">{user.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
