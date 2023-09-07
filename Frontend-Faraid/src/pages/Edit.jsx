import NavbarAdmin from "../components/NavbarAdmin";

function Edit() {
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
              //   value={title}
              //   onChange={(e) => setTitle(e.target.value)}
            />

            <label className="mb-3 mt-6 text-primary">Isi Konten</label>
            <textarea
              //   value={content}
              //   onChange={(e) => setContent(e.target.value)}
              className="w-[100%] rounded-lg pt-3 border-2 px-2 py-2 border-primary h-[200px]"
            />
          </div>

          <button
            // onClick={handleSubmit}
            className="hover:bg-green-700 transition duration-500 hover:shadow-lg hover:scale-105 text-white font-semibold rounded-full  bg-primary mt-10 py-3 px-10 text-center"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
}

export default Edit;
