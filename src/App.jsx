import React, { useRef, useState } from 'react';
import s3Client from './Aws.config';

function App() {
  const fileInputRef = useRef(null);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFileChange = () => {
    const file = fileInputRef.current.files[0];
    if (!file) {
      console.error('No file selected');
      return;
    }
    uploadFile(file);
  };

  const uploadFile = async (file) => {
    const fileName = file.name;

    try {
      const uploadParams = {
        Bucket: 'YOUR_BUCKET_NAME',
        Key: fileName,
        Body: file,
      };

      const result = await s3Client.send(new PutObjectCommand(uploadParams));
      console.log('File uploaded successfully:', result);
      setUploadedFiles((prevFiles) => [...prevFiles, fileName]);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  const handleDownload = async (fileName) => {
    try {
      const downloadParams = {
        Bucket: 'YOUR_BUCKET_NAME',
        Key: fileName,
      };

      const objectUrl = await s3Client.getSignedUrlPromise('getObject', downloadParams);
      // Use objectUrl to download the file
      console.log('Downloading file:', fileName);
    } catch (error) {
      console.error('Error downloading file:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold mb-4">Upload File</h2>
      <div className="flex items-center mb-4">
        <input type="file" ref={fileInputRef} onChange={handleFileChange} className="mr-2" />
        <button onClick={handleFileChange} className="px-4 py-2 bg-blue-500 text-white rounded">
          Upload
        </button>
      </div>
      <div className="flex flex-col items-center">
        <h3 className="text-xl font-bold mb-2">Uploaded Files</h3>
        <ul className="list-disc">
          {uploadedFiles.map((fileName) => (
            <li key={fileName} className="flex items-center mb-2">
              <span className="mr-2">{fileName}</span>
              <button
                onClick={() => handleDownload(fileName)}
                className="px-2 py-1 bg-green-500 text-white rounded"
              >
                Download
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
