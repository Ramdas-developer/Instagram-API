const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      const uploadDir = "UploadPost";
      cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1E9);
      const fileExt = file.originalname;
      cb(null, file.fieldname + "-" + uniqueSuffix + fileExt);
    },
  });
  const upload = multer({ storage: storage });

  module.exports = upload;