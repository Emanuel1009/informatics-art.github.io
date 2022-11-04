import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Pendaftaran() {
  return (
    <div>
      <div className="bg-[#141E27] text-white py-6">
        <div className="ml-10 flex">
          <Link to={"/"}>
            <img className="w-[124px] h-[124px]" src="logo.png" />
          </Link>
          <div className="ml-10 my-auto font-serif">
            <h1 className="text-[24px] mb-4">INFORMATIKA</h1>
            <h4>Leading Through Technology</h4>
          </div>
          <div>
            <p className="text-4xl my-auto ml-80 font-serif inline-flex bordersaya">
              Informatic's ART
            </p>
            <div className="ml-[270px] mt-4">
              <Navbar />
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="font-['Poppins'] font-semibold text-[30px] text-center">
          Masukkan Biodata Anda
        </h1>
        <table className="mx-auto  font-['Poppins'] text-[17px] mt-4 ml-[410px]">
          <tr>
            <td>Nama </td>
            <td>
              <input
                type="text"
                className="form-control input input-bordered input-info w-full max-w-xs"
                placeholder="Masukkan nama"
              />
            </td>
          </tr>
          <tr>
            <td>Email </td>
            <td>
              <div className="mt-4">
                <input
                  type="email"
                  className="form-control input input-bordered input-info w-full max-w-xs"
                  placeholder="Masukkan Email"
                  id="exampleInputEmail"
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>Jenis kelamin</td>
            <td className="flex mt-4">
              <input
                type="radio"
                name="jenis-kelamin"
                value={"pria"}
                className="radio radio-info"
              />
              <p className="ml-[5px]">Pria</p>
              <input
                type="radio"
                name="jenis-kelamin"
                value={"wanita"}
                className="radio radio-info ml-4"
              />
              <p className="ml-[5px]">Wanita</p>
            </td>
          </tr>
          <tr>
            <td> Tpt /Tgl/lahir</td>
            <td>
              <div className="mt-4">
                <input
                  type="date"
                  name="lahir"
                  placeholder="Pilih tanggal lahir anda"
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>Deskripsi Program</td>
            <td>
              <div className="mt-4">
                <textarea
                  className="form-control textarea textarea-info w-full max-w-xs"
                  placeholder="Leave a comment here"
                  id="floatingTextarea1"
                ></textarea>
              </div>
            </td>
          </tr>
          <tr>
            <td>Upload Photo anda</td>
            <div className="mt-4">
              <td>
                <input type="file" name="gambar" />
              </td>
            </div>
          </tr>
          <tr>
            <td>Upload file anda</td>
            <div className="mt-4">
              <td>
                <input type="file" name="dokumen" />
              </td>
            </div>
          </tr>
          <tr>
            <td>Apa Hobi anda</td>
            <div className="mt-4">
              <td>
                <textarea
                  className="form-control textarea textarea-info w-[320px]"
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"
                ></textarea>
              </td>
            </div>
          </tr>
          <tr className="mx-auto">
            <td>
              <button
                type="button"
                className="btn btn-outline-primary ml-[200px] mt-6 mb-4 bg-sky-400 hover:bg-sky-400 border-none text-black"
              >
                Simpan
              </button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
