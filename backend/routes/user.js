import express from "express";
import fs from "fs";

import fileUpload from "../utils/fileupload.js";
import extractRar from "../utils/FileExtractor.js";

const router = express.Router();

router.route("/zip").post(fileUpload.single("file"), async (req, res, next) => {
  // Multer adds the file information to req.file
  if (!req.file) {
    return res
      .status(400)
      .json({ message: "No file uploaded or wrong file type." });
  }

  const zipFilePath = req.file.path;
  const name = req.body.name + Date.now();
  try {
    await extractRar(name, zipFilePath);
  } catch (error) {
    console.log(error);
    res.status(400);
    return next(new Error("File to extract zip file."));
  }

  // Perform additional processing on the ZIP file if needed
  fs.unlink(req.file.path, (err) => console.log(err));
  res
    .status(200)
    .json({ message: "File uploaded successfully", filePath: zipFilePath });
});
export default router;
