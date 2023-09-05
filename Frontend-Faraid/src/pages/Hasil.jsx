import Navbar from "../components/Navbar";
import { useState } from "react";
import numeral from "numeral";

function Hasil() {
  const [inputValue, setInputValue] = useState(0);

  function handleInputChange(event) {
    const newValue = event.target.value;
    setInputValue(newValue);
  }

  return (
    <div>
      <Navbar />
      <div className="bg-primary w-full h-screen flex items-center justify-center">
        <div className="w-[90%] h-[90%] rounded-xl bg-gray-100 flex flex-col">
          <div className="ml-20 mt-20">
            <h1>Jumlah Harta warisan</h1>
            <input
              type="text"
              value={numeral(inputValue).format("0,0")} // Format angka dengan ribuan
              onChange={handleInputChange}
              className="rounded-lg mt-3 py-3 w-[40%] border-2 border-primary pl-2"
            />
          </div>
          <div className="ml-20 mt-10">
            <h1>Pembagian Harta Waris</h1>
            <div class="lg:w-[80%] w-full overflow-auto mt-5">
              <table class="table-auto border w-full text-left whitespace-no-wrap">
                <thead className="border">
                  <tr>
                    <th class="w-[40%] px-4 py-3 title-font tracking-wider border-white border-2 font-medium text-white text-sm bg-primary text-whit rounded-tl rounded-bl">
                      Ahli Waris
                    </th>
                    <th class="px-4 py-3 title-font tracking-wider border-white border-2 font-medium text-white text-sm bg-primary">
                      Furudh
                    </th>
                    <th class="w-[40%] pl-4 py-3 title-font tracking-wider border-white border-2 font-medium text-white text-sm bg-primary">
                      Hasil
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="px-4 py-3 border-2"></td>
                    <td class="px-4 py-3 border-2"></td>
                    <td class="px-4 py-3 border-2"></td>
                  </tr>
                  <tr>
                    <td class="border-2 border-gray-200 px-4 py-3"></td>
                    <td class="border-2 border-gray-200 px-4 py-3"></td>
                    <td class="border-2 border-gray-200 px-4 py-3"></td>
                  </tr>
                  <tr>
                    <td class="border-2 border-gray-200 px-4 py-3"></td>
                    <td class="border-2 border-gray-200 px-4 py-3"></td>
                    <td class="border-2 border-gray-200 px-4 py-3"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hasil;
