import React, { useEffect } from "react"
import "./Footer.css"

import { Link, NavLink, useLocation } from "react-router-dom"

export default function Footer() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const links = [
    {
      href: "https://api.whatsapp.com/send?phone=+996501588882",
      icons: "fab fa-whatsapp",
    },
    { href: "https://www.instagram.com/norma.kg/", icons: "fab fa-instagram" },
    {
      href: "https://www.youtube.com/channel/UCCV0dJ9NpQ2C1X9lLY8fspw",
      icons: "fab fa-youtube",
    },
    { href: "https://t.me/normakg", icons: "fab fa-telegram-plane" },
  ]
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__column">
            <div className="footer__title">
              <Link to="#">Новая Норма</Link>
            </div>
            <div className="footer__links">
              <div className="footer__text">
                Компания разрабатывает и интегрирует программные решения
                информационных систем. Предоставляет профессиональные решения в
                области онлайн-сервис обработки и передачи фискальных данных,
                внедрения цифровой системы маркировки, электронного
                документооборота. Важным направлением работы компании является
                участие в строительстве цифровой ЭКО-системы.
              </div>
            </div>
          </div>

          <div className="footer__column">
            <div className="footer__title">
              <Link to="#">Документы</Link>
            </div>
            <div className="footer__links">
              <NavLink to="/policy">
                <div className="footer__link">
                  Политика обработки персональных данных
                </div>
              </NavLink>
              <div className="footer__link">
                Договор на обработку фиксальных данных
              </div>
              <NavLink to="/license">
                <div className="footer__link">Лицензии и сертификаты</div>
              </NavLink>
              <div className="footer__link">Руководство пользователя</div>
              {/* <div className="footer__link">Описание процессов</div> */}
            
              
            </div>
          </div>

          <div className="footer__column">
            <div className="footer__title">
              <Link to="/contacts">Контакты</Link>
            </div>

            <NavLink to="/about">
              <div style={{ color: "white" }} className="footer__links">
                О нас
              </div>
            </NavLink>
            <div className="footer__links">
              <div className="footer__link">
                Адрес: 720030, г. Бишкек,
                <div style={{ marginTop: 7 }}>улица Баялинова 146</div>
              </div>

              <div className="footer__link">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="tel:+996501588882"
                >
                  +996 501 588 882
                </a>
                - call-center
              </div>

              <div className="footer__link">
                <span>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="tel:+996708700700"
                  >
                    +996 708 700 700
                  </a>
                </span>
              </div>
              <div className="footer__link">
                <span>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="tel:+996312888882"
                  >
                    +996 312 888 882
                  </a>
                </span>
              </div>
              {links.map((item) => (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  key={item.icons}
                  href={item.href}
                  className="footer_links_icons"
                >
                  <i className={item.icons} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <p className="footer__samoedno">
          Лицензия ГАС КР №0062266 рег. №19065-3301-ООО
        </p>
      </div>
    </footer>
  )
}
