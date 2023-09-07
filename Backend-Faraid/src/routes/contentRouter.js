const express = require("express");
const router = express.Router();
const {
  addContent, getContent, deleteContent
} = require("../controllers/contentController");

router.post("/content", addContent);
router.get("/content", getContent);
router.delete("/content/:id", deleteContent);



module.exports = router;