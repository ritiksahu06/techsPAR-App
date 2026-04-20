

import React from 'react';
import "./ImageModal.css";

const ImageModal = ({ img }) => {
  return (
    <div>

      {/* IMAGE CARD */}
      <div className="img-card position-relative overflow-hidden rounded shadow-lg p-2">

        <img
          src={img}
          alt="preview"
          style={{
            height: "480px",
            width: "100%",
            objectFit: "cover",
            objectPosition: "top"
          }}
        />

        {/* BUTTON ONLY */}
        <button
          type="button"
          className="btn btn-primary preview-btn position-absolute"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Preview
        </button>



      </div>

      {/* MODAL */}
      <div
        className="modal fade mt-5"
        id="exampleModal"
        tabIndex="-1"
        aria-hidden="true"

      >
        <div className="modal-dialog modal-dialog-centered my-5 py-2">
          <div className="modal-content">

            {/* ❌ ONLY CLOSE */}
            <div className="modal-header border-0">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>

            <div className="modal-body text-center">
              <img
                src="./images/Auto-Expo Component-2023.png"
                alt="preview"
                className="img-fluid rounded"
              />
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};


export default ImageModal;