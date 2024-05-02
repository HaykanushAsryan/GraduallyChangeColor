import React from "react";

export const ImageUpload = ({ img, setImg }) => {

    const handleFileChange = (event) => {
        
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            setImg(URL.createObjectURL(selectedFile))
        }
    }

    return (
        <div>
            <button style={{
                width: '27px', height: "27px",
                position: " absolute",
                left: '5px',
                top: '2px',
                background: 'transparent',
                border: ' none',
                outline: 'none',
                cursor: 'pointer'
            }}>
                <input type="file" accept="svg" style={{ width: "27px", height: "27px", opacity: "0", cursor: "pointer" }} onChange={handleFileChange} />
            </button>

        </div>
    )
}

    