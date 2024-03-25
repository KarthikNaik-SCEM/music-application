import { openUploadWidget } from "../utils/CloudinaryService";

const CloudinaryUpload = ({addMusicFile}) => {
  const uploadImageWidget = () => {
    // console.log(props);
    let myUploadWidget = openUploadWidget(
      {
        cloudName: " ",
        uploadPreset: " ",
        sources: ["local"]
      },
      function (error, result) {
        if (!error && result.event === "success") {
            // console.log(result.info.secure_url)
            // setMusicEntry({...musicEntry,"musicfile":result.info.secure_url})
            addMusicFile(result.info.secure_url)
            
        //   props.onImageUpload(result.info.public_id);
        }
        else{
            if(error){
                alert("Could not upload");
                console.log(error);

            }
        }
      }
    );
    myUploadWidget.open();
  };

  return (
    <button className="greenButton" onClick={uploadImageWidget}>
      Upload Music File
    </button>
  );
};

export default CloudinaryUpload;
