import React, { useState } from "react";


const UploadAndDisplayImage = () => {

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="uploadPhotoDiv">
      {selectedImage && (
        <div>
          <img
            alt={selectedImage.name}
            width={"250px"}
            src={URL.createObjectURL(selectedImage)}
            className='photo'
            id="photo"
          />
          <button onClick={() => setSelectedImage(null)}>Remove</button>
        </div>
      )}
      
      <input
        type="file"
        name="myImage"
        className="imageInput"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      />
    </div>
  );
};

export default UploadAndDisplayImage;