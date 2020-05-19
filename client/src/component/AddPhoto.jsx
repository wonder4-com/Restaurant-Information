import React, {useMemo,useEffect, useState} from 'react';
import styles from '../../dist/style.css';
import {useDropzone} from 'react-dropzone'


const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16,
};

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: 'border-box'
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden'
};

const img = {
  display: 'block',
  width: 'auto',
  height: '100%'
};

const baseStyle = {
  width:'75%',
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out'
};

const activeStyle = {
  borderColor: '#2196f3'
};

const acceptStyle = {
  borderColor: '#00e676'
};

const rejectStyle = {
  borderColor: '#ff1744'
};

const AddPhoto = (props) =>{

  const [files, setFiles] = useState([]);  
  const handleSubmit = () => {
    props.updatePhotoFormStatus();
    $.ajax({
      method: 'POST',
      url: '/restaurant',
      data: JSON.stringify({files: files}),
      contentType: 'application/json',
      success: (data) => {
        console.log('successfully post',data);
        $.ajax({
          method: 'GET',
          url: '/currentRestaurant',
          dataType: 'json',
          success: (data) => {
            console.log('this is my ajax call from write review', data);
            this.props.updateResInfoState(data);
          },
          error: (err) => {
            console.log(err);
          }
        });
      },
      error: (err) => {
        console.log('encounter error' ,err);
      }
    });
  }
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({
    maxSize: 100000000000,
    accept: 'image/*',
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    }
  });
    
  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
        />
      </div>
    </div>
  ));

  useEffect(() => () => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);

  const style = useMemo(() => ({
    ...baseStyle,
    ...(isDragActive ? activeStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isDragActive,
    isDragReject,
    isDragAccept
  ]);


  return (
  // ReactDOM.createPortal(
    <div className ={styles.modal_content_photo}>
      <div className={styles.x_button} onClick={props.updatePhotoFormStatus}>&times;</div>
      <h1 className={styles.photo}>ADD PHOTO</h1>
      <div className = {styles.container}>
      <section>
        <div {...getRootProps({style})}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here, or click to select files</p>
        </div>
        <aside style={thumbsContainer}>
          {thumbs}
        </aside>
      </section>
      </div>
      <button onClick={handleSubmit} className={styles.photoSubmit}>Post Photo</button>
    </div>
  );
}



export default AddPhoto