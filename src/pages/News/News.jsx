import React, { useEffect, useState } from "react"
import putinImg from "./putin.jpg"
import sliderPhoto1 from "./sliderPhoto1.jpg"
import sliderPhoto2 from "./sliderPhoto2.jpg"
import sliderPhoto3 from "./sliderPhoto3.jpg"
import teamSliderPhoto1 from "./teamSliderPhoto1.jpg"
import teamSliderPhoto2 from "./teamSliderPhoto2.jpg"
import teamSliderPhoto3 from "./teamSliderPhoto3.jpg"
import video from "./marking.mp4"
import threeD from "./video/01032021-video_WDfzl0Z4.mp4"
import threeD1 from "./images/01.03.2021-1.jpg"
import threeD2 from "./images/01.03.2021-2.jpg"
import threeD3 from "./images/01.03.2021-3.jpg"
import threeD4 from "./images/01.03.2021-4.jpg"
import dordoi from "./images/dordoi.jpeg"
import dordoi1 from "./images/dordoi1.jpg"
import vyezdpic from "./images/dordoi2.jpg"
import vyezdpic1 from "./images/dordoi3.jpg"
import vyezdintDordoi from "./video/vyezd-int.mp4"
import alatooPic from "./images/ala-too.jpeg"
import alatooPic1 from "./images/ala-too1.jpeg"
import firstmark from "./images/firstmark.jpg"
import oshVideo from "./video/osh-video.mp4"
import forumVideo from "./video/forum.mp4"
import sertificateOsh from "./images/вручениеОш.jpg"
import picMart from "./images/8marta.jpg"
import NewYear from "./images/s-novym-godom.jpg"
import ayima1 from "./images/champ1Ayima.jpg"
import ayima2 from "./images/champ2Ayima.jpg"
import picConKg1 from "./images/conkg1.jpg"
import picConKg2 from "./images/conkg2.jpg"
import PresVideo from "./images/ConnectPresVideo.mp4"
import picCon1 from "./images/connectPres1.jpg"
import picCon2 from "./images/connectPres2.jpg"
import pic18031 from "./images/18.03.jpg"
import pic18032 from "./images/18.03-2.jpg"
import nooruz from "./images/nooruz.jpg"
import pic128032021 from "./images/IMG_1.JPG"
import pic228032021 from "./images/IMG_2.JPG"
import pic328032021 from "./images/IMG_3.JPG"
import pic428032021 from "./images/IMG_4.JPG"
import kgtu from "./images/kgtu.jpg"
import codify1 from "./images/180421.jpg"
import codify2 from "./images/1804211.jpg"
import codify3 from "./images/1804212.jpg"
import codify4 from "./images/1804213.jpg"
import "./News.css"
import "./style.css"
import Aos from "aos"
import "aos/dist/aos.css"
import axios from "axios"
import Card from "./card/Card"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from "react-loader-spinner"
import { getNewNews } from "../api/callbackAPI"

export default function News() {
  const [state, setState] = useState({})
  const [newsContents, setNewsContents] = useState([])
  const urlForImages = "http://185.29.184.52:3000"
  // let time = excel_date.slice(11, 16)

  let dateStateArr,
    sumDateState = []
  useEffect(() => {
    axios
      .get("https://norma-33eab-default-rtdb.firebaseio.com/news.json")
      .then((r) => {
        setState(r.data)
      })

    getNewNews(setNewsContents)

    Aos.init({ duration: 2000 })
    window.scrollTo(0, 0)
  }, [])

  if (Object.keys(state).length > 0 && !!state) {
    dateStateArr = Object.keys(state).map((post) => {
      return state[post].date.split("-")
    })
    dateStateArr.map((date) => {
      let sumNumber = date.reduce((acc, number) => {
        return acc + parseInt(number)
      }, 0)
      sumDateState.push(sumNumber)
    })
    sumDateState.sort((a, b) => {
      return b - a
    })
  }
  useEffect(() => {
    axios
      .get("https://norma-33eab-default-rtdb.firebaseio.com/news.json")
      .then((r) => {
        setState(r.data)
      })
  }, [])

  return (
    <div className="news">
      <div data-aos="fade-up" className="news_title">
        Новости
      </div>
      <div className="news__content">
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000}
        />
        {state !== null
          ? Object.keys(state).map((item) => (
              <Card data={state[item]} id={item} key={item} />
            ))
          : null}

        {newsContents
          .map((news) => {
            const { created_date, date, title, text, id, images } = news
            const year = created_date.slice(0, 4)
            const month = created_date.slice(5, 7)
            const day = created_date.slice(8, 10)
            const dateInNews = date ? date : `${day}.${month}.${year}`

            let newsSeperatedText = text.split("|newline")
            let newsSeperatedImages = [...images]

            debugger
            return (
              <React.Fragment key={id}>
                <div className="news__item">
                  <span className="news__date">{dateInNews}</span>
                  <p className="news__title">{title}</p>
                  <div className="news__line news__line-1" />
                  <span className="news__info">
                    {newsSeperatedText.map((text) => {
                      if (text.includes("|img")) {
                        let imageAfterText = text.split("|img")

                        return (
                          <React.Fragment>
                            {imageAfterText
                              // .filter((text) => !!text)
                              .map((textWithImg, index, arr) => {
                                let imageAfterThisText
                                newsSeperatedImages[0] &&
                                  newsSeperatedImages[0].image &&
                                  (imageAfterThisText =
                                    newsSeperatedImages[0].image)
                                newsSeperatedImages.shift()
                                return (
                                  <React.Fragment>
                                    <p className="news__paragraphs-text">
                                      {textWithImg}
                                    </p>
                                    {index !== arr.length - 1 && (
                                      <img
                                        src={`${urlForImages}${imageAfterThisText}`}
                                        alt="pic"
                                      />
                                    )}
                                  </React.Fragment>
                                )
                              })}
                          </React.Fragment>
                        )
                      } else if (text.includes("|moreImg")) {
                        let changedtext = text.split("|moreImg")
                        return (
                          <React.Fragment>
                            {changedtext[0] && (
                              <p className="news__paragraphs-text">
                                {changedtext[0]}
                              </p>
                            )}
                            {images.map((content) => {
                              return (
                                <React.Fragment>
                                  {content.image && (
                                    <div
                                      className={`news__mtop ${
                                        images.length > 1 && "news__pic"
                                      }`}
                                    >
                                      <img
                                        src={`${urlForImages}${content.image}`}
                                        alt="pic"
                                      />
                                    </div>
                                  )}
                                </React.Fragment>
                              )
                            })}
                          </React.Fragment>
                        )
                        // return <p className="news__paragraphs-text">{text}</p>
                      } else {
                        return (
                          <React.Fragment>
                            {text && (
                              <p className="news__paragraphs-text">{text}</p>
                            )}
                          </React.Fragment>
                        )
                      }
                    })}
                  </span>

                  <div className="news__line news__line-2" />
                </div>
              </React.Fragment>
            )
          })
          .reverse()}

        {/* {newsContents.map((news) => {
          const { created_date, title, id, images } = news

          return (
            <React.Fragment key={id}>
              <div className="news__item">
                <span className="news__date">{created_date}</span>
                <p className="news__title">{title}</p>
                <div className="news__line news__line-1" />
                <span className="news__info">
                  {images.map((content) => {
                    return (
                      <React.Fragment>
                        {content.text && <p>{content.text}</p>}
                        {content.image && (
                          <div className={`news__mtop ${0 > 1 && "news__pic"}`}>
                            <img
                              src={`${urlForImages}${content.image}`}
                              alt="pic"
                            />
                          </div>
                        )}
                      </React.Fragment>
                    )
                  })}
                </span>
                <div className="news__line news__line-2" />
              </div>
            </React.Fragment>
          )
        })} */}

        <div data-aos="fade-up" className="news__item">
          <span className="news__date">{Date}</span>
          <span classNa me="news__date">
            26.03.2021
          </span>
          <p className="news__title">
            «Наука, техника и инженерное образование в эпоху цифровизации и
            глобализации»
          </p>
          <div className="news__line news__line-1" />
          <span className="news__info">
            <p>
              25-26 марта 2021 года Генеральный директор Группы компании «Новая
              Норма» - Рамил Беков и Бегимбай Алишов – председатель
              Общественного фонда «Центр развития инноваций» (ЦРИ) приняли
              участие в 63-ей по счету Международной сетевой научно-техническая
              конференции молодых ученых, аспирантов, магистрантов и студентов
              «Наука, техника и инженерное образование в эпоху цифровизации и
              глобализации». Мероприятие проходило на базе Кыргызского
              государственного технического университета им И. Раззакова.
              <br />
              <br />В программе конференции были выступления, доклады
              преподавателей и студентов ВУЗа относительно развития Кыргызстана
              в условиях глобальной цифровизации, использования
              IT-информационных систем в различных секторах экономики,
              автоматизации управления документооборотом и т.д. Также в рамках
              конференции была организована выставка научно-технических
              разработок студентов ВУЗа.
              <img src={pic128032021} alt="pic" />
              <br />
              <br />
              Отметим, что участие двух партнерских организаций: ГК «Новая
              Норма» и Центр развития инноваций в данной конференции далеко не
              случайно, вместе с КГТУ им.Раззакова они ведут совместную работу
              по подготовке и переподготовке кадров в области информационных
              технологий.
              <br />
              <br />В настоящее время на базе «Новой Нормы» и Центр развития
              инноваций , студенты ВУЗа проходят производственную практику, и
              таким образом, получают уникальную возможность претворить
              получаемые теоритические знания на практике.
              <div className="news__pic">
                <img src={pic228032021} alt="pic" />
                <img src={pic328032021} alt="pic" />
              </div>
              <br />
              <br />
              Все стороны объединяет единая задача, направленная на обеспечение
              рынка труда профессиональными кадрами в области программирования,
              что весьма актуально в условиях глобализации цифровых технологий.
              <br />
              <br />
              Двухдневная конференция завершилась награждением лучших
              студентов-докладчиков. Денежные вознаграждения вручил Бегимбай
              Алишов, Президент Общественного фонда “Центр развития инноваций” и
              Рамил Беков, Генеральный директор ГК “Новая Норма”.
              <br />
              <img src={pic428032021} alt="pic" />
              <br />
              Список награжденных:
              <br />
              1. – Джунусалиев Н.Д., студент группы ПЗИ(б)-1-18, тема доклада:
              «Кыргыз Республикасын санариптештирүү көйгөйлөрү», руководитель
              Бакытов Р.Б.;
              <br />
              2. – Турсунбекова С.Т., студент группы РТ(б)-1-19, тема доклада:
              «Сравнительный анализ платформ реализации дистанционного обучения
              (улучшение методологии дистанционного преподавания)», руководитель
              Жумабаева Ж.М.;
              <br />
              3. – Имамидинов А.Б., студент группы ПЗИ(б)-1-20, тема доклада:
              «Особенности создания компьютерных игр в среде Python»,
              руководитель Каримова Г.Т.;
              <br />
              4. – Исаков Амантур, студент группы ИБ(б)-1-17, тема доклада:
              «Разработка веб – приложения», руководитель Келдибекова А.К.;
              <br />
              5. – Насыпбекова Т.Т., студент группы СССК(б)-1-18, тема доклада:
              «Варианты использования IoTв сельском хозяйстве КР», руководитель
              Ванюков А.Ю.;
              <br />
              6. – Мирбакиева З.А., студент группы ИСТТ(б)-1-17, тема доклада:
              «Программное средство проверки алгоритма на уникальность»,
              руководитель Тойбаева Ж.Д.;
              <br />
              7. – Куренкиев Т.Д., студент группы ИСТТ(б)-1-18, тема доклада:
              «Информационная система для создания музыкальных ритмов Drum pad»,
              руководитель Тойбаева Ж.Дж.
              <br />
              8. –Шестова Ю, магистрант группы ССМ-1-29, тема доклада: «Оценка
              соответствия товаров как барьер контрафакта», руководитель
              Мырзалиева Н.О.;
              <br />
              9. –Сабыржанова Эркинай, магистрант Санкт-Петербургского
              политехнического университета, РФ, тема доклада:
              «Автоматизированные системы обработки технических данных конечного
              Интернет-пользователя», руководитель к.т.н., Скулябина О.В.;
              <br />
              10. – Корниенко А.В. студент группы ИВТ(б)-1-17, тема доклада:
              «Разработка автоматизированной системы управления внутренним
              документооборотом», руководитель ст.пр. Шаршеева К.Т.
            </p>
          </span>
          <div className="news__line news__line-2" />
        </div>

        <div data-aos="fade-up" className="news__item">
          <span className="news__date">21.03.2021</span>
          <p className="news__title">С праздником Нооруз !</p>
          <div className="news__line news__line-1" />
          <span className="news__info">
            <p>
              Дорогие кыргызстанцы, примите наши самые теплые 🥰🥰поздравления с
              праздником -Нооруз! Пусть этот прекрасный праздник весны
              🌷🌺🌸подарит нам надежду и веру в светлое будущее нашей Родины,
              счастье и удачу, любовь ❤️ в сердцах и много радостных событий! С
              наилучшими пожеланиями,🥰🙏 команда ГК "Новая Норма"
            </p>
            <img src={nooruz} alt="pic" />
          </span>
          <div className="news__line news__line-2" />
        </div>

        <div className="news__item">
          <span className="news__date">18.03.2021</span>
          <p className="news__title">В Кыргызстане пройдет IT-форум</p>
          <div className="news__line news__line-1" />
          <span className="news__info">
            <p>
              Руслан Чыныбеков, руководитель Группы компаний “Новая Норма”
              принял участие в круглом столе в режиме онлайн на тему
              «Ситуативный маркетинг: инструменты оптимизации бизнес-процессов в
              условиях пандемии», организованном Кыргызским государственным
              университетом им.Ж.Баласагына. Основная цель мероприятия
              -обсуждение в широком кругу представителей государственных
              органов, бизнес-структур, работодателей, вузов, родителей
              обучающихся проблемы формирования модели выпускника – будущих
              специалистов в сфере бизнеса.
              <br />
              <br />
              Участники провели анализ преимуществ и недостатков удаленного
              обучения, развития бизнес-процессов в условиях неопределенности и
              возможностей подготовки высококвалифицированного специалиста по
              маркетингу, коммерции и логистики, адаптированного к кризисным
              ситуациям.
              <br />
              <div className="news__pic">
                <img src={pic18031} alt="pic" />
                <img src={pic18032} alt="pic" />
              </div>
              <br />
              Руслан Чыныбеков рассказал о проводимой деятельности ГК “Новая
              Норма” в образовательной сфере .
              <br />
              <br />
              <i>
                “Учитывая необходимость прохождения студентами технических
                факультетов производственной практики, наша компания
                предоставляет возможность молодым людям пройти стажировку на
                базе “Новой Нормы” и обучиться азам IT-программирования. В
                партнерстве с ведущими ВУЗАми страны, мы намерены помочь в
                решении проблемы дефицита кадров в этой области и готовить
                специалистов высокого уровня для всех секторов экономики”
              </i>
              ,-сказал Р.Чыныбеков.
              <br />
              <br />В завершении встречи стороны отметили важность активизации
              дальнейшего сотрудничества в этой области, а также договорились об
              организации в скором времени IT-форума республиканского значения с
              участием представителей всех ВУЗов страны.
            </p>
          </span>
          <div className="news__line news__line-2" />
        </div>

        <div className="news__item">
          <span className="news__date">16.03.2021</span>
          <p className="news__title">
            Группа компаний “Новая Норма” выступил с презентацией о деятельности
            компании во время организованной диалоговой платформы на
            онлайн-выставке информационных технологий CONNECT.KG
          </p>
          <div className="news__line news__line-1" />
          <span className="news__info">
            <p>
              Сегодня Эрбол Русланов IT-программист Группы компаний “Новая
              Норма” выступил с презентацией о деятельности компании во время
              организованной диалоговой платформы на онлайн-выставке
              информационных технологий CONNECT.KG, которая проходит в Бишкеке в
              период с 15 по 19 марта 2021 года.
              <br />
              <div className="news__pic">
                <img src={picCon1} alt="pic" />
                <img src={picCon2} alt="pic" />
              </div>
              <br />
              Модератором онлайн платформы выступил Чубак Темиров, и.о.
              директора Парка высоких технологий. Всего свою деятельность
              сегодня представили 6 компаний, четыре из которых отечественные,
              две- зарубежные, ведущие свою деятельность в области развития
              цифровой экономики.
              <br />
              <br />В завершении своей презентации Эрбол Русланов отметил, что
              компания “Новая Норма” открыта к деловому партнерству со всеми
              участниками онлайн-выставки.{" "}
              <i>
                “Объединив наши совместные усилия, мы совершим прорыв в области
                информационных технологий!”
              </i>
              ,-заключил Э.Русланов.
            </p>
          </span>
          <video
            className="news__video"
            src={PresVideo}
            controls
            name="media"
          />
          <div className="news__line news__line-2" />
        </div>

        <div className="news__item">
          <span className="news__date">15.03.2021</span>
          <p className="news__title">
            Онлайн-выставка информационных технологий
          </p>
          <div className="news__line news__line-1" />
          <span className="news__info">
            <p>
              ГК “Новая Норма” принимает участие в онлайн-выставке
              информационных технологий CONNECT.KG, которая пройдет в Бишкеке в
              период с 15 по 19 марта 2021 года. Основная цель мероприятия-
              демонстрация потенциала ИТ-индустрии в Кыргызстане. На CONNECT.KG
              будет представлена деятельность более 50 IT-компаний,
              осуществляющих свою работу в сфере ИТ-образования, аутсорсинге
              бизнес-решений, финансовых технологиях, цифровом туризме,
              здравоохранении и государственных услугах и т.п
              <br />
              <br />
              Сегодня состоялось официальное открытие виртуальной выставки. В
              онлайн мероприятии принял участие Премьер-министр КР- Улукбек
              Марипов, Заместитель министра иностранных дел КР- Нурлан
              Ниязалиев, Посол США в Кыргызской Республике -господин Дональд Лу,
              Посол Японии в Кыргызской Республике- господин Шигеки Маэда, Посол
              Соединенного Королевства в Кыргызской Республике- господин Чарльз
              Гарретт.
              <br />
              <div className="news__pic">
                <img src={picConKg1} alt="pic" />
                <img src={picConKg2} alt="pic" />
              </div>
              <br />
              Далее с видеопрезентацией ИТ-сектора Кыргызстана выступила - Дина
              Руслан- Председатель Кыргызской ассоциации разработчиков
              программного обеспечения и услуг.
              <br />
              <br />С парком высоких технологий Кыргызской Республики участников
              церемонии ознакомил - Чубак Темиров, и.о. директора Парка высоких
              технологий. Церемония завершилась презентацией стратегии
              цифровизации Кыргызской Республики.
            </p>
          </span>
          <div className="news__line news__line-2" />
        </div>

        <div className="news__item">
          <span className="news__date">13.03.2021</span>
          <p className="news__title">Поздравляем Амину!</p>
          <div className="news__line news__line-1" />
          <span className="news__info">
            <p>
              Коллектив ГК “Новая Норма” поздравляет самую юную шахматистку
              Кыргызстана – Амину Шергалиеву с победой на кубке Детско-юношеской
              спортивной школы по шахматам (ДЮСШ), посвященной ко Дню защитника
              отечества. Мы желаем нашей маленькой победительнице здоровья,
              побольше любви и внимания близких, дальнейших успехов и огромного
              счастья!
              <br />
              <br />
              Амину Шергалиеву с “Новой Нормой” связала судьба еще в январе
              этого года, когда Рамил Беков, наш Генеральный директор впервые
              увидел ее во время Чемпионата по шахматам среди девочек до 6 лет,
              и был очарован талантом самой юной 3 летней шахматистки - Амины.
              Тогда он пригласил ее в офис компании и вручил ей от компании
              “Новая Норма” подарок - новый смартфон с самыми сердечными
              пожеланиями.
              <div className="news__pic-one">
                <img src={ayima1} alt="pic" />
              </div>
              <br />
              <br />И вот, буквально вчера, мы получили радостное сообщение от
              отца Амины- Нурлана Шергалиева –тренера по шахматам о том, что
              наша любимица Амина заняла первое место на Кубке ДЮСШ .
              <br />
              <br />
              Компания “Новая Норма” уделяет большое значение и поддерживает
              юных дарований нашей страны. Совместно с Общественным фондом
              “Центр развития инноваций имени Алишова Бегимбая” мы занимаемся
              поиском юных талантов для того чтобы оказать свою помощь и
              поддержку во всех начинаниях.
            </p>
            <div className="news__pic-one">
              <img src={ayima2} alt="pic" />
            </div>
          </span>
          <div className="news__line news__line-2" />
        </div>

        <div className="news__item">
          <span className="news__date">08.03.2021</span>
          <div className="news__line news__line-1" />
          <span className="news__info">
            <div className="news__pic-one">
              <img src={picMart} alt="pic" />
            </div>
          </span>

          <div className="news__line news__line-2" />
        </div>

        <div className="news__item">
          <span className="news__date">06.03.2021</span>
          <p className="news__title">
            Первый выпуск специалистов по цифровой маркировке товаров
          </p>
          <div className="news__line news__line-1" />
          <span className="news__info">
            <p>
              Сегодня сертификаты об успешном завершении курса по цифровой
              маркировке товаров были вручены 6-ти выпускникам Общественного
              фонда “Центр развития инноваций им. Алишова Бегимбая”. Обучение
              провели следующие представители Группы Компаний «Новая Норма» :
              Айдай Кусейинова - главный менеджер по системе маркировки и ЭДО,
              Улукбек Болотканов - руководитель IT отдела,Владислав Возжаев-
              главный технический специалист, Улан кызы Акжолтой - специалист
              сall центра и Аида Мамбеткулова - пресс-секретарь ГК «Новая
              Норма».
              <br />
              <br />
              Сертификаты вручал сам президент Общественного фонда «Центр
              развития инноваций» - Бегимбай Алишов. В своей поздравительной
              речи он отметил важность развития в Кыргызстане цифровой
              экономики, локомотив которой будут составлять именно IT -
              специалисты информационных технологий.
              <br />
              <br />“
              <i>
                Сегодня все сферы экономики нашей страны, нуждаются к
                квалифицированных кадрах, знания которых будут отвечать
                современным требованиям. Центр развития инноваций совместно с ГК
                “Новая Норма” занимается подготовкой и переподготовкой кадров в
                этой сфере с целью восполнения существующего дефицита. Нынешние
                выпускники нашего Центра будут трудоустроены в Центре цифровой
                маркировки товаров ГК “Новая Норма” в г.Ош.
              </i>
              ”,- поделился Б.Алишов.
              <br />
              <br />
              Общественный фонд «Центр развития инноваций им. Алишова Бегимбая»
              и ГК «Новая Норма» продолжат свою работу по поиску талантных ребят
              в сфере IT-технологий по всей республике. Путем организации
              олимпиад и сотрудничества с ведущими ВУЗами страны будут
              отбираться молодые ребята, готовые к получению новых знаний в
              области цифровой маркировки товаров. Этого требуют происходящие в
              мире процессы по переходу к цифровой экономике и автоматизации
              бизнес-процессов.
            </p>
            <div className="news__pic-one">
              <img src={sertificateOsh} alt="firstmark" />
            </div>
          </span>

          <div className="news__line news__line-2" />
        </div>

        <div className="news__item">
          <span className="news__date">01.03.2021</span>
          <p className="news__title">
            Подготовка к Дубай ЭКСПО-2021 продолжается
          </p>
          <div className="news__line news__line-1" />
          <span className="news__info">
            Команда ГК "Новая Норма" продолжает работать над концепцией дизайна
            выставочного павильона Кыргызстана на Международной выставке{" "}
            <b>Дубай ЭКСПО-2021</b>. Напомним, что компания“ Новая Норма”
            выступила с инициативой оказать содействие Торгово-промышленной
            палате КР в представлении нашей страны на предстоящей мировой
            выставке ЭКСПО.
            <div className="news__pic">
              <img src={threeD1} alt="threeD" />
              <img src={threeD2} alt="threeD" />
            </div>
            <br />
            Сегодня в ряды “Новая Норма” присоединился Максат Конушалиев,
            эксперт по туризму и автор проекта "3D Kyrgyzstan". Он представил
            вниманию участников встречи свой проект - 3D-панорамную карту
            достопримечательностей Кыргызстана. Данная виртуальная карта
            нацелена на продвижение туристического потенциала республики среди
            иностранных и местных граждан. С ее помощью можно заранее получать
            необходимую информацию через просмотр качественных фотоматериалов в
            формате 360°.
            <br />
            <br />
            <i>
              «Дубай Экспо-2021 является очень серьезным событием и отличной
              возможностью для повышения узнаваемости нашей страны в мире.
              Думаю, что молодежь и бизнес должны проявить патриотизм и внести
              свой вклад в подготовку к данному мероприятию ради общей цели.
              Буду рад, если мой проект окажется полезным на предстоящем
              выставочном мероприятии мирового масштаба»
            </i>
            ,- <b>сказал Максат Конушалиев</b>.
            <div className="news__pic">
              <img src={threeD3} alt="threeD" />
              <img src={threeD4} alt="threeD" />
            </div>
            <br />
            Команда «Новая Норма» обращается к талантливым ребятам Кыргызстана с
            призывом не оставаться в стороне. Каждый из вас может войти в
            историю страны! Внесите свой вклад в подготовку к мировой выставке и
            гордитесь любимой Родиной!
          </span>
          <video className="news__video" src={threeD} controls name="media" />
          <div className="news__line news__line-2" />
        </div>

        <div className="news__item">
          <span className="news__date">27.02.2021</span>
          <p className="news__title">
            Общественный фонд “Центр Развития Инноваций” готовит молодых
            IT-программистов для Центров маркировки товаров, созданных ГК
            <br /> <br />
            “Новая Норма”{" "}
          </p>
          <div className="news__line news__line-1" />
          <span className="news__info">
            Сегодня в г. Бишкек из южной столицы республики прибыла группа
            молодых программистов, которым предстоит пройти обучение на базе ГК
            «Новая Норма». Отметим, что ГК «Новая Норма» совместно с
            Общественным фондом «Центр Развития Инноваций им. Алишова Бегимбая”
            проводят совместную работу по подготовке и переподготовке
            специалистов в сфере IT-технологий для их дальнейшего успешного
            трудоустройства, обеспечения конкурентноспособности и
            востребованности наших граждан не только внутри страны, но и на
            региональном и глобальном рынках труда.
            <br />
            <br />
            Данная группа специалистов по завершению обучающего курса будут
            трудоустроены в Центре цифровой маркировке товаров, который открыт
            при содейтствии ГК “Новая Норма” в городе Ош.
            <i>
              “Я приехала в ГК “Новая Норма” за новыми знаниями по цифровой
              маркировке товаров.О данной обучающей программе узнала от
              знакомых, и очень рада такой возможности не только пройти
              обучение, но и еще трудоустроится в Центре маркировки товаров”
            </i>
            , -делится Сауле Ойчиева студентка ОшГУ.
            <br />
            <br />
            <i>
              “Всем студентам информационных факультетов приходится
              самостоятельно обучаться практике. Учебная программа, которую мы
              изучаем в университете не соответствует современным требованиям, а
              чтобы идти в ногу со временем необходимо постоянно
              совершенствоваться. Поэтому я очень рад, что оказался здесь,
              сегодня начинающим программистам очень трудно найти работу, а
              здесь два в одном, мы и обучаемся, и получаем работу”
            </i>
            ,- рассказывает Абайбек Таштемиров. В дальнейшем Общественный фонд
            «Центр Развития Инноваций им. Алишова Бегимбая” и ГК “Новая Норма”
            продолжат совместную образовательную работу .
          </span>

          <div className="news_imag">
            <section id="slider_bl">
              <div className="wrapper">
                <input defaultChecked type="radio" name="slider" id="slide1" />
                <input type="radio" name="slider" id="slide2" />
                <input type="radio" name="slider" id="slide3" />

                <div className="slider-wrapper">
                  <div className="inner">
                    <article>
                      <div className="info top-left"></div>
                      <img src={teamSliderPhoto1} />
                    </article>
                    <article>
                      <div className="info bottom-right"></div>
                      <img src={teamSliderPhoto2} />
                    </article>
                    <article>
                      <div className="info bottom-left"></div>
                      <img src={teamSliderPhoto3} />
                    </article>
                  </div>
                </div>
                <div className="slider-prev-next-control">
                  <label htmlFor="slide1" />
                  <label htmlFor="slide2" />
                  <label htmlFor="slide3" />
                </div>
                <div className="slider-dot-control">
                  <label htmlFor="slide1" />
                  <label htmlFor="slide2" />
                  <label htmlFor="slide3" />
                </div>
              </div>
            </section>
          </div>
          <div className="news__line news__line-2" />
        </div>

        <div className="news__item">
          <span className="news__date">25.02.2021</span>
          <p className="news__title">
            ГК «Новая Норма» примет участие в подготовке к Международной
            выставке «Дубай ЭКСПО 2021»
          </p>
          <div className="news__line news__line-1" />
          <span className="news__info">
            Сегодня состоялась первая рабочая встреча представителей Группы
            компаний «Новая Норма», члена Торгово-промышленной палаты КР с
            представителями Оргкомитета Дубай ЭКСПО-2021. Напомним, что ТПП КР
            является национальным оператором Международной выставки Дубай
            ЭКСПО-2021, а Группа “Новая Норма”, являющаяся разработчиком и
            интегратором программных решений информационных систем, выступает
            уполномоченным техническим партнером ТПП КР в подготовке к Дубай
            ЭКСПО-2021. Учитывая тот фактор, что в настоящее время ведется
            подготовка к международной выставке, на которой Кыргызстан должен
            быть представлен на должном уровне, команда компании “Новая Норма”
            проявила инициативу разработать дизайн павильона Кыргызстана на
            Дубай ЭКСПО-2021.
            <br />
            <br />
            Рамил Беков, Генеральный директор ГК «Новая Норма» во время
            переговоров, обозначил что, что тематика выставочного павильона
            Кыргызстана будет отражать туристические богатства нашей страны с
            использованием современных цифровых технологий. «Мы рады участвовать
            в подготовке выставочного павильона Кыргызстана к Международной
            выставке «Дубай ЭКСПО-2021». Сейчас мы работаеем над разработкой
            концепции дизайна павильона, который будет разработан с
            использованием современных технологических решений (3D),
            раскрывающих туристический потенциал нашей страны. Вместе с этим, мы
            намерены разработать информационную единую платформу с базой данных
            всех туристических объектов Кыргызстана, используя которую каждый
            посетитель нашего павильона сможет найти для себя необходимую
            информацию и таким образом спланировать свой туристический маршрут в
            Кыргызстан,- сказал Р.Беков. Отметим, что до этого времени,
            Оргкомитет Дубай ЭКСПО-2021, в частности группа дизайнеров
            занималась разработкой вариантов выставочного павильона Кыргызстана.
            <br />
            <br />И сегодня, они рассказали инициативной группе о своих
            разработанных решениях, которые были созданы с учетом исторических
            особенностей, наследия, национальным колоритом и традициями.По
            словам разработчиков, они попытались отразить в своих работах
            инвестиционную привлекательность Кыргызстана, которая могла бы быть
            интересной потенциальным инвесторам - посетителям павильона
            Кыргызстана. В завершении встречи, стороны договорились о дальнейшем
            сотрудничестве и кооперации творческих решений для создания единого
            оригинального дизайна выставочного павильона Кыргызстана на
            Международной выставке “Дубай ЭКСПО-2021”.
          </span>
          <div className="news_imag">
            <section id="slider_bl">
              <div className="wrapper">
                <input defaultChecked type="radio" name="slider" id="slide1" />
                <input type="radio" name="slider" id="slide2" />
                <input type="radio" name="slider" id="slide3" />

                <div className="slider-wrapper">
                  <div className="inner">
                    <article>
                      <div className="info top-left"></div>
                      <img src={sliderPhoto1} />
                    </article>
                    <article>
                      <div className="info bottom-right"></div>
                      <img src={sliderPhoto2} />
                    </article>
                    <article>
                      <div className="info bottom-left"></div>
                      <img src={sliderPhoto3} />
                    </article>
                  </div>
                </div>
                <div className="slider-prev-next-control">
                  <label htmlFor="slide1" />
                  <label htmlFor="slide2" />
                  <label htmlFor="slide3" />
                </div>
                <div className="slider-dot-control">
                  <label htmlFor="slide1" />
                  <label htmlFor="slide2" />
                  <label htmlFor="slide3" />
                </div>
              </div>
            </section>
          </div>
          <div className="news__line news__line-2" />
        </div>

        <div className="news__item">
          <span className="news__date">22.02.2021</span>
          <p className="news__title">
            “Новая Норма” стала оператором фискальных данных
          </p>
          <div className="news__line news__line-1" />
          <span className="news__info">
            15 февраля 2021 года компания{" "}
            <span className="companyName">“Новая Норма”</span> получила статус
            оператора фискальных данных. Оператор фискальных данных –
            юридическое лицо, созданное специально для осуществления приема,
            обработки, хранения и передачи фискальных данных в Государственную
            налоговую службу. Это новое направление деятельности компании “Новая
            Норма” позволяет расширить спектр оказываемых услуг бизнес-сектору,
            направленных на оказание всесторонней поддержки в создании
            благоприятных условий для развития отечественного
            предпринимательства.
          </span>

          <div className="news__line news__line-2" />
        </div>

        <div className="news__item">
          <span className="news__date">15.02.2021</span>
          <p className="news__title">Представительство на юге</p>
          <div className="news__line news__line-1" />
          <span className="news__info">
            В городе Ош состоялось открытие Офиса компании{" "}
            <span className="companyName">“Новая Норма”</span> по маркировке
            товаров. Это стало следущим шагом в расширении деятельности
            компании, в услугах которой в настоящее время нуждается
            бизнес-сообщество.
            <div className="textContainer">
              <span className="textContaineritem">
                <br />
                Перечислим преимущества введения цифровой маркировки товаров:
              </span>
              <span className="textContaineritem">
                • Уверенность в покупке легальных и качественных товаров;
              </span>
              <span className="textContaineritem">
                • Защита жизни и здоровья;
              </span>
              <span className="textContaineritem">
                • Инструмент общественного контроля и защиты прав потребителей;
              </span>
              <span className="textContaineritem">
                • Рост выручки и повышение конкурентоспособности «белого
                бизнеса»;
              </span>
              <span className="textContaineritem">
                • Оптимизация процессов и снижение издержек;
              </span>
              <span className="textContaineritem">
                • Доступ к данным о движении продукции по логистической цепи;
              </span>
              <span className="textContaineritem">
                • Сокращение «серого» рынка и повышение производительности
                труда;
              </span>
              <span className="textContaineritem">
                • Повышение налоговых и таможенных сборов;
              </span>
              <span className="textContaineritem">
                • Экономия бюджета на обеспечение контроля товарных рынков.
              </span>
            </div>
            <br />В скором времени Офисы компании “Новая Норма” по маркировке
            товаров откроются во всех регионах Кыргызстана. Таким образом
            отечественные производители получили возможность провести цифровую
            маркировку на местах, что очень важно для развития регионального
            бизнеса.
            <video
              className="news__video"
              src={oshVideo}
              controls
              name="media"
            />
          </span>
          <div className="news__line news__line-2" />
        </div>

        <div className="news__item">
          <span className="news__date">04.02.2021</span>
          <p className="news__title">Сотрудничество с ведущими ВУЗами</p>
          <div className="news__line news__line-1" />
          <span className="news__info">
            Государственный Технический Университет им. И.Раззакова организовал
            круглый стол, посвященный подготовке кадров в IT-образовании с
            участием компании «Новая Норма». Выступая перед собравшимися -Рамил
            Беков, Генеральный директор ГК «Новая Норма» отметил, что в
            настоящее время их команда занимается автоматизацией
            бизнес-процессов, фискализацией и цифровой маркировкой товаров.
            <br />
            <span className="news__info_child">
              <br />
              <i>
                «Эти коды уникальны и не подлежат подделке, в них содержится вся
                необходимая информация о производителе, дате выпуска, параметрах
                изделия. С его помощью можно отследить перемещение товара от
                изготовителя до потребителя»
              </i>
            </span>
            , -сказал Р.Беков.
            <br />
            <br />
            Было отмечено, что в настоящее время рынок IT- технологий испытывает
            дефицит профессиональных кадров, между тем реалиии времени диктуют
            свои условия, и Кыргызстану для того чтобы идти в ногу со временем,
            необходимо взращивать собственных специалистов в этой области.
            Учитывая данный фактор, компания “Новая Норма” подписала Договор о
            сотрудничестве с Государственный Технический Университет им.
            И.Раззакова, в рамках которого студенты данного ВУЗа смогут
            проходить производственную практику в компании “Новая Норма”.
          </span>
          <div className="news__line news__line-2" />
        </div>

        <div className="news__item">
          <span className="news__date">23.01.2021 и 29.01.2021</span>
          <p className="news__title">
            Информационные встречи с предпринимателями
          </p>
          <div className="news__line news__line-1" />
          <span className="news__info">
            В январе 2021 года представители компании «Новая Норма» продолжили
            информационно-разъяснительную кампанию, нацеленную на широкое
            информирование представителей бизнес-сообщества Кыргызстана о
            надвигающихся нововведениях при экспорте товаров в страны ЕАЭС. Так,
            23 и 29 января 2021 года при поддержке Профсоюза рынка «Дордой» и
            Ассоциации предприятий легкой промышленности «Легпром» для
            представителей швейных предприятий были организованы информационные
            встречи в кинотеатре «Ала-Тоо» г. Бишкек.
            <br />
            <div className="news__pic">
              <img src={alatooPic} alt="alatoo" />
              <img src={alatooPic1} alt="alatoo" />
            </div>
            <br />В обсуждениях, вопросах и ответах относительно цифровой
            маркировки приняли участие представители Правительства КР в лице
            Министерства экономики КР, ГНС, ГКПНЭ, ЗАО «Альфа телеком». В
            программе мероприятия было посещение Центра по маркировке компании
            «Новая Норма», во время которой участники смогли воочию увидеть
            процесс получения кодов маркировки. В этот же день была отправлена
            первая партия маркированного товара легкой промышленности в г.
            Москва Российской Федерации.
          </span>
          <div className="news__line news__line-2" />
        </div>

        <div className="news__item">
          <span className="news__date">20.01.2021</span>
          <p className="news__title">Выездное совещание</p>
          <div className="news__line news__line-1" />
          <span className="news__info">
            <div className="news__pic">
              <img src={vyezdpic} alt="pic" />
              <img src={vyezdpic1} alt="pic" />
            </div>
            <video
              className="news__video"
              src={vyezdintDordoi}
              controls
              name="media"
            />
          </span>
          <div className="news__line news__line-2" />
        </div>

        <div className="news__item">
          <span className="news__date">19.01.2021</span>
          <p className="news__title">
            Бизнес-встреча с предпринимателями рынка «Дордой»
          </p>
          <div className="news__line news__line-1" />
          <span className="news__info">
            В январе 2021 года Профсоюз рынка «Дордой» организовал
            бизнес-встречу предпринимателей рынка «Дордой» с командой ГК «Новая
            Норма». Как известно, изделия швейных цехов Кыргызстана известны
            своим качеством далеко за пределами Кыргызстана. Основным импортером
            отечественных швейных изделий является Российская федерация, на
            территории которой с 1 января 2021 года начинает действовать Закон
            РФ «О маркировке товаров легкой промышленности».
            <br />
            <div className="news__pic">
              <img src={dordoi} alt="dordoi" />
              <img src={dordoi1} alt="dordoi" />
            </div>
            <br />В этой связи у представителей швейной отрасли накопилось много
            вопросов относительно экспорта выпускаемой продукции. Во время
            встречи предприниматели смогли задать интересующие их вопросы
            представителям компании «Новая Норма». В завершении, стороны
            отметили необходимость организации подобных бизнес-встреч уже в
            более расширенном формате.
          </span>

          <div className="news__line news__line-2" />
        </div>

        <div className="news__item">
          <span className="news__date">14.01.2021</span>
          <p className="news__title">
            Первая цифровая маркировка легкой промышлености в Кыргызской
            Республики
          </p>
          <div className="news__line news__line-1" />
          <span className="news__info">
            <p>
              Группа компаний “Новая Норма” стала первым официальным
              представителем российской компании ТрекМарк, специализирующейся на
              предоставлении готовых решений для маркировки «под ключ».
            </p>
            <div className="news__pic-one">
              <img src={firstmark} alt="firstmark" />
            </div>
          </span>

          <div className="news__line news__line-2" />
        </div>

        <div className="news__item">
          <div className="news__pic-one">
            <img src={NewYear} alt="pic" />
          </div>
        </div>

        <div className="news__item">
          <span className="news__date">24.12.2020</span>
          <p className="news__title">Цифровая трансформация бизнес-процессов</p>
          <div className="news__line news__line-1" />
          <span className="news__info">
            24 декабря 2020 года ГК «Новая Норма» организовала в г. Бишкек
            бизнес-форум «Цифровая трансформация бизнес-процессов» для более 100
            отечественных предпринимателей. На форуме также присутствовали
            руководители Министерства Экономики КР, Государственной налоговой
            службы при ПКР, Государственного комитета промышленности, энергетики
            и недропользования КР, Ассоциации легкой промышленности «Легпром» и
            ЗАО «Альфа Телеком» . В мероприятии принял участие Юрий Почтарев,
            представитель системы «Честный знак» Российской Федерации, который
            является партнером компании “Новая норма”.
            <br />
            <video
              className="news__video"
              src={forumVideo}
              controls
              name="media"
            />
            <br />В своем выступлении он рассказал о нормативно-правовой базе
            маркировки товаров. В частности, Юрий Почтарев отметил, что основная
            цель Закона РФ «О маркировке товаров Легкой промышленности»
            -получить четкое понимание относительно того, количество и
            перемещение товаров на территории России. А команда ГК «Новая Норма»
            представила вниманию собравшихся презентацию о своей деятельности,
            также они рассказали о системе выдачи кодов маркировки товаров. Была
            отмечена необходимость подготовки отчественных предприятий к
            внедрению системы цифровой маркировки “Честный знак”, поскольку от
            этого будет зависеть их в дальнейшая предпринимательская
            деятельность в правовом поле.
          </span>

          <div className="news__line news__line-2" />
        </div>

        <div className="news__item">
          <span className="news__date">17.12.2020</span>
          <p className="news__title">
            Россия считает необходимым расширить действие соглашения о
            маркировке товаров
          </p>
          <div className="news__line news__line-1" />
          <div className="news__view">
            <span className="news__info">
              <i>
                «Представляется полезным расширить сферу действия соглашения о
                маркировке товаров»
              </i>
              , — заявил сегодня на заседании Высшего евразийского
              экономического совета президент России Владимир Путин. По его
              словам, электронные технологии помогают защищать общий рынок и
              потребителей от контрафактной продукции.
              <br />
              <br />
              Страны ЕАЭС нацелены на ограничение нелегального товарооборота,
              улучшение конкурентной среды для бизнеса. Президент РФ напомнил,
              что используемые в рамках союза цифровые механизмы маркировки
              товаров, применение которых инициировала Россия, помогают
              обеспечить контроль за перемещением грузов по территории союза.
              <br />
              <br />
              <i>
                «До конца года внедрят цифровые метки для маркировки табачных
                изделий, некоторых лекарственных препаратов, парфюмерии, обуви,
                фотооборудования, автомобильных шин. С 1 января 2021 года
                предусмотрено введение маркировки товаров легкой промышленности,
                а затем и отдельных видов молочной продукции»
              </i>
              , — сообщил Владимир Путин.
            </span>
            <img
              src={putinImg}
              alt="putin-prezident-mira"
              className="news__img"
            />
          </div>
          <div className="news__line news__line-2" />
          {/* <a href='#' className='news__link'>
                    Источник: http://norma.kg/childs/news/index.html
                </a> */}
        </div>

        <div className="news__item">
          <span className="news__date">15.12.2020</span>
          <p className="news__title">Вклад в IT-образование Кыргызстана</p>
          <div className="news__line news__line-1" />
          <span className="news__info">
            15 декабря 2020 года ГК «Новая Норма» приняла участие в церемонии
            открытия Фонда “Центра Развития Инноваций им.Бегимбая Алишова”.
            Миссия Фонда – заключается в подготовке и переобучении
            профессиональных кадров в IT-сфере, знания которых будут
            соответствовать современным требованиям рынка цифровых технологий. В
            планах компании “Новая Норма” и Фонда “Центра Развития Инноваций
            им.Бегимбая Алишова” организация олимпиад среди талантливых
            студентов, переподготовка кадров с дальнейшем трудоустройством.
          </span>

          <div className="news__line news__line-2" />
        </div>

        <div className="news__item">
          <span className="news__date">11.12.2020</span>
          <p className="news__title">
            Главы стран ЕАЭС утвердили направления евразийской интеграции до
            2025 года
          </p>
          <div className="news__line news__line-1" />
          <span className="news__info">
            Главы государств Евразийского экономического союза утвердили
            Стратегические направления развития евразийской экономической
            интеграции до 2025 года. Решение приняли накануне на заседании
            Высшего Евразийского экономического совета. Совету Евразийской
            экономической комиссии поручили утвердить в первом квартале 2021-го
            план мероприятий по реализации стратегических направлений,
            правительствам и ЕЭК — обеспечить реализацию документа. Перечень мер
            и механизмов (около 330 позиций) фактически является дорожной картой
            дальнейшего развития интеграции.
            <br />
            <br />
            Его выполнение предусматривает разработку и подписание 13
            международных договоров, более 60 нормативных правовых актов ЕАЭС,
            внесение 25 изменений и дополнений в Договор о союзе и национальные
            законодательства стран объединения.{" "}
            <i>
              «В документе определены механизмы сотрудничества в новых, не
              предусмотренных договором о ЕАЭС, сферах: образование, туризм,
              спорт и здравоохранение. Предусматривается развитие экономического
              сотрудничества с третьими государствами, а также с интеграционными
              объединениями»
            </i>
            , — рассказали в ЕЭК.
            <br />
            <br />В мае 2020 года главы государств Евразийского экономического
            союза в целом одобрили проект стратегии-2025 и поручили Евразийской
            экономической комиссии его доработать. После представили для
            рассмотрения еще 36 предложений.
          </span>
          <div className="news__line news__line-2" />
        </div>

        <div className="news__item">
          <span className="news__date">10.12.2020</span>
          <p className="news__title">
            Цифровая маркировка товаров, автоматизация бизнес-процессов и
            фискализация налоговых процедур
          </p>
          <div className="news__line news__line-1" />
          <span className="news__info">
            10 декабря 2020 года ГК «Новая Норма» провела в г. Бишкеке круглый
            стол на тему: «Цифровая маркировка товаров, автоматизация
            бизнес-процессов и фискализация налоговых процедур». В мероприятии
            приняли участие представители Министерства Экономики КР,
            Государственной налоговой службы при ПКР, Государственной таможенной
            службы при ПКР, Государственного комитета промышленности, энергетики
            и недропользования КР, Ассоциации предприятий легкой промышленности
            «Легпром», ЗАО «Альфа Телеком» и зарубежные партнеры, Цель встречи
            заключалась в анализе проблем и возможностей внедрения системы
            маркировки товаров.
            <br />
            <br />
            Участники отметили важность проведения широкой
            информационно-разъяснительной работы среди предпринимательского
            сообщества по следующим вопросам: • Обязательная маркировка; • Сроки
            внедрения; • Маркировка товаров в ЕАЭС; • Процесс фискализации
            налоговых процедур; • Практические рекомендации по участию в
            пилотных проектах.
            <br />
            <br />
            Для достижения этой цели, по мнению участников, необходима
            оптимизация сотрудничества бизнес-сообщества с соответствующими
            государственными органами и партнерами по ЕАЭС. По итогам круглого
            стола были выработаны рекомендации по внедрению механизма маркировки
            и прослеживаемости товаров в Кыргызской Республике.
          </span>

          <video className="news__video" src={video} controls name="media" />

          <div className="news__line news__line-2" />
        </div>
      </div>
    </div>
  )
}
