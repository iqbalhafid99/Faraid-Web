import { useState, useEffect } from "react";
import NavbarAdmin from "../components/NavbarAdmin";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Edit() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/content/${id}`);
        setTitle(response.data.payload.data.title);
        setContent(response.data.payload.data.content);
      } catch (error) {
        console.error("Error fetching content:", error);
      }
    };

    fetchContent();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/content/${id}`, {
        title,
        content,
      });
      Swal.fire({
        icon: "success",
        title: "data berhasil diupdate",
        timer: 2000,
      });
      navigate("/admin");
    } catch (error) {
      console.error("Error updating content:", error);
    }
  };

  return (
    <div>
      <NavbarAdmin />
      <div className="flex flex-col items-center mt-20 gap-10">
        <div className="w-[80%] mx-auto flex flex-col items-center">
          <form
            className="flex-col mt-10 flex w-[100%]"
            onSubmit={handleSubmit}
          >
            <label className="mb-3 text-primary">Judul</label>
            <input
              className="w-[100%] rounded-lg pt-3 border-2 px-2 py-2 border-primary"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <label className="mb-3 mt-6 text-primary">Isi Konten</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-[100%] rounded-lg pt-3 border-2 px-2 py-2 border-primary h-[200px]"
            />

            <button
              type="submit"
              className="hover:bg-green-700 transition duration-500 hover:shadow-lg hover:scale-105 text-white font-semibold rounded-full  bg-primary mt-10 py-3 px-10 text-center"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Edit;
