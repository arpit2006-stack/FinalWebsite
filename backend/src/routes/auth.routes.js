import express from "express";
// import path from "path";
import multer from "multer";
import {
  signup,
  login,
  logout,
  checkAuth,
} from "../controller/auth.controller.js";

import { TokenGuard } from '../middleware/auth.middleware.js';


const router = express.Router();

// const rootPath  = path.join(process.env.UPLOAD_FILE_PATH,"uploads");



// import fs from "fs";
// if (!fs.existsSync(rootPath)) {
//   fs.mkdirSync(rootPath, { recursive: true });
// }

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, rootPath); // Save files to the 'uploads' folder
//   },
//   filename: (req, file, cb) => {
//     cb(null, `${Date.now()}-${file.originalname}`);
//   },
// });

// const upload = multer({
//   storage,
//   limits: { fileSize: 10 * 1024 * 1024 },
// });

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

// router.put("/updateDP", TokenGuard, upload.single("profilePic"), updateDP);

router.get("/check", TokenGuard, checkAuth);

export default router;