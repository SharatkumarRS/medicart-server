const Prescription = require("../models/Prescription");

exports.uploadPrescription = async (req, res) => {
  try {
    const { name, phone } = req.body;
    console.log("📦 Body:", req.body);
    console.log("🖼️ File:", JSON.stringify(req.file, null, 2)); // <-- FORCE FILE TO PRINT PROPERLY

    const image = req.file?.path || req.file?.secure_url;
    if (!image) {
      return res.status(400).json({ message: "Image is required" });
    }

    const prescription = new Prescription({ name, phone, image });
    await prescription.save();

    res.status(201).json({ message: "✅ Prescription uploaded", prescription });
  } catch (err) {
    console.error("❌ Error uploading prescription:");
    console.error(JSON.stringify(err, null, 2)); // <-- REAL ERROR HERE

    res.status(500).json({ message: err.message || "Internal server error" });
  }
};
