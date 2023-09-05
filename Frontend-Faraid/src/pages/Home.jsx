import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div>
      <div>
        <Navbar />
        <div className="font-airbnb bg-primary h-screen w-full">
          <div className="flex items-center justify-between flex-wrap mx-28 pt-32">
            <div className="text-gray-100">
              <h1 className="text-6xl leading-normal font-bold">
                Hitung Harta Warisan <br /> Keluarga Anda
              </h1>
              <p className="text-2xl font-normal mt-10">
                Membantu umat islam dan para ahli waris menyelesaikan <br />
                persoalan pembagian harta waris menurut hukumm islam.
              </p>
              <Link to={"/hitung"}>
                <button className="mt-16 rounded-full px-6 py-3 border-2 font-semibold">
                  Mulai Hitung
                </button>
              </Link>
            </div>
            <div className="relative">
              <img
                className="items-center justify-center"
                src="/images/neraca.png"
                alt="headeri image"
              />
              <img
                className=" absolute top-0 w-[30%] right-0"
                src="/images/Header.png"
                alt="images"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
