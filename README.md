 ---
# API Documentation

This documentation provides a detailed overview of the different API endpoints (CRUD) used in the application to manage overlays, including request and response details for each endpoint.

## Base URL

`http://localhost:5001`

**Replace `<id>` in URL with unique id of overlay**
 ## Endpoints 

 ## CRUD Operations 

 ### GET Endpoints 

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
 

### POST Endpoint

##### Create a new overlay:

**URL:** `/overlay/post`
* **Method:** POST
* **Request:**
    * Content-Type: application/json
    * Body: JSON object containing overlay data
 
* **Response:**
    * Status: 201 Created
    * Content: `{"message": "Overlay Created", "id": "625f5f54a954a3XXXXXXX"}`

### PUT Endpoint

##### Update an existing overlay:

 **URL:** `/overlay/update/<id>`
* **Method:** PUT
* **Request:**
    * Content-Type: application/json
    * Body: JSON object containing updated overlay data
 
* **Response:**
    * Status: 200 OK
    * Content: `{"message": "Overlay Updated", "modified_count": <mod_count>}`

### DELETE Endpoint

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

 
 ---
# User Documentation

This documentation provides a complete overview on how to use and setup the application for seamless video streaming using rtsp video url and manage overlays  over the live stream in the application.

[//]: # (This comment will be hidden in the rendered README)

**Table of Contents**

- [Introduction](#introduction)
- [Getting Started](#getting-started)
- [Adding Overlays](#adding-overlays)
- [Modifying Overlays](#modifying-overlays)
- [Removing Overlays](#removing-overlays)

# Content:

## 1. Introduction<a name="introduction"></a>
This application allows us to play live video stream using RTSP url. Users can also add different overlays on the live stream on any position they want. Overlays can be a text or an image. User have full control over overlays , they can delete , update or add any number of overlays they want.

## 2. Getting Started<a name="getting-started"></a>
- **Landing Page** - Upon startup, you will find a default RTSP livestream playing, with another available for reference.
- **Connect your Stream** - Locate the dedicated section for entering the RTSP URL of your desired video stream. You can even reset the URL at any time.

## 3. Adding Overlays<a name="adding-overlays"></a>
- **Start Overlaying:**  Head to the "Add Overlay" section within the app.
- **Pick your Style:** Choose the type of overlay you prefer, be it text or image.
- **Create your Overlay:** Input your desired text, image URL, and personalize positioning, size, and content.
- **Save & Display:** Confirm your creation to showcase the new overlay.

 
## 4. Modifying (Update) Overlays<a name="modifying-overlays"></a>
- **Refine your Overlays:** Access the "Overlays" section to see all current overlays.
- **Select & Edit:** Click the edit icon next to the overlay you want to adjust.
- **Make Changes:** Modify position, size, content, or any other aspect of the overlay.
- **Save & Update:** Confirm your changes to reflect them on the live stream.

## 5. Removing (Delete) Overlays<a name="removing-overlays"></a>
- **Clean Up:** Go to the "Overlays" section to manage your existing overlays.
- **Select & Delete:** Click the bin icon next to the overlay you wish to remove.

