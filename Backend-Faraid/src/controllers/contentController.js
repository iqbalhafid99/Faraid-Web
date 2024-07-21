const Content = require("../models/contentModel");
const response = require("../helpers/response");

const addContent = async (req, res) => {
  try {
    const { title, content } = req.body;

    // Validation title 
    if (!title || !content) {
      return response(400, null, "Title and Content are required", res);
    }

    const konten = new Content({ title, content });
    await konten.save();
    response(201, konten, "Content created successfully", res);
  } catch (error) {
    console.error(error);
    response(500, null, "An error occurred", res);
  }
};

const getContent = async (req, res) => {
  try {
    const contents = await Content.find();
    response(200, contents, "Content retrieved successfully", res);
  } catch (error) {
    console.error(error);
    response(500, null, "An error occurred", res);
  }
};

const deleteContent = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedContent = await Content.findByIdAndRemove(id);

    if (!deletedContent) {
      return response(404, null, "Content not found", res);
    }

    response(200, deletedContent, "Content deleted successfully", res);
  } catch (error) {
    console.error(error);
    response(500, null, "An error occurred", res);
  }
};

const updateContent = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;

    // Validasi ID dan data yang diperlukan
    if (!title || !content) {
      return response(400, null, "Title and Content are required", res);
    }

    // Cari konten berdasarkan ID dan perbarui
    const updatedContent = await Content.findByIdAndUpdate(
      id,
      { title, content },
      { new: true }  // Opsi ini memastikan bahwa dokumen yang diperbarui dikembalikan
    );

    // Jika konten tidak ditemukan, kembalikan respons 404
    if (!updatedContent) {
      return response(404, null, "Content not found", res);
    }

    // Kembalikan respons dengan konten yang diperbarui
    response(200, updatedContent, "Content updated successfully", res);
  } catch (error) {
    console.error(error);
    response(500, null, "An error occurred", res);
  }}


  const getContentById = async (req, res) => {
    try {
      const { id } = req.params;
  
      // Cari konten berdasarkan ID
      const content = await Content.findById(id);
  
      // Jika konten tidak ditemukan, kembalikan respons 404
      if (!content) {
        return response(404, null, "Content not found", res);
      }
  
      // Kembalikan respons dengan konten yang ditemukan
      response(200, content, "Content retrieved successfully", res);
    } catch (error) {
      console.error(error);
      response(500, null, "An error occurred", res);
    }
};

module.exports = { addContent, getContent, deleteContent, updateContent, getContentById };
