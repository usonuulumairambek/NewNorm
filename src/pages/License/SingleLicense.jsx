import Modal from "./Modal/Modal"
import React from "react"

const SingleLicense = ({
  showModal,
  setShowModal,
  url,
  title,
  text,
  modalImg,
  setModalImg,
}) => {
  const openShowModal = () => {
    setShowModal(true)
    setModalImg(url)
  }

  return (
    <div className="single__license">
      <img
        onClick={openShowModal}
        src={url}
        alt="license"
        className="single__img"
      />
      <Modal showModal={showModal} setShowModal={setShowModal} img={modalImg} />

      <div className="single__header">
        <div className="single__title license-small-text">{title}</div>
        <div className="single__text license-small-text">{text}</div>
      </div>
    </div>
  )
}

export default SingleLicense
