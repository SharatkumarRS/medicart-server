const express = require("express");
const router = express.Router();
const multer = require("multer");
const { storage } = require("../utils/cloudinary");
const upload = multer({ storage });

const { uploadPrescription } = require("../controllers/prescriptionController");

router.post("/upload", upload.single("image"), uploadPrescription);

module.exports = router;
