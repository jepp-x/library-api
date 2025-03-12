import { response } from "express";
import { LibraryModel } from "../models/library_model.js"
import { addLibraryValidator } from "../validators/library_validators.js"

export const addBook = async (req, res, next) => {
  try {
    // Upload product image
    // Validate prodcut information
    const { error, value } = addLibraryValidator.validate(req.body, { abortEarly: false });
    if (error) {
      return res.status(400).json(error);
      // to get just the error message replace the error with "error.details[0].message"
    }
    // Save product information in database 
    const result = await LibraryModel.create(value);
    // Return response
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
}

export const getBook = async (req, res, next) => {
  try {
    //Fetch products from database
    const result = await LibraryModel.find();
    res.json(result);
  } catch (error) {
    next(error);

  }
}



export const updateBook = async (req, res, next) => {
  try {
    const book = await LibraryModel.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (book) {
      res.status(201).json(book);
    } else {
      res.status(400).send("Book not found");
    }
  } catch (error) {
    next(error)

  }
};

export const deleteBook = async (req, res, next) => {
  try {
    const book = await LibraryModel.findByIdAndDelete(req.params.id);

    if (book) {
      res.status(201).json(book);
    } else {
      res.status(400).send("Book not found");
    }
  } catch (error) {
    next(error)

  }
}

export const searchBooks = async (req, res, next) => {
  try {
      // Extract query parameters
      const { title, author, genre } = req.query;

      // Build the search query to search for books by title, author or genre
      const searchQuery = {};
      if (title) searchQuery.title = title;
      if (author) searchQuery.author = author;
      if (genre) searchQuery.genre = genre;

      // Search for books in the database
      const result = await LibraryModel.find(searchQuery);
      // Return response
      res.status(200).json({
        success:true,
        data:result
      })
  
    } catch (error) {
      next(error);
    }
  };
