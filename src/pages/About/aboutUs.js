import React from "react"
import "./index.css"
import scanIcon from "./scan-icon.png"

const AboutUs = () => {
  return (
    <div className="aboutus__container">
      <h1 className='aboutus__container-h1'>Миссия “Группы компаний “Новая Норма”</h1>
      <p>
         заключается в разработке и интегрировании программных решений информационных систем,  
         продвижении    современных  технических решений для цифрового экономического развития Кыргызстана.
      </p>
      Направления деятельности: <br />
      <ul className="aboutus__list">
        <li>онлайн-сервис обработка и передача фискальных данных;</li>
        <li>
         внедрение системы цифровой маркировки товаров средствами идентификации;
        </li>
        <li>электронный документооборот;</li>
        <li>производственное оборудование для цифровой маркировки;</li>
        <li>автоматизация товаро-учетных систем (1С, Мой Склад);</li>
        <li>развитие ИКТ образования.</li>
      </ul>
      <p>
        Для достижения и реализации поставленных задач “Новая Норма” в
        партнерстве с бизнес-сообществом, государственными структурами, ВУЗами
        проводит разностороннюю работу по продвижению цифровых решений.
      </p>
      <p>
        Компания “Новая Норма” входит в Реестр фискальных данных Государственной
        налоговой службы при Правительстве Кыргызской Республики, действительный
        член Торгово-Промышленной палаты Кыргызской Республики.
      </p>
      <p>
        Компания “Новая Норма” стала пионером в сфере цифровой маркировки
        товаров средствами индентификации, первой компанией на территории
        Кыргызской Республики, начавшей осуществление цифровой маркировки
        товаров легкой промышленности. На сегодняшний день компанией выдаются
        коды маркировки швейным изделиям, произведенным в Кыргызстане, которые
        беспрепятственно доставляются в г. Москва Российской Федерации. Коды
        маркировки выдаются на всю экспортируемую отечественную продукцию,
        согласно требованиям законодательства Российской Федерации.
      </p>
      <p>
        Группа компаний “Новая Норма” делает все возможное для обучения ИКТ
        специалистов и технического оснащения созданных в Кыргызстане Центров по
        цифровой маркировке товаров. В настоящее время Центры открыты в г.Ош,
        аэропорту “Манас”, г. Кант Чуйской области, г. Бишкек и на рынке Дордой.
      </p>
      <p>
        В подготовке и переподготовке ИКТ специалистов “Новая Норма” тесно
        взаимодействует с научными кругами и ведущими ВУЗами КР (КГТУ им.
        Раззакова, КГНУ им. Ж. Баласагына), оказывая им содействие в организации
        производственной практики на базе офисов компании.
      </p>
      <p>
        Для реализации задачи по проведению информационно-образовательной работы
        среди бизнес-сообщества о требованиях к маркировке товаров, ГК “Новая
        Норма” на регулярной основе проводит вебинары, тренинги, информационные
        встречи, круглые столы, форумы и сотрудничает с представителями
        массмедиа.
      </p>
      <p>
        Группа компаний “Новая Норма” открыта к диалогу и сотрудничеству со
        всеми заинтересованными сторонами! Объединив совместные усилия мы
        достигнем новых вершин в строительстве цифровой ЭКО-системы страны!
      </p>
      <div className="aboutus__img">
        <img src={scanIcon} alt="scan" />
      </div>
    </div>
  )
}

export default AboutUs
