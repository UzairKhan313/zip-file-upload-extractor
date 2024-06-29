# **Zip File Uploader and Extractor**

## **Overview**

This application allows users to upload a zip file, which is then accepted by a Node.js server and extracted to a specified directory.

## **Features**

- **Zip File Upload**: Users can upload a zip file to the server using a simple web interface.
- **Server-side Extraction**: The Node.js server extracts the uploaded zip file to a specified directory.
- **Easy to Use**: No technical expertise required to use the application.

## **Getting Started**

### Prerequisites

- Node.js installed on your system
- A web browser (e.g. Google Chrome, Mozilla Firefox)

### Running the Application

1. Clone this repository to your local machine using `git clone https://github.com/UzairKhan313/zip-file-upload-extractor.git`
2. Install the required dependencies using `npm install` on both directory frontend and backend.
3. Start the server using `npm run server`
4. Open a web browser and navigate to `http://localhost:5173`
5. Click on the "Upload Zip File" button and select the zip file you want to upload
6. The server will extract the zip file to a specified directory

## **Technical Details**

- The application uses the `express` framework to handle HTTP requests and responses.
- The `multer` middleware is used to handle multipart/form-data requests and extract the uploaded zip file.
- The `adm-zip` library is used to extract the zip file to a specified directory.

## **License**

This application is licensed under the MIT License. See [LICENSE](LICENSE) for details.

## **Contributing**

Contributions are welcome! If you'd like to contribute to this project, please fork the repository and submit a pull request.

## **Issues**

If you encounter any issues while using this application, please report them in the [Issues](issues) section of this repository.
