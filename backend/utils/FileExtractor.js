import fs from "fs-extra";
import path from "path";

import AdmZip from "adm-zip";

async function extractZip(name, zipFilePath) {
  const outputDir = path.join("./backend/extracted-file", name);

  try {
    // Create directory if it doesn't exist
    await fs.ensureDir(outputDir);

    // Read the .zip file
    const zip = new AdmZip(zipFilePath);

    // Extract all files
    zip.extractAllTo(outputDir, true);

    console.log("Extraction completed successfully.");
  } catch (error) {
    console.error("Error:", error);
  }
}

export default extractZip;
