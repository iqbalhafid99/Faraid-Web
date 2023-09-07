import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";

function Keilmuan() {
  const [contents, setContents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/content");
        setContents(response.data.payload.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      {contents.map((c) => (
        <div
          className="collapse collapse-arrow bg-base-200 text-center px-10"
          key={c._id}
        >
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">{c.title}</div>
          <div className="collapse-content">
            <p>{c.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Keilmuan;
