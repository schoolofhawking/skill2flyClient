import React, { useState, useRef, useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'

export default function ProfilePicture() {
  const userData = useSelector(state => state.userData)
  const profileData = useSelector(state => state.profileData)

  const [upImg, setUpImg] = useState();
  const imgRef = useRef(null);
  const previewCanvasRef = useRef(null);
  const [crop, setCrop] = useState({ unit: '%', width: 30, aspect: 16 / 9 });
  const [completedCrop, setCompletedCrop] = useState(null);
  const [show, setShow] = useState(false);
  const [fileName, setFileName] = useState()

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function generateDownload(canvas, crop) {
    if (!crop || !canvas) {
      return;
    }

    canvas.toBlob(
      (blob) => {
        // const previewUrl = window.URL.createObjectURL(blob);
        // const anchor = document.createElement('a');
        // anchor.download = 'cropPreview.png';
        // anchor.href = URL.createObjectURL(blob);
        // anchor.click();
        //window.URL.revokeObjectURL(previewUrl);

        let formData = new FormData();
        formData.append("image", blob, fileName);

        axios({
          url: process.env.REACT_APP_SERVER + "/updateProfilePic",
          method: 'POST',
          headers: {
            'Content-Type': 'multipart/form-data',
            authorization: "Bearer " + userData.userJwt,
          },
          data: formData
        }).then(response => {
          handleClose()
          alert(response.data.message)
        });
      },
      'image/png',
      1
    );
  }

  const onSelectFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener('load', () => setUpImg(reader.result));
      handleShow()
      reader.readAsDataURL(e.target.files[0]);
      console.log('filelelel', e.target.files[0])
      setFileName(e.target.files[0].name)
    }
  };

  const onLoad = useCallback((img) => {
    imgRef.current = img;
  }, []);

  useEffect(() => {
    if (!completedCrop || !previewCanvasRef.current || !imgRef.current) {
      return;
    }

    const image = imgRef.current;
    const canvas = previewCanvasRef.current;
    const crop = completedCrop;

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const ctx = canvas.getContext('2d');
    const pixelRatio = window.devicePixelRatio;

    canvas.width = crop.width * pixelRatio * scaleX;
    canvas.height = crop.height * pixelRatio * scaleY;

    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = 'high';

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width * scaleX,
      crop.height * scaleY
    );
  }, [completedCrop]);

  return (
    <>
      <div className="col-lg-3">
        <div className="teacher-profile">
          <div className="teacher-thumb">
            <div className="profile_wrap">
              <img className="profile_img" src="assets/images/home2/teacher/1.png" alt="" />
              <label for="profilePic" style={{ paddingTop: "50%" }} className="profile_file" ><i id="postIcon" style={{ fontSize: "xx-large" }} className="far fa-file-image"></i></label>
              <input onChange={onSelectFile} type="file" id="profilePic" name="profilePic" style={{ display: "none" }}></input>
            </div>

          </div>

          {/* <button
            type="button"
            disabled={!completedCrop?.width || !completedCrop?.height}
            onClick={() =>
              generateDownload(previewCanvasRef.current, completedCrop)
            }
          >
            Download cropped image
          </button> */}
          <div className="teacher-meta">
            {profileData.profileEnable === true ? <h5>{profileData.profileName}</h5> : <h5>{userData.userName}</h5>}
            <p>{profileData.profileDesignation == '-' ? 'My Designation' : profileData.profileDesignation}</p>
          </div>
          <p>
            Cup of char skive off bodge bobby blower tickety-boo quaint a blinding shot pear shaped squiffy harry, young delinquent grub so I said cuppa faff about bum bag bugger.
          </p>
          <div className="ab-social">
            <h5>Follow Us</h5>
            <a className="fac" href="#"><i className="social_facebook" /></a>
            <a className="twi" href="#"><i className="social_twitter" /></a>
            <a className="you" href="#"><i className="social_youtube" /></a>
            <a className="lin" href="#"><i className="social_linkedin" /></a>
          </div>
          {/* <Button variant="primary" onClick={handleShow}>
            Launch demo modal
          </Button> */}
        </div>
      </div>

      <Modal show={show} centered>
        <Modal.Header closeButton>
          <Modal.Title>Crop your picture</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="cropContainer">
            <ReactCrop
              src={upImg}
              onImageLoaded={onLoad}
              crop={crop}
              onChange={(c) => setCrop(c)}
              onComplete={(c) => setCompletedCrop(c)}
            />
            <div style={{ display: "none" }}>
              <canvas
                ref={previewCanvasRef}
                // Rounding is important so the canvas width and height matches/is a multiple for sharpness.
                style={{
                  width: Math.round(completedCrop?.width ?? 0),
                  height: Math.round(completedCrop?.height ?? 0)
                }}
              />
            </div>          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() =>
            generateDownload(previewCanvasRef.current, completedCrop)
          }>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
