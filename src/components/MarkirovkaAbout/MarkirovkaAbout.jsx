import React, { useEffect } from "react"
import "./MarkirovkaAbout.css"
import Carousel from "react-bootstrap/Carousel"
import img1 from "./pic1.png"
import img2 from "./Rectangle 62.png"
import img3 from "./Rectangle 63.png"
import ref from "../../refToLk.js"
import Aos from "aos"
import "aos/dist/aos.css"

export default function MarkirovkaAbout() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div data-aos="fade-up" className="markirovkaAbout">
      <div className="markirovkaAbout_wrapper">
        <div className="markirovkaAbout_info">
          <div className="markirovkaAbout_info_title">Маркировка</div>
          <div className="markirovkaAbout_info_desc">
            Маркировка - нанесение на упаковку или этикетку сгенерированного
            цифрового кода: электронного точечного двухмерного кода формата Data
            Matrix.
          </div>
          <div className="markirovkaAbout_info_desc">
            Основной целью маркировки товаров является повышение защиты и
            снижение оборота фальсифицированной и контрафактной продукции.
          </div>
          <div className="markirovkaAbout_btn1">
            <a
              href="http://lk.norma.kg/login"
              target="_blank"
              style={{ marginBottom: 20 }}
              className="about_btn markirovkaAbout_btn"
            >
              Подключиться
            </a>
          </div>
        </div>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={img3} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img2} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img1} alt="First slide" />
          </Carousel.Item>
        </Carousel>
        {/* <div className='markirovkaAbout_img'></div> */}
      </div>
    </div>
  )
}
