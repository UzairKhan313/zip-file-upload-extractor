import multer from "multer";

const MIMI_TYPE_MAP = {
  "image/png": "png",
  "image/jpeg": "jpeg",
  "image/jpg": "jpg",
  "application/x-zip-compressed": "zip",
};
const fileUpload = multer({
  limits: 500000,
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "backend/uploads");
    },
    filename: (req, file, cb) => {
      const ext = MIMI_TYPE_MAP[file.mimetype];
      cb(null, req.body.name + Date.now() + "." + ext);
    },
  }),
  fileFilter: (req, file, cb) => {
    const isValid = !!MIMI_TYPE_MAP[file.mimetype]; // converting null and undifine to false with 2 exclamaition.
    let error = isValid ? null : new Error("Invalid mime type");
    cb(error, isValid);
  },
});

export default fileUpload;
