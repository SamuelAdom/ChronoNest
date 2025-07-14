import GQ from "../assets/GQ.png";
import Mens_Health from "../assets/Mens_Health.png";
import Esquire from "../assets/Esquire.png";
import Vogue from "../assets/Vogue.png";
export default () => {
  return (
    <div className="py-14 bg-black">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <h3 className="font-mono text-lg text-white text-center">
          FEATURED ON
        </h3>
        <div className="mt-6">
          <ul className="flex gap-y-6 flex-wrap items-center justify-center [&>*]:px-12 lg:divide-x">
            {/* LOGO 1 */}
            <li className="flex-none">
              <img className="w-30" src={Vogue} />
            </li>

            {/* LOGO 2 */}
            <li className="flex-none">
              <img className="w-30" src={GQ} />
            </li>

            {/* LOGO 3 */}
            <li className="flex-none">
              <img className="w-30" src={Esquire} />
            </li>

            {/* LOGO 4 */}
            <li className="flex-none">
              <img className="w-30" src={Mens_Health} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
