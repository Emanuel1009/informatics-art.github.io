import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar mt-[19px] bg-[#141E27] w-[450px]">
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <Link to={"/"}>
            <li className="font-['Poppins'] text-[18px]">
              <a>Karya Kami</a>
            </li>
          </Link>
          <li className="font-['Poppins'] text-[18px]" tabIndex={0}>
            <a>
              Kategori
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2 bg-[#141E27]">
              <Link to={"/techno"}>
                <li>
                  <a>Technopreneurship</a>
                </li>
              </Link>
              <li>
                <a>Android Programming</a>
              </li>
              <li>
                <a>Desktop Application</a>
              </li>
            </ul>
          </li>
          <Link to={"/pendaftaran"}>
            <li className="font-['Poppins'] text-[18px]">
              <a>Pendaftaran</a>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
