import Carousel from "react-bootstrap/Carousel"
import React from "react"
import img1 from "../photos/batken1.jpg"
import img2 from "../photos/batken2.jpg"
import img3 from "../photos/batken3.jpg"
import img4 from "../photos/batken4.jpg"
import img5 from "../photos/batken5.jpg"
import img6 from "../photos/batken6.jpg"

const Batken = () => {
  const images = [img1, img2, img3, img4, img5, img6]
  return (
    <React.Fragment>
      <span className="tittle">Баткен</span>
      <span className="text">
        Село Баткен было образовано в апреле 1934 года, как районный центр
        одноименного Баткенского района. В 1999 году для повышения эффективности
        управления этих земель после ряда нападений боевиков из трёх западных
        районов Ошской области была образована Баткенская область с
        административным центром Баткен. С связи с этим селу Баткен в 2000 году
        был придан статус города, первым мэром города назначен Султанов
        Мамасыдык Мамадиевич. Население села в 2000 году составляло 10 987
        человек. В 2001 году городу были подчинены 3 пригородных села.
      </span>
      <h4>Адрес: Область Баткен, р. Кадамжай, ул. Орозбекова, д. 102</h4>
      <div className="containerForYandexMap">
        <iframe
          title="1"
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Af950eb0d97dbda51c18872447b9ad6aa3c47203d9530b440eec15eb30fdf8c85&amp;source=constructor"
          width="500"
          height="400"
          frameborder="0"
        ></iframe>
      </div>
      <h3>Фото:</h3>
      <Carousel>
        {images.map((item, index) => {
          return (
            <Carousel.Item>
              <img
                className="d-block w"
                key={index}
                src={item}
                alt="First slide"
              />
            </Carousel.Item>
          )
        })}
      </Carousel>
      <h3>Номер: 0553 22 22 30</h3>
    </React.Fragment>
  )
}

export default Batken
