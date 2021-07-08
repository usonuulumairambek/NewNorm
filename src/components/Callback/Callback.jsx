import React, { useEffect } from "react"
import "./Callback.css"
import Aos from "aos"
import "aos/dist/aos.css"
import "react-toastify/dist/ReactToastify.css"
import { toast } from "react-toastify"
import { useState } from "react"
import { sendCallbackNumber } from "../../pages/api/callbackAPI"

toast.configure()

export default function Callback() {
  const [phoneNumber, setPhoneNumber] = useState("")
  // const [message, setMessage] = useState(null)

  const notify = () => {
      toast.success("Ваш номер успешно отправлен", {
        position: toast.POSITION.BOTTOM_LEFT,
        autoClose: 3000,
      })
    },
    handleSubmit = (e) => {
      e.preventDefault()

      if (phoneNumber) {
        sendCallbackNumber(phoneNumber)
        setPhoneNumber("")
        notify()
      }
    },
    changePhoneNumber = (e) => {
      setPhoneNumber(e.target.value)
    }

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <div data-aos="fade-up" className="callback">
      <div className="callback_wrapper">
        <div className="callback_info">
          <div className="callback_info_title">
            Оставьте свой номер телефона
          </div>
          <div className="callback_info_desc">
            Наши специалисты свяжутся с вами
          </div>
        </div>
        <form className="callback_input" onSubmit={handleSubmit}>
          <input
            type="text"
            name="phone_number"
            placeholder="Ваш номер телефона"
            value={phoneNumber}
            onChange={changePhoneNumber}
          />
          <button className="callback_btn about_btn">Отправить</button>
        </form>
      </div>
    </div>
  )
}

// http://185.29.184.52:3000/api/orders/phone/
// phone_number
