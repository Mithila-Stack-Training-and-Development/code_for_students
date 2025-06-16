import express from "express";
const uploadRouter = express.Router();

import multer from "multer";

// Uploading file middleware
const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./upload");
    },
    filename: (req, file, cb) => {
      const randomFileName = Math.random().toString(36).substring(2, 15);

      cb(null, `${randomFileName}-${file.originalname}`);
    },
  }),
});

uploadRouter.post("/single", upload.single("file"), (req, res) => {
  console.log(req.file);
  res.send("File uploaded successfully");
});

uploadRouter.post("/multiple", upload.array("files"), (req, res) => {
  // this working and have to upload multiple files ('files')
  // Previously we have postman issue that's why we were getting undefined
  console.log(req.files);
  res.send("File uploaded successfully");
});

export default uploadRouter;
