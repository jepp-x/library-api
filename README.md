# library-api
-Name all files in small letters and use undescore(_) to represent space

# Setting up the Project:
-Initialization: We begin by initializing a Node.js project using npm init -y.
-Dependencies: Essential dependencies include express, mongoose,cors, dotenv, nodemon, and mongodb related packages. 

# MongoDB Connection:
-Connection String: A connection string is required to establish a connection with the MongoDB database. 
-MongoClient: The MongoClient object from the mongodb package is used to connect to the MongoDB server.
-Database and Collection: The code retrieves a reference to the desired database and collection within MongoDB.

# CRUD Operations with Express:
-Create (POST /addbooks): This route allows sending book data in the request body using a POST request.
-Read (GET /getbooks): This route retrieves all book data from the "books" collection using bookCollections.find().
-Update (PATCH /books/:id): This route allows updating a specific book identified by its ID in the URL path.
-Delete (DELETE /books/:id): This route deletes a book identified by its ID in the URL path.

# Advanced Search books:
-The API demonstrates fetching books based on specific criteria using additional GET routes: /all_books/:category retrieves books belonging to a particular category. /books/:author retrieves books written by a specific author, etc.

# structur
library-api/
│
├── controllers/
│   ├── library_controllers.js
│
├── models/
│   ├── library_model.js
│
├── routes/
│   ├── library_routes.js
│
├── index.js
├── package.json
└── .env