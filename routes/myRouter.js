import  express  from "express";
import { addData,  getColor } from "../Controllers/index.js";
import { getData } from "../Controllers/index.js";

const router = express.Router();

router.post("/add" , addData);

router.get("/alldata", getData);

router.get("/select", getColor);

 export default router;
 