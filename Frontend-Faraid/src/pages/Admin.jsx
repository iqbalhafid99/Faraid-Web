import NavbarAdmin from "../components/NavbarAdmin";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";

function Admin() {
  const [contents, setContents] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    const data = {
      title,
      content,
    };

    axios
      .post("http://localhost:5000/content", data)
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: res.data.payload.message,
          timer: 2000,
        });
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Judul dan Konten tidak boleh kosong",
        });
      });
  };

  // get data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/content");
        const responseData = response.data.payload.data;
        setContents(responseData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <NavbarAdmin />
      <div className="flex flex-col items-center mt-20 gap-10">
        <div className="w-[80%] mx-auto flex flex-col items-center">
          <div className="flex-col mt-10 flex w-[100%]">
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
          </div>

          <button
            onClick={handleSubmit}
            className="hover:bg-green-700 transition duration-500 hover:shadow-lg hover:scale-105 text-white font-semibold rounded-full  bg-primary mt-10 py-3 px-10 text-center"
          >
            Create
          </button>
        </div>
      </div>
      <div className="mt-20 w-[90%] mx-auto">
        <div className="overflow-x-auto">
          <table className="table text-center">
            {/* head */}
            <thead>
              <tr>
                <th className="w-[10%] border">No</th>
                <th className="w-[40%] border">Judul</th>
                <th className="w-[20%] border">Edit</th>
                <th className="w-[20%] border">Delete</th>
              </tr>
            </thead>
            <tbody>
              {/* row  */}
              {contents.map((c, index) => (
                <tr key={c._id}>
                  <th className="border">{index + 1}</th>
                  <td className="border font-bold">{c.title}</td>
                  <td className="border">
                    <Link to={"/edit"}>
                      <EditIcon />
                    </Link>
                  </td>
                  <td className="border">
                    <button
                      onClick={async () => {
                        Swal.fire({
                          title: "Yakin Ingin Menghapus Konten?",
                          text: "Konten terhapus tidak bisa dikembalikan!",
                          icon: "warning",
                          showCancelButton: true,
                          confirmButtonColor: "#3085d6",
                          cancelButtonColor: "#d33",
                          confirmButtonText: "Ya, Hapus!",
                        }).then((result) => {
                          if (result.isConfirmed) {
                            axios
                              .delete(`http://localhost:5000/content/${c._id}`)
                              .then((res) => {
                                Swal.fire({
                                  icon: "success",
                                  title: "Berhasil dihapus",
                                  showConfirmButton: false,
                                  timer: 2000,
                                });
                                window.location.reload();
                              })
                              .catch((err) => {
                                console.log(err);
                              });
                          }
                        });
                      }}
                    >
                      <DeleteIcon />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="mb-20"></div>
    </div>
  );
}

export default Admin;
