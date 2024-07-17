import { useState } from "react";
import Navbar from "../components/Navbar";
import { useAhliWarisState } from "../components/AhliWarisState";
import numeral from "numeral";

function Hitung() {
  const [inputValue, setInputValue] = useState(0);
  const [mayitGender, setMayitGender] = useState(null);
  const [results, setResults] = useState([]);

  function handleInputChange(event) {
    const newValue = event.target.value;
    setInputValue(newValue);
  }

  const ahliWarisItems = [
    { label: "Suami", state: useAhliWarisState(0, 1) },
    { label: "Anak Laki-laki", state: useAhliWarisState(0) },
    { label: "Cucu lelaki dari anak laki-laki", state: useAhliWarisState(0) },
    { label: "Ayah", state: useAhliWarisState(0, 1) },
    { label: "Kakek dari ayah", state: useAhliWarisState(0, 1) },
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
    { label: "Istri", state: useAhliWarisState(0, 4) },
    { label: "Anak perempuan", state: useAhliWarisState(0) },
    {
      label: "Cucu perempuan dari anak laki-laki",
      state: useAhliWarisState(0),
    },
    { label: "Ibu", state: useAhliWarisState(0, 1) },
    { label: "Nenek dari ayah", state: useAhliWarisState(0, 1) },
    { label: "Nenek dari ibu", state: useAhliWarisState(0, 1) },
    { label: "Saudara perempuan sekandung", state: useAhliWarisState(0) },
    { label: "Saudara perempuan seayah", state: useAhliWarisState(0) },
    {
      label: "Saudara perempuan seibu",
      state: useAhliWarisState(0),
    },
  ];

  const handleGenderChange = (gender) => {
    setMayitGender(gender);
  };

  function handleHitung() {
    let newResults = [];
    // Gabungkan ahli waris laki-laki dan perempuan jika ada nilai lebih dari nol
    const combinedAhliWarisItems = [
      ...ahliWarisItems,
      ...ahliWarisPerempuanItems,
    ];

    newResults = combinedAhliWarisItems
      .filter((item) => item.state.count > 0) // Filter untuk hanya yang count lebih dari nol
      .map((item) => ({
        label: item.label,
        furudh: item.state.count / 6, // Ganti dengan informasi furudh yang sesuai
        hasil: item.state.count * inputValue, // Asumsi: perhitungan contoh, sesuaikan dengan logika Anda
      }));

    setResults(newResults);
  }

  return (
    <div>
      <Navbar />
      <div className="bg-primary w-full h-[160vh] flex items-center justify-center">
        <div className="w-[90%] h-[140vh] rounded-xl bg-gray-100 flex flex-col items-center">
          <div>
            <div className="mt-10">
              <h1 className="text-center text-xl font-semibold">Mayit</h1>
              <div className="flex gap-10 mt-10">
                <div className="flex gap-3">
                  <input
                    type="checkbox"
                    checked={mayitGender === "male"}
                    onChange={() => handleGenderChange("male")}
                  />
                  <label>Laki-laki</label>
                </div>
                <div className="flex gap-3">
                  <input
                    type="checkbox"
                    checked={mayitGender === "female"}
                    onChange={() => handleGenderChange("female")}
                  />
                  <label>Perempuan</label>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full  flex mt-10">
            <div className="flex-1 text-center">
              <button
                onClick={() => {
                  console.log(inputValue);
                }}
              >
                halo
              </button>
              <div>
                <h1 className="text-xl font-semibold">Pilih Ahli Waris</h1>
                <h1 className="text-base text-primary">Laki-laki</h1>
              </div>
              <div className="mt-10">
                {ahliWarisItems.map((item, index) =>
                  item.label !== "Suami" || mayitGender !== "male" ? (
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
                  ) : null
                )}
              </div>
            </div>
            <div className="flex-1 text-center">
              <div>
                <h1 className="text-xl font-semibold">Pilih Ahli Waris</h1>
                <h1 className="text-base text-primary">Perempuan</h1>
              </div>
              <div className="mt-10">
                {ahliWarisPerempuanItems.map((item, index) =>
                  item.label !== "Istri" || mayitGender !== "female" ? (
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
                  ) : null
                )}
              </div>
            </div>
          </div>
          <div className=" mt-10">
            <button
              onClick={handleHitung}
              className="hover:bg-green-700 transition duration-500 hover:shadow-lg hover:scale-105 text-white font-semibold rounded-full bg-primary py-3 px-10 text-center"
            >
              Hitung
            </button>
          </div>
        </div>
      </div>

      {/* hasil */}
      <div>
        <div className="bg-primary w-full h-screen flex items-center justify-center">
          <div className="w-[90%] h-[90%] rounded-xl bg-gray-100 flex flex-col">
            <div className="ml-20 mt-20">
              <h1>Jumlah Harta warisan</h1>
              <input
                type="text"
                value={inputValue} // Format angka dengan ribuan
                onChange={handleInputChange}
                className="rounded-lg mt-3 py-3 w-[40%] border-2 border-primary pl-2"
              />
            </div>
            <div className="ml-20 mt-10">
              <h1>Pembagian Harta Waris</h1>
              <div className="lg:w-[80%] w-full overflow-auto mt-5">
                <table className="table-auto border w-full text-left whitespace-no-wrap">
                  <thead className="border">
                    <tr>
                      <th className="w-[40%] px-4 py-3 title-font tracking-wider border-white border-2 font-medium text-white text-sm bg-primary text-whit rounded-tl rounded-bl">
                        Ahli Waris
                      </th>
                      <th className="px-4 py-3 title-font tracking-wider border-white border-2 font-medium text-white text-sm bg-primary">
                        Furudh
                      </th>
                      <th className="w-[40%] pl-4 py-3 title-font tracking-wider border-white border-2 font-medium text-white text-sm bg-primary">
                        Hasil
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {results.map((result, index) => (
                      <tr key={index}>
                        <td className="border-2 border-gray-200 px-4 py-3">
                          {result.label}
                        </td>
                        <td className="border-2 border-gray-200 px-4 py-3">
                          {result.furudh}
                        </td>
                        <td className="border-2 border-gray-200 px-4 py-3">
                          Rp. {numeral(result.hasil).format("0,0")}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hitung;
