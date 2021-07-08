import React, { useEffect } from "react"
import "./Equipments.css"
import Aos from "aos"
import "aos/dist/aos.css"
import Modal from "react-modal"
import { useState } from "react"
import useForm from "./useForm"
import validateInfo from "./validate"
import Button from "@material-ui/core/Button"

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  content: {
    top: "53%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
}

Modal.setAppElement("#root")
export default function Equipments(props) {
  const [modalIsOpen, setIsOpen] = useState(false)
  const [selectedProductInfo, setSelectedProductInfo] = useState({})
  const [title, setTitle] = useState(null)
  const { handleChange, values, handleFormSubmit, errors } = useForm(
    title,
    validateInfo,
    closeModal
  )
  const { phone, address, first_name, company } = errors

  var subtitle
  function openModal(title, image) {
    setIsOpen(true)
    setTitle(title)
    setSelectedProductInfo({ productImage: image })
  }
  console.log(title)
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#000"
  }

  function closeModal() {
    setIsOpen(false)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <div className="equipments">
      <div className="equipments_wrapper">
        <div className="equipments_row">
          {props.data.map((item) => (
            <div
              key={item.title}
              data-aos="fade-up"
              className="staffs_cards_item"
            >
              <div className="staffs_cards_item_img">
                <img src={item.image} alt="#" />
              </div>
              <div className="staffs_cards_item_description">
                <div className="staffs_cards_item_title">{item.title}</div>
                <div className="staffs_cards_item_desc">{item.desc}</div>
              </div>
              <div className="staffs_cards_item_btn">
                <Button
                  color="red"
                  variant="contained"
                  color="primary"
                  href="#contained-buttons"
                  className="about_btn staff_card_button"
                  onClick={() => openModal(item.title, item.image)}
                >
                  Заказать
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="modalContent">
            {/* <img
                className="modal_x"
                src="https://timebuild.com.ua/wp-content/themes/profremont/img/no.png"
                alt=""
              /> */}
            <span className="modal_x" onClick={closeModal}>
              &times;
            </span>
            <div className="modal__header-container">
              <h2
                className="modal__title"
                ref={(_subtitle) => (subtitle = _subtitle)}
              >
                Заполните форму и мы свяжемся с Вами
              </h2>
            </div>
            <form>
              {/* Имя */}
              <label>Имя:</label>
              <input
                className="modal__equipment-input"
                type="text"
                name="first_name"
                placeholder="Имя"
                onChange={handleChange}
                value={values.first_name}
              />
              {first_name ? (
                <p className="modal__eqipment-error">{first_name}</p>
              ) : (
                <br />
              )}
              {/* Номер телефона */}
              <label>Номер телефона:</label>
              <input
                className="modal__equipment-input"
                type="text"
                name="phone"
                placeholder="Номер телефона"
                onChange={handleChange}
                value={values.phone}
              />
              {phone ? (
                <p className="modal__eqipment-error">{phone}</p>
              ) : (
                <br />
              )}
              {/* Название компании */}
              <label>Название компании:</label>
              <input
                className="modal__equipment-input"
                type="text"
                name="company"
                placeholder="Название компании"
                onChange={handleChange}
                value={values.company}
              />

              <label>Адрес:</label>
              <input
                className="modal__equipment-input"
                type="text"
                name="address"
                placeholder="Адрес"
                onChange={handleChange}
                value={values.address}
              />
              {address ? (
                <p className="modal__eqipment-error">{address}</p>
              ) : (
                <br />
              )}
              <div>
                Оборудование:
                <span className="modal__equipment-name">{title}</span>
                <img
                  className="modal__image"
                  src={selectedProductInfo.productImage}
                  alt="image"
                />
              </div>
              <button
                className="about_btn modal__equipment-btn"
                type="submit"
                onClick={handleFormSubmit}
              >
                Отправить
              </button>
            </form>
          </div>
        </Modal>
      </div>
    </div>
  )
}
