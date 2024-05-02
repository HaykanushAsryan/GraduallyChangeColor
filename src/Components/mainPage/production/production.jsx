import React, { useState } from "react";
import Button from '@mui/material/Button';

const Production =()=>{
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
      const selectedFile = event.target.files[0];
      if (selectedFile) {
        setFile(URL.createObjectURL(selectedFile));
      }
    };
return(
    <div>
   <div>
      <input
        type="file"
        accept="svg"
        onChange={handleFileChange}
        style={{ display: 'none' }}
        id="fileInput"
      />
      <label htmlFor="fileInput">
        <Button variant="contained" component="span">
          Upload File
        </Button>
      </label>
      {file && (
        <img src={file}/>
      )}
    </div>
    </div>
)
}

export default Production