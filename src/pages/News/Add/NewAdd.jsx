import React, { useEffect, useState } from "react"
import axios from "./../../api/axios"
import "bootstrap/dist/css/bootstrap.min.css"
import firebase from "./../../config/FbConfig"
import "./Add.css"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import { getNewNews, sendNewNews } from "../../api/callbackAPI"

function NewAdd() {
  let newsEmpty = {
    title: "",
    text: "",
    date: "",
    image: [],
  }
  const [news, setNews] = useState(newsEmpty)
  const [isLoading, setisLoading] = useState(false)
  const [error, setError] = useState({})

  useEffect(() => {}, [])

  let changeHandler = (e) => {
    let newsData = { ...news }
    newsData[e.target.name] = e.target.value

    setNews(newsData)
  }

  let fileChangeHandler = (e) => {
    // for (let i = 0; i < e.target.files.length; i++) {
    // }
    setNews({ ...news, image: e.target.files })
  }

  const checkValidate = (value) => {
    const error = {}

    if (!value.text) {
      error.text = "обязательное поле"
    }
    if (!value.title) {
      error.title = "обязательное поле"
    }
    return error
  }

  let addNews = (e) => {
    setisLoading(true)
    e.preventDefault()

    if (news.title && news.text) {
      const form = new FormData()

      for (let key in news) {
        if (key === "image") {
          console.log(news[key].length)
          for (let i = 0; i < news[key].length; i++) {
            form.append("image" + i, news[key][i])
          }
        } else {
          form.append(key, news[key])
        }
      }

      sendNewNews(form)

      setNews(newsEmpty)
      setisLoading(false)
    }

    setError(checkValidate(news))
  }

  return (
    <div className="add">
      <form action="#">
        <h2 className="add__title">Добавить новости</h2>

        <span className="add__subtitle">Заголовок:</span>
        <input
          type="text"
          className={`form-control ${error.title && "error"}`}
          placeholder="Введите заголовок"
          onChange={changeHandler}
          name="title"
          value={news.title}
        />
        {error.text && <span className="add__error-text">{error.title}</span>}
        <span className="add__subtitle">Текст:</span>
        <textarea
          className={`form-control ${error.text && "error"}`}
          placeholder="Напишите текст"
          onChange={changeHandler}
          value={news.text}
          name="text"
        ></textarea>
        {error.text && <span className="add__error-text">{error.text}</span>}

        <input
          type="file"
          multiple
          className="form-control-file"
          name="file"
          onChange={fileChangeHandler}
        />
        <button className="btn btn-primary" onClick={addNews}>
          Добавить
        </button>
      </form>
    </div>
  )
}

export default NewAdd
