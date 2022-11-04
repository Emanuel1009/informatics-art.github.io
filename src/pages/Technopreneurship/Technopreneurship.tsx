import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Profile from "../../components/Profile";

export default function Techno() {
  return (
    <div>
      <Header />
      <p className="ml-4 mt-2 font-['Poppins'] font-semibold text-[15px]">
        Technopreneurship
      </p>
      <div>
        <div className="flex py-8 px-4">
          <p className="font-['Poppins'] text-xl">
            <img
              src="luffy.png"
              className="float-left w-[210px] mr-4 h-[210] rounded-[10px]"
            />
            <h2 className="text-4xl font-['Montserrat'] mb-4">
              Emanuel Amstrong
            </h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
            distinctio nostrum totam amet explicabo sapiente similique. Esse sed
            quasi vel voluptatem? Magni commodi numquam error, beatae quis
            reprehenderit accusantium aliquam?
          </p>
          <div className="mt-[150px] absolute ml-[226px]">
            <Link to={"/techno1"}>
              <button className="w-[70px] btn bg-sky-500 border-none">
                Read More...
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Profile />
      <Profile />
    </div>
  );
}
