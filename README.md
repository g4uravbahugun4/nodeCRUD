To run the application locally just run the command
 npm install
 npm start or node server.js
 If running locally , The API will be accessible at http://localhost:{port}. The port will the the port your machine uses

API doc:
    Add a book
    Endpoint: /add-book
    HTTP Method: POST
    Usage: Add a new book to the database.
    Payload: Title,Author,Summary (All required)
    Request Body: Send a JSON object with book details (Title, Author, Summary).

    Edit a Book
    Endpoint: /edit-book/:id
    HTTP Method: PUT
    Usage: Update an existing book's details.
    Request URL Parameter: id - The unique ID of the book you want to update.
    Payload : Field which you want to edit  (Title , Author or Summary)
    Request Body: Send a JSON object with the updated book details (Title or Author or Summary).You can send any permutations of these three

    Delete a Book
    Endpoint: /delete/:id
    HTTP Method: DELETE
    Usage: Delete a book from the database.
    Request URL Parameter: id - The unique ID of the book you want to delete.   

    Get All Books
    Endpoint: /all-books
    HTTP Method: GET
    Usage: Retrieve a list of all books in the database.

    Get a Book by ID
    Endpoint: /book/:id
    HTTP Method: GET
    Usage: Retrieve a specific book by its unique ID.
