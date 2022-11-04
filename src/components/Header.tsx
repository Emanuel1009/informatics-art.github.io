import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <div className="relative">
      <div className="bg-[#141E27] text-white py-4">
        <div className="ml-10 flex">
          <Link to={"/"}>
            <img className="w-[124px] h-[124px]" src="logo.png" />
          </Link>
          <div className="ml-10 my-auto font-serif">
            <h1 className="text-[24px] mb-4">INFORMATIKA</h1>
            <h4>Leading Through Technology</h4>
          </div>
          <div>
            <p className="text-4xl ml-80 font-serif inline-flex bordersaya">
              Informatic's ART
            </p>
            <div className="ml-[230px] mt-[12px]">
              <Navbar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
