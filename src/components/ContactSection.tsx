import { BiPhone } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";

const ContactSection = () => {
  return (
    <section className="container md:py-20 my-12 md:my-20">
      <div className="flex lg:flex-row flex-col gap-4 items-center text-center lg:text-start justify-center">
        <div className="flex flex-col gap-4 items-center">
          <MdOutlineEmail size={40} />
          <span className="font-bold text-xl">Email</span>
          <p>For any inquiries, please email us at the address below.</p>
          <a href="">johndoe@example.components</a>
        </div>

        <div className="flex flex-col gap-4 items-center">
          <BiPhone size={40} />
          <span className="font-bold text-xl">Email</span>
          <p>Chat with our team in real-time for quick assistance.</p>
          <p>+1 (555) 000-0000</p>
        </div>

        <div className="flex flex-col gap-4 items-center">
          <CiLocationOn size={40} />
          <span className="font-bold text-xl">Office</span>
          <p>Give us a call if you have any questions or concerns.</p>
          <p>123 Sample St, Sydney NSW 2000 AU</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
