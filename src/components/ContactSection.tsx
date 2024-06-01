import { MdOutlineEmail } from "react-icons/md";

const ContactSection = () => {
  return (
    <section className="container py-20">
      <div className="flex lg:flex-row flex-col gap-4 items-center text-center lg:text-start justify-center">
        <div className="flex flex-col gap-4 items-center">
          <MdOutlineEmail size={40} />
          <span className="font-bold text-xl">Email</span>
          <p>For any inquiries, please fill out the form below.</p>
          <a href="">johndoe@example.components</a>
        </div>

        <div className="flex flex-col gap-4 items-center">
          <MdOutlineEmail size={40} />
          <span className="font-bold text-xl">Email</span>
          <p>For any inquiries, please fill out the form below.</p>
          <a href="">johndoe@example.components</a>
        </div>

        <div className="flex flex-col gap-4 items-center">
          <MdOutlineEmail size={40} />
          <span className="font-bold text-xl">Email</span>
          <p>For any inquiries, please fill out the form below.</p>
          <a href="">johndoe@example.components</a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
