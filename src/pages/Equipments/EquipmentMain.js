import React from "react"
import { BrowserRouter, NavLink, Route } from "react-router-dom"
import ControlTech from "./Parts/ControlTech"
import Prom from "./Parts/Prom"
import Scanners from "./Parts/Scanners"
import Printers from "./Parts/Printers"
import Terminals from "./Parts/Terminals"
import img1 from "../../components/Staffs/phone.jpg"
import img2 from "../../components/Staffs/printer.jpg"
import img3 from "../../components/Staffs/scaner.jpg"
import img7 from "./images/7.png"
import img8 from "./images/9.png"
import img9 from "./images/10.png"
import img10 from "./images/11.png"
import img12 from "./images/13.png"
import img15 from "./images/16.jpg"
import brisklyImg from "./images/briskly.jpeg"
import urovo40 from "./images/urovo40.jpg"
import urovo30 from "./images/urovo30.jpg"
import printerTSC from "./images/printerTSC.jpg"
import port600 from "./images/port600.jpg"
import scan1 from "./images/scan1.jpg"
import scan2 from "./images/scan2.jpg"
import toshiba from "./images/toshiba.jpg"
import urovo600 from "./images/urovo600.jpg"
import urovo700 from "./images/urovo700.jpg"
import rashod1 from "./images/rashod1.jpg"
import rashod2 from "./images/rashod2.png"
import rashod3 from "./images/rashod3.jpg"
import rashod4 from "./images/rashod4.jpg"
import rashod5 from "./images/rashod5.jpg"
import rashod6 from "./images/rashod6.jpg"
import Rashod from "./Parts/Rashod"

export default function EquipmentMain({
  equipmentSection,
  setEquipmentSection,
}) {
  const staffs1 = [
    {
      title: "Urovo DT50",
      desc: `ТЕРМИНАЛ СБОРА ДАННЫХ UROVO DT50 / DT50-SH3S9E4F00 / ANDROID 9.0 / 1.4 GHZ / 8ХCORE, CORTEX A53 / QUALCOMM SD 450 / RAM 2 GB / ROM 16 GB / HONEYWELL N6603 / 2D IMAGER / 5.7" / 720 X 1440 / 2G / 4G (LTE) / BLUETOOTH / GPS / GSM / WI-FI / 4300 MAH / NFC / СЕНСОР ОТПЕЧАТКА / IP 67 / 250 G / 6 КЛАВИШ`,
      image: img1,
      section: "scanner",
    },
    {
      title: "Urovo DT30",
      desc:
        'ТЕРМИНАЛ СБОРА ДАННЫХ UROVO DT30 / DT30-AZ2S9E4000 / ANDROID 9.0 / 2D IMAGER / ZEBRA SE4710 (SOFT DECODE) / BLUETOOTH / WI-FI / GSM / 2G / 4G (LTE) / 4G (LTE) / GPS / NFC / RAM 2 GB / ROM 16 GB / ВОСЬМИЯДЕРНЫЙ / OCTA-CORE 1.4GHZ / 3.2" / 480 X 320 / 32 КЛАВИШИ / 4500MAH / 280 G / IP 67',
      image: urovo30,
    },
    {
      title: "UROVO DT40",
      desc:
        'ТЕРМИНАЛ СБОРА ДАННЫХ UROVO DT40 / DT40-SU3S9E4010 / ANDROID 9.0 / 1.8 GHZ / 8ХCORE, CORTEX A53 / QUALCOMM SD 450 / RAM 2 GB / ROM 16 GB / UROVO SE2030 / 2D IMAGER / 4.0" / 480 X 800 / 2G / 4G (LTE) / BLUETOOTH / GPS / GSM / WI-FI / 4500MAH / NFC / IP 67 / 240 G / 24 КЛАВИШИ',
      image: urovo40,
    },
  ]
  const staffs2 = [
    {
      title: "IDZOR 9750BT 2D",
      desc: `CКАНЕР ШТРИХ-КОДОВ IDZOR 9750BT 2D BLUETOOTH C ПОДСТАВКОЙ POGO PIN / ID9750BT-2D / BLUETOOTH / 2D IMAGE / USB / IP 43 / ДЛЯ ЕГАИС`,
      image: img3,
    },
    {
      title: "IDZOR 2200S 2D",
      desc: `CКАНЕР ШТРИХ-КОДОВ IDZOR 2200S 2D СКАНЕР (ПРОВОДНОЙ) / ID2200S-2D / COM (RS-232) / 2D IMAGE / USB / IP 43 / ДЛЯ ЕГАИС / C ФУНКЦИИЕЙ АВТОМАТИЧЕСКОГО СКАНИРОВАНИЯ В РЕЖИМЕ СНА`,
      image: scan1,
    },
    {
      title: "IDZOR 9800 2D",
      desc: `CКАНЕР ШТРИХ-КОДОВ IDZOR 9800 2D BLUETOOTH / C ПОДСТАВКОЙ / ID9800BT-2D / 2D IMAGE / USB / IP 54 / ДЛЯ ЕГАИС / BLUETOOTH`,
      image: scan2,
    },
  ]
  const staffs3 = [
    {
      title: "TSC ML340P",
      desc:
        "Термопринтер этикеток TSC память 64Mb/128Mb качество печати 300 dpi скорость печати 127 мм/с ширина печати до 105,7 мм, интерфейс USB,RS-232, Ethernet,USB-Host. LCD. С отделителем этикеток.",
      image: printerTSC,
    },
    {
      title: "Принтер печати на этикетках Printronix 8000",
      desc: `Печатает уникальные коды на самоклеящихся этикетках.`,
      image: img10,
    },
    {
      title:
        "Принтер печати на этикетках Printronix 8000Термопринтер этикеток Toshiba B-EX4D2",
      desc: `Недорогой принтер, обладающий высоким качеством печати и большой производительностью.`,
      image: toshiba,
    },
    {
      title: "Станция агрегации АР-10С. Линия М.",
      desc: `Предназначенная для ручной агрегации вторичных упаковок в короба.`,
      image: img12,
    },
    {
      title: "Станция послойной агрегации АР-30. Линия М.",
      desc: `Станция позволяет послойно считывать коды вторичных упаковок, сложенные в короба, а также печатать групповые этикетки на короб.`,
      image: img9,
    },
    {
      title: "АМК-100. Линия М.",
      desc: `Пролистыватель АМК-100 предназначен для автоматической маркировки развернутых коробок, конвертов, мешков, пакетов, этикеток методом прямой печати.`,
      image: img8,
    },
  ]
  const staffs4 = [
    {
      title: "ПОРТ-1000Ф",
      desc: `Касса, которой можно управлять с телефона.
          Встроенный компьютер.*
          Работает на Windows, Android, Linux.`,
      image: img7,
    },
    {
      title: "ПОРТ - 600Ф",
      desc: `Bluetooth / USB / LAN / Денежный ящик / Дисплей покупателя
          В стандартной поставке 1С
          Автоматический отрезчик кассовой ленты`,
      image: port600,
    },
    {
      title: "ПОРТ - 100Ф",
      desc: `3 цвета: классический, черный, голубой.
          Можно подключить любое периферийное устройство.
          Удобна смена кассовой ленты.`,
      image: img15,
    },
    {
      title: "Микромаркет Briskly",
      desc: `Холодильник.

      Модуль Briskly для подключения к платформе.
      
      Электронный замок.
      
      Интеграция в приложение B-Pay.
      
      Оклейка микромаркета в дизайне B-Pay.`,
      image: brisklyImg,
    },
  ]
  const staff5 = [
    {
      title: "UROVO D8000",
      desc: `Термотрансферный принтер UROVO D8000 отличает высокая эргономичность корпуса, простой и понятный для пользователя интерфейс, а также полный набор опций, соответствующих потребностям практически любой области применения.`,
      image: img2,
    },
    {
      title: "UROVO Термо принтер D6000",
      desc: `ПРИНТЕР ПЕЧАТИ ЭТИКЕТОК UROVO D6000 / D6000-A1203U1R0B0W1`,
      image: urovo600,
    },
    {
      title: "UROVO Термотрансферный принтер D7000",
      desc: `ПРИНТЕР ПЕЧАТИ ЭТИКЕТОК UROVO D7000 / D7000-A2203U1R1B1W1`,
      image: urovo700,
    },
  ]
  const staff6 = [
    {
      title: "Этикетки матовые BRADY B-424 101.6мм х 50.8мм brd30246",
      desc: `THT-55-424-1 этикетки, матовая бумага, 101.6х50.8мм, 1000 шт. в рулоне.`,
      image: rashod1,
    },
    {
      title: "UROVO Термо принтер D6000Чековая лента 57х30х12 (1 рулон)",
      desc: `Чековая лента (термо), ширина 57 мм, намотка 30 метров, втулка 12 мм, плотность материала 48 г/кв.м, 200 рулонов в коробке`,
      image: rashod2,
    },
    {
      title:
        "Этикетки полипропиленовые с шинным клеем BRADY 80мм х 44,5мм brdz113",
      desc: `Полипропиленовая этикетка с шинным клеем 80мм х 44,5мм, 1000 шт.`,
      image: rashod3,
    },
    {
      title: "Пластиковые пружины 4,5 мм белые",
      desc: `Пластиковые пружины 4,5 мм белые, 100 штук в упаковке. 21 кольцо. Для переплета 10-20 листов. Формат А4. Минимальный заказ на расходные материалы 2000 рублей!`,
      image: rashod4,
    },
    {
      title: "Evolis лента R2011",
      desc: `Черная монохромная лента, 1000 карт`,
      image: rashod5,
    },
    {
      title:
        "Печатающая термоголовка Argox OS-2130-SB printhead 203dpi 23-80017-001",
      desc: `Печатающая головка для принтера Argox OS-2130-SB / OS-2130DE-SB, 203dpi (34588)`,
      image: rashod6,
    },
  ]
  return (
    <BrowserRouter>
      <div className="equipments-nav_link">
        <div className="equipment__sidebar">
          <div
            className="nav_link-items"
            onClick={() => setEquipmentSection("main")}
          >
            Терминалы сбора данных
          </div>
          <div
            className="nav_link-items"
            onClick={() => setEquipmentSection("scanner")}
          >
            2д сканеры
          </div>
          <div
            className="nav_link-items"
            onClick={() => setEquipmentSection("prom")}
          >
            Промышленное оборудование
          </div>
          <div
            className="nav_link-items"
            onClick={() => setEquipmentSection("control")}
          >
            Контрольно кассовая машина
          </div>
          <div
            className="nav_link-items"
            onClick={() => setEquipmentSection("printer")}
          >
            Принтеры
          </div>
          <div
            className="nav_link-items"
            onClick={() => setEquipmentSection("rashod")}
          >
            Расходные материалы
          </div>
        </div>
        <Route path="/equipments">
          {equipmentSection === "main" && <Terminals data={staffs1} />}
          {equipmentSection === "scanner" && <Scanners data={staffs2} />}
          {equipmentSection === "prom" && <Prom data={staffs3} />}
          {equipmentSection === "control" && <ControlTech data={staffs4} />}
          {equipmentSection === "printer" && <Printers data={staff5} />}
          {equipmentSection === "rashod" && <Rashod data={staff6} />}
        </Route>
      </div>
    </BrowserRouter>
  )
}
