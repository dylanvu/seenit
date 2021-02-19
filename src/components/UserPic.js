import React from "react";
import ReactDOM from "react-dom";
//import "./styles.css";   This gives an error, we don't have a style.css
//put styling in App.css or create another file for cleaner code
// No need for import if you do that. Assign a class name
function UserPic() {
    const uploadedImage = React.useRef(null);
    const imageUploader = React.useRef(null);

    const handleImageUpload = e => {
        const [file] = e.target.files;
        if (file) {
            const reader = new FileReader();
            const { current } = uploadedImage;
            current.file = file;
            reader.onload = e => {
                current.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        }}>
        <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            ref={imageUploader}
            style={{ display: "none"}}
        />
        <div style={{
                height: "60px",
                width: "60px",
                border: "2px dashed black"
            }}>
            <img style={{
                width: "100%",
                height: "100%",
                position: "absolute"
            }}/>
        </div>
        Username
    </div>
    );
}

export default UserPic