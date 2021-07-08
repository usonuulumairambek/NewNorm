import React, { useEffect } from "react"
import "./Operator.css"
import Carousel from "react-bootstrap/Carousel"
import img1 from "./Rectangle 13.png"
import img2 from "./Rectangle 14.png"
import img3 from "./Rectangle 15.png"
import img4 from "./Rectangle 16.png"
import Aos from "aos"
import "aos/dist/aos.css"
export default function Operator() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div data-aos="fade-down" className="markirovkaAbout operator">
      <div className="markirovkaAbout_wrapper">
        <div className="markirovkaAbout_info">
          <div className="markirovkaAbout_info_title">
            ОФД - оператор фискальных данных
          </div>
          <div className="markirovkaAbout_info_desc">
            ОФД - НН обеспечивает удобный и надежный сервис обработки и передачи
            фискальных данных, систематизирует хранение данных.
          </div>
          <div className="markirovkaAbout_info-btn">
            <a
              href="http://lk.norma.kg/"
              target="_blank"
              className="about_btn markirovkaAbout_btn operator_btn"
            >
              Подключить
            </a>
          </div>
          <div className="operator_warning">В разработке</div>
        </div>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={img2} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img3} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img4} alt="First slide" />
          </Carousel.Item>
        </Carousel>
        {/* <div className="operator_img">
           </div> */}
      </div>
    </div>
  )
}
