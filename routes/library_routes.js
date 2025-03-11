import { Router } from "express";

import { addBook, deleteBook, getBook, updateBook } from "../controllers/library_controllers.js";

//Create product router
const libraryRouter = Router();

//Define routes
libraryRouter.post('/books', addBook);

libraryRouter.get('/books', getBook);

libraryRouter.patch('/books/:id', updateBook);
libraryRouter.delete('/books/:id', deleteBook);

//Export router
export default libraryRouter; 