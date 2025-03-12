import { Router } from "express";

import { addBook, deleteBook, getBook, searchBooks, updateBook } from "../controllers/library_controllers.js";
import { remoteUpload} from "../middleware/upload.js";


//Create product router
const libraryRouter = Router();

//Define routes
libraryRouter.post('/books', remoteUpload.single("image"),addBook);

libraryRouter.get('/books', getBook);
libraryRouter.get('/books/search', searchBooks); //I added it here so the code looks organised

libraryRouter.patch('/books/:id', updateBook);
libraryRouter.delete('/books/:id', deleteBook);

//Export router
export default libraryRouter; 