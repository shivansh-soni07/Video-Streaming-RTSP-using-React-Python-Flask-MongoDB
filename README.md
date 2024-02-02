 ---
# API Documentation

This documentation provides a detailed overview of the different API endpoints (CRUD) used in the application to manage overlays, including request and response details for each endpoint.

## Base URL

`http://localhost:5001`

**Replace `<id>` in URL with unique id of overlay**
 ## Endpoints 

 ### CRUD Operations 

 #### GET Endpoints 

 ##### Retrieve all overlays: 

 **URL:** `/overlay/all`
* **Method:** GET
* **Request:** None
* **Response:**
    * Status: 200 OK
    * Content: JSON array of all overlays


##### Retrieve text overlays:

 **URL:** `/overlay/txt`
* **Method:** GET
* **Request:** None
* **Response:**
    * Status: 200 OK
    * Content: JSON array of overlays with type "text"
 

##### Retrieve image overlays:

 **URL:** `/overlay/img`
* **Method:** GET
* **Request:** None
* **Response:**
    * Status: 200 OK
    * Content: JSON array of overlays with type "image"
 

#### POST Endpoint

##### Create a new overlay:

**URL:** `/overlay/post`
* **Method:** POST
* **Request:**
    * Content-Type: application/json
    * Body: JSON object containing overlay data
 
* **Response:**
    * Status: 201 Created
    * Content: `{"message": "Overlay Created", "id": "625f5f54a954a3XXXXXXX"}`

#### PUT Endpoint

##### Update an existing overlay:

 **URL:** `/overlay/update/<id>`
* **Method:** PUT
* **Request:**
    * Content-Type: application/json
    * Body: JSON object containing updated overlay data
 
* **Response:**
    * Status: 200 OK
    * Content: `{"message": "Overlay Updated", "modified_count": <mod_count>}`

#### DELETE Endpoint

##### Delete an overlay:

 **URL:** `/overlay/delete/<id>`
* **Method:** DELETE
* **Request:** None
* **Response:**
    * Status: 200 OK
    * Content: `{"message": "Overlay Deleted", "deleted_count": <del_count>}`

## Additional Information

#### Server Status:

**URL:** `/`
* **Method:** GET
* **Response:**
    * Status: 200 OK
    * Content: "Server is Running"
