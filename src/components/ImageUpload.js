import React, { useState } from "react";
import axios from "axios";

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageSelect = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setSelectedImage(selectedFile);
    }
  };

  
  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("image", selectedImage);
    formData.append("email", "recipient@example.com");
    formData.append("subject", "Image Attachment");
    formData.append("message", "This email contains an attached image.");

    axios
      .post("127.0.0.1:3000/sendmail", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        console.log("Image sent successfully");
      })
      .catch((error) => {
        
        console.error(error);
      });
    console.log("object");
  };

  
  return (
    <div>
      <input type="file" onChange={handleImageSelect} />
      <button onClick={handleSubmit}>Send Image</button>
    </div>
  );
};

export default ImageUpload;
