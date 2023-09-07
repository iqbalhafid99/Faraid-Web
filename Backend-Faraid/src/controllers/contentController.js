const Content = require("../models/contentModel")
const response = require("../helpers/response")

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
  }

  module.exports={addContent, getContent, deleteContent}