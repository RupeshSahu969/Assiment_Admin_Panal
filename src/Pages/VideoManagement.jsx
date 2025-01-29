import React, { useState } from "react";
import uploadImage from "../asset/et_upload.png";

const VideoManagement = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      console.log("Selected File:", file);
    }
  };

  
  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      setSelectedFile(file);
      console.log("Dropped File:", file);
    }
  };

  
  const handleDragOver = (event) => {
    event.preventDefault();
  };


  const handleUpload = () => {
    if (selectedFile) {
      console.log("Uploading File:", selectedFile);
      alert(`File "${selectedFile.name}" uploaded successfully.`);
    } else {
      alert("No file selected.");
    }
  };

  return (
    <div>
      <div className="user-list">
        <h4
          style={{
            textAlign: "start",
            fontWeight: "bold",
            marginBottom: "40px",
          }}
        >
          Video Management
        </h4>
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          style={{
            border: "2px dashed #ccc",
            borderRadius: "10px",
            padding: "20px",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          <img
            src={uploadImage}
            alt="Upload"
            style={{ width: "80px", marginBottom: "10px" }}
          />

          <p style={{ color: "#888" }}>or</p>
          <input
            type="file"
            accept="video/*"
            onChange={handleFileChange}
            style={{ display: "inline-block" }}
          />
        </div>
        {selectedFile && (
          <div style={{ marginBottom: "20px" }}>
            <strong>Selected File:</strong> {selectedFile.name}
          </div>
        )}
        <h4>Drag and Drop Video to Upload</h4>
        <button
          onClick={handleUpload}
          className="btn btn-primary"
          style={{ display: "block", marginTop: "20px" }}
        >
          Upload Video
        </button>
      </div>
    </div>
  );
};

export default VideoManagement;
