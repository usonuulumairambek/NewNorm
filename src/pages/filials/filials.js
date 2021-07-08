import React from "react"
import "./index.css"
import "./media.css"

import { Link } from "react-router-dom"
import { useState } from "react"
import {
  Batken,
  Osh,
  JalalAbad,
  Naryn,
  Talas,
  YssykKol,
  Chuy,
} from "./FilialsInfo"

const Filials = () => {
  const [currentState, setCurrentState] = useState("Osh")

  const filialsName = [
    { name: "Chuy", text: "Чуй" },
    { name: "Osh", text: "Ош" },
    { name: "Talas", text: "Талас" },
    { name: "Batken", text: "Баткен" },
    { name: "IssykKul", text: "Ыссык-Куль" },
    { name: "JalalAdad", text: "Джалал-Абад" },
    { name: "Naryn", text: "Нарын" },
  ]

  return (
    <div className="filials">
      {/* <span className="containerForLinks">
          <Link to="#">
            <div className="link">о нас</div>
          </Link>
          <Link to="#">
            <div className="link">адресс</div>
          </Link>
          <Link to="#">
            <div className="link">контакты</div>
          </Link>
        </span> */}
      <div className="containerForInfo">
        {currentState === "Osh" && <Osh />}
        {currentState === "Talas" && <Talas />}
        {currentState === "Batken" && <Batken />}
        {currentState === "IssykKul" && <YssykKol />}
        {currentState === "JalalAdad" && <JalalAbad />}
        {currentState === "Naryn" && <Naryn />}
        {currentState === "Chuy" && <Chuy />}
      </div>
      <div className="containerForFilials">
        {filialsName.map((item, index) => {
          return (
            <SingleFilial
              setCurrentState={setCurrentState}
              currentState={currentState}
              name={item.name}
              text={item.text}
            />
          )
        })}
      </div>
    </div>
  )
}

const SingleFilial = ({ name, text, currentState, setCurrentState }) => {
  return (
    <div
      onClick={() => setCurrentState(name)}
      className={`filialLinks${name} ${
        currentState === name && "filials-active"
      }`}
    >
      <div>{text}</div>
    </div>
  )
}

export default Filials
