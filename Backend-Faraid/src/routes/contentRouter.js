const express = require("express");
const router = express.Router();
const {
  addContent, getContent, deleteContent,
  updateContent,
  getContentById
} = require("../controllers/contentController");

router.post("/content", addContent);
router.get("/content", getContent);
router.get("/content/:id", getContentById);
router.delete("/content/:id", deleteContent);
router.put("/content/:id", updateContent);



module.exports = router;