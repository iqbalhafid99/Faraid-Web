import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { useAhliWarisState } from "../components/AhliWarisState";

function Hitung() {
  const ahliWarisItems = [
    { label: "Suami", state: useAhliWarisState(0) },
    { label: "Anak Laki-laki", state: useAhliWarisState(0) },
    { label: "Cucu lelaki dari anak laki-laki", state: useAhliWarisState(0) },
    { label: "Ayah", state: useAhliWarisState(0) },
    { label: "Kakek dari ayah", state: useAhliWarisState(0) },
    { label: "Saudara laki-laki sekandung", state: useAhliWarisState(0) },
    { label: "Saudara laki-laki seayah", state: useAhliWarisState(0) },
    { label: "Saudara laki-laki seibu", state: useAhliWarisState(0) },
    {
      label: "Anak lelaki dari saudara laki-laki yang sekandung",
      state: useAhliWarisState(0),
    },
    {
      label: "Anak lelaki dari saudara laki-laki yang seayah",
      state: useAhliWarisState(0),
    },
    { label: "Paman sekandung", state: useAhliWarisState(0) },
    { label: "Paman seayah", state: useAhliWarisState(0) },
    { label: "Anak lelaki dari paman sekandung", state: useAhliWarisState(0) },
    { label: "Anak lelaki dari paman seayah", state: useAhliWarisState(0) },
  ];

  const ahliWarisPerempuanItems = [
    { label: "Istri", state: useAhliWarisState(0) },
    { label: "Anak perempuan", state: useAhliWarisState(0) },
    {
      label: "Cucu perempuan dari anak laki-laki",
      state: useAhliWarisState(0),
    },
    { label: "Ibu", state: useAhliWarisState(0) },
    { label: "Nenek dari ayah", state: useAhliWarisState(0) },
    { label: "Nenek dari ibu", state: useAhliWarisState(0) },
    { label: "Saudara perempuan sekandung", state: useAhliWarisState(0) },
    { label: "Saudara perempuan seayah", state: useAhliWarisState(0) },
    {
      label: "Saudara perempuan seibu",
      state: useAhliWarisState(0),
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="bg-primary w-full h-[160vh] flex items-center justify-center">
        <div className="w-[90%] h-[90%] rounded-xl bg-gray-100 flex flex-col items-center">
          <div>
            <div className="mt-10">
              <h1 className="text-center text-xl font-semibold">Mayit</h1>
              <div className="flex gap-10 mt-10">
                <div className="flex gap-3">
                  <input type="checkbox" name="" id="" />
                  <label>Laki-laki</label>
                </div>
                <div className="flex gap-3">
                  <input type="checkbox" name="" id="" />
                  <label>Perempuan</label>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full  flex mt-10">
            <div className="flex-1 text-center">
              <div>
                <h1 className="text-xl font-semibold">Pilih Ahli Waris</h1>
                <h1 className="text-base text-primary">Laki-laki</h1>
              </div>
              <div className="mt-10">
                {ahliWarisItems.map((item, index) => (
                  <div className="ml-[150px]" key={index}>
                    <div className="flex gap-3 mt-2">
                      <button
                        onClick={item.state.handleMin}
                        className="border-2 px-1"
                      >
                        -
                      </button>
                      <h1>{item.state.count}</h1>
                      <button
                        onClick={item.state.handlePlus}
                        className="border-2 px-1"
                      >
                        +
                      </button>
                      <label>{item.label}</label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 text-center">
              <div>
                <h1 className="text-xl font-semibold">Pilih Ahli Waris</h1>
                <h1 className="text-base text-primary">perempuan</h1>
              </div>
              <div className="mt-10">
                {ahliWarisPerempuanItems.map((item, index) => (
                  <div className="ml-[150px]" key={index}>
                    <div className="flex gap-3 mt-2">
                      <button
                        onClick={item.state.handleMin}
                        className="border-2 px-1"
                      >
                        -
                      </button>
                      <h1>{item.state.count}</h1>
                      <button
                        onClick={item.state.handlePlus}
                        className="border-2 px-1"
                      >
                        +
                      </button>
                      <label>{item.label}</label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-20">
            <Link to={"/hasil"}>
              <button className="hover:bg-green-700 transition duration-500 hover:shadow-lg hover:scale-105 text-white font-semibold rounded-full  bg-primary py-3 px-10 text-center">
                Hitung
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hitung;
