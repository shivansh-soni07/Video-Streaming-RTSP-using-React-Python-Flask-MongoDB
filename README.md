 **# API Documentation**

**## Base URL**

`http://localhost:5001`

**## Endpoints**

**### CRUD Operations**

**#### GET Endpoints**

* **Retrieve all overlays:**
    * URL: `/overlay/all`
    * Method: GET
    * Response: JSON array of all overlays
* **Retrieve text overlays:**
    * URL: `/overlay/txt`
    * Method: GET
    * Response: JSON array of overlays with type "text"
* **Retrieve image overlays:**
    * URL: `/overlay/img`
    * Method: GET
    * Response: JSON array of overlays with type "image"

**#### POST Endpoint**

* **Create a new overlay:**
    * URL: `/overlay/post`
    * Method: POST
    * Request Body: JSON object containing overlay data (e.g., `{"type": "text", "content": "Hello, world!"}`)
    * Response: JSON object with a success message and the ID of the created overlay

**#### PUT Endpoint**

* **Update an existing overlay:**
    * URL: `/overlay/update/<id>`
    * Method: PUT
    * Request Body: JSON object containing updated overlay data
    * Response: JSON object with a success message and the number of modified documents

**#### DELETE Endpoint**

* **Delete an overlay:**
    * URL: `/overlay/delete/<id>`
    * Method: DELETE
    * Response: JSON object with a success message and the number of deleted documents

**## Additional Information**

* **Server Status:**
    * URL: `/`
    * Method: GET
    * Response: "Server is Running" (status code 200)
