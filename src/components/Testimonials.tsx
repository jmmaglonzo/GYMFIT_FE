import { FaStar } from "react-icons/fa6";

const Testimonials = () => {
  return (
    <section className="container py-20">
      <div className="flex flex-col  space-y-4">
        <h3 className="font-bold text-3xl text-center">
          Customer testimonials
        </h3>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
          cupiditate nobis earum illum ipsam iure!
        </p>

        <div className="flex gap-4 items-center">
          <div className="border border-black rounded-sm p-4 space-y-4">
            <div className="flex items-center">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae,
              suscipit, molestiae quos, cupiditate veritatis excepturi id iusto
              minus illum officiis atque. Consequatur quod assumenda corporis
              atque. A blanditiis aperiam dignissimos praesentium ipsam tempora
              rem. Molestias iste laboriosam ut inventore dolores?
            </p>

            <div className="flex gap-2 items-center">
              <div className="w-10 h-10 rounded-full bg-slate-700"></div>
              <div className="flex flex-col">
                <span className="text-sm font-bold">Name Surname</span>
                <p className="text-sm">Position company name</p>
              </div>
            </div>
          </div>

          <div className="border border-black rounded-sm p-4 space-y-4">
            <div className="flex items-center">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae,
              suscipit, molestiae quos, cupiditate veritatis excepturi id iusto
              minus illum officiis atque. Consequatur quod assumenda corporis
              atque. A blanditiis aperiam dignissimos praesentium ipsam tempora
              rem. Molestias iste laboriosam ut inventore dolores?
            </p>

            <div className="flex gap-2 items-center">
              <div className="w-10 h-10 rounded-full bg-slate-700"></div>
              <div className="flex flex-col">
                <span className="text-sm font-bold">Name Surname</span>
                <p className="text-sm">Position company name</p>
              </div>
            </div>
          </div>

          <div className="border border-black rounded-sm p-4 space-y-4">
            <div className="flex items-center">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae,
              suscipit, molestiae quos, cupiditate veritatis excepturi id iusto
              minus illum officiis atque. Consequatur quod assumenda corporis
              atque. A blanditiis aperiam dignissimos praesentium ipsam tempora
              rem. Molestias iste laboriosam ut inventore dolores?
            </p>

            <div className="flex gap-2 items-center">
              <div className="w-10 h-10 rounded-full bg-slate-700"></div>
              <div className="flex flex-col">
                <span className="text-sm font-bold">Name Surname</span>
                <p className="text-sm">Position company name</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
