import { Router } from "express";

import { addBook, deleteBook, getBook, updateBook } from "../controllers/library_controllers.js";
import { remoteUpload} from "../middleware/upload.js";


//Create product router
const libraryRouter = Router();

//Define routes
libraryRouter.post('/books', remoteUpload.single("image"), addBook);

libraryRouter.get('/books', getBook);


libraryRouter.patch('/books/:id', remoteUpload.single("image"), updateBook);
libraryRouter.delete('/books/:id', deleteBook);

//Export router
export default libraryRouter; 