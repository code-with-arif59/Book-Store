import { Router } from "express";
import { handleGetAllBook,handleGetSingleBook,handleCreateNewBook,handleUpdateBook,handleDeleteBook } from "../controller/book-controllers.js";

const router = Router();

router.post("/",handleCreateNewBook)
router.get("/all-book",handleGetAllBook)
router.get("/book/:id",handleGetSingleBook)
router.put("/update-book/:id",handleUpdateBook)
router.delete("/delete-book/:id",handleDeleteBook)

export default router;