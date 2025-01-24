import React from 'react'
import uploadImage from "../asset/et_upload.png"
const VideoManagement = () => {
  return (
    <div>
     <div className="user-list">
        {/* Header for the table */}
        <h4 style={{textAlign:"start", fontWeight:"bold", marginBottom:"40px"}}>Video Managment </h4>

        <div>
          <img  src={uploadImage} alt='uploadimage'/>
          <h4>Drag and  Drop Video to Upload</h4>
        </div>
       
      </div>
    </div>
  )
}

export default VideoManagement
