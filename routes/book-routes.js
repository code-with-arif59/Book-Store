import { Router } from "express";
import { handleGetAllBook,handleGetSingleBook,handleCreateNewBook,handleUpdateBook,handleDeleteBook, submitdata } from "../controller/book-controllers.js";

const router = Router();

router.get("/",handleCreateNewBook)
router.post("/submit",submitdata)
router.get("/all-book",handleGetAllBook)
router.get("/book/:id",handleGetSingleBook)
router.put("/update-book/:id",handleUpdateBook)
router.delete("/delete-book/:id",handleDeleteBook)

export default router;