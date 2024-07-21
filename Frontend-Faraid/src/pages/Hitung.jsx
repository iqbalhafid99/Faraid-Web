import { useState } from "react";
import Navbar from "../components/Navbar";
import { useAhliWarisState } from "../components/AhliWarisState";
import numeral from "numeral";
import calculateInheritance from "../components/HitunganWaris";

function Hitung() {
  const [inputValue, setInputValue] = useState("");
  const [mayitGender, setMayitGender] = useState(null);
  const [results, setResults] = useState([]);

  function handleInputChange(event) {
    const newValue = event.target.value;
    setInputValue(newValue);
  }

  const ahliWarisItems = [
    { label: "Suami", state: useAhliWarisState(0, 1), key: "A3" },
    { label: "Anak Laki-laki", state: useAhliWarisState(0), key: "A5" },
    {
      label: "Cucu lelaki dari anak laki-laki",
      state: useAhliWarisState(0),
      key: "B1",
    },
    { label: "Ayah", state: useAhliWarisState(0, 1), key: "A1" },
    { label: "Kakek dari ayah", state: useAhliWarisState(0, 1), key: "B3" },
    {
      label: "Saudara laki-laki sekandung",
      state: useAhliWarisState(0),
      key: "C1",
    },
    {
      label: "Saudara laki-laki seayah",
      state: useAhliWarisState(0),
      key: "C3",
    },
    {
      label: "Saudara laki-laki seibu",
      state: useAhliWarisState(0),
      key: "C5",
    },
    {
      label: "Anak lelaki dari saudara laki-laki yang sekandung",
      state: useAhliWarisState(0),
      key: "C6",
    },
    {
      label: "Anak lelaki dari saudara laki-laki yang seayah",
      state: useAhliWarisState(0),
      key: "C7",
    },
    { label: "Paman sekandung", state: useAhliWarisState(0), key: "C7" },
    { label: "Paman seayah", state: useAhliWarisState(0), key: "C8" },
    {
      label: "Anak lelaki dari paman sekandung",
      state: useAhliWarisState(0),
      key: "C9",
    },
    {
      label: "Anak lelaki dari paman seayah",
      state: useAhliWarisState(0),
      key: "C10",
    },
  ];

  const ahliWarisPerempuanItems = [
    { label: "Istri", state: useAhliWarisState(0, 4), key: "A4" },
    { label: "Anak perempuan", state: useAhliWarisState(0), key: "A6" },
    {
      label: "Cucu perempuan dari anak laki-laki",
      state: useAhliWarisState(0),
      key: "B2",
    },
    { label: "Ibu", state: useAhliWarisState(0, 1), key: "A2" },
    { label: "Nenek dari ayah", state: useAhliWarisState(0, 1), key: "B5" },
    { label: "Nenek dari ibu", state: useAhliWarisState(0, 1), key: "B6" },
    {
      label: "Saudara perempuan sekandung",
      state: useAhliWarisState(0),
      key: "C2",
    },
    {
      label: "Saudara perempuan seayah",
      state: useAhliWarisState(0),
      key: "C4",
    },
    {
      label: "Saudara perempuan seibu",
      state: useAhliWarisState(0),
      key: "C6",
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

    // Buat presence object untuk digunakan dalam calculateInheritance
    const presence = {};
    combinedAhliWarisItems.forEach((item) => {
      if (item.state.count > 0) {
        presence[item.key] = item.state.count;
      }
    });

    // Hitung furudh menggunakan calculateInheritance
    const furudhResults = calculateInheritance(presence);

    newResults = combinedAhliWarisItems
      .filter((item) => item.state.count > 0 && furudhResults[item.key]) // Filter untuk hanya yang ada dalam furudhResults dan count lebih dari 0
      .map((item) => ({
        label: item.label,
        furudh: furudhResults[item.key], // Gunakan hasil dari calculateInheritance
        hasil: inputValue, // Asumsi: perhitungan contoh, sesuaikan dengan logika Anda
      }));

    setResults(newResults);
  }

  return (
    <div>
      <Navbar />
      <div className="bg-primary w-full h-full flex items-center justify-center">
        <div className="w-[90%] h-[90%] rounded-xl bg-gray-100 flex flex-col items-center">
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
          <div className="mt-10">
            <h1 className="text-center text-xl font-semibold">
              Jumlah Harta warisan
            </h1>
            <input
              type="number"
              value={inputValue}
              onChange={handleInputChange}
              className="rounded-lg mt-3 py-3 w-[90%] border-2 border-primary pl-3"
            />
          </div>
          <div className="w-full  flex mt-10">
            <div className="flex-1 text-center">
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
          <div className="w-full flex items-center justify-center mt-10">
            <button
              onClick={handleHitung}
              className="bg-primary px-5 py-2 text-white rounded-lg"
            >
              Hitung
            </button>
          </div>
          <div className="lg:w-[80%] w-full overflow-auto mt-5 mb-20">
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
  );
}

export default Hitung;
