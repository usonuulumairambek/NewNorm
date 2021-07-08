import React from "react"
import "./Modal.css"

const Modal = ({ img, showModal, setShowModal }) => {
  const closeShowModal = () => {
    setShowModal(false)
  }

  return (
    <div
      onClick={closeShowModal}
      className={`license__modal ${showModal && "active"}`}
    >
      <div
        className={`license__modal__content ${showModal && "active"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          onClick={closeShowModal}
          className="modal__img"
          src={img}
          alt="license"
        />
      </div>
    </div>
  )
}

export default Modal
