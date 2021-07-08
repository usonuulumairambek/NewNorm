import React, { useState } from "react"
import axios from "./../../api/axios"
import "bootstrap/dist/css/bootstrap.min.css"
import firebase from "./../../config/FbConfig"
import "./Add.css"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

function Add() {
  let newsEmpty = {
    title: "",
    text: "",
    date: "",
    fileLink: "",
    fileName: "",
  }
  const [news, setNews] = useState(newsEmpty)
  const [fileState, setFileState] = useState({})
  const [isLoading, setisLoading] = useState(false)
  let changeHandler = (e) => {
    let newsData = { ...news }
    newsData[e.target.name] = e.target.value
    setNews(newsData)
  }
  let addNews = (e) => {
    setisLoading(true)
    e.preventDefault()

    const storageRef = firebase.storage().ref("images/" + fileState.name)
    const uploadTask = storageRef.put(fileState)
    uploadTask.on(
      "state_changed",
      () => {},
      () => {},
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then((fileUrl) => {
          console.log(fileUrl)
          news.fileLink = fileUrl
          news.fileName = fileState.name
          axios.post("/news.json", news).then(() => {
            setNews(newsEmpty)
            setFileState(null)
            setisLoading(false)
          })
        })
      }
    )
  }

  let fileChangeHandler = (e) => {
    setFileState(e.target.files[0])
  }

  return (
    <div className="page3">
      <div className="wrapper">
        <div className="container3">
          <div className="add">
            <form action="#" className="add__form">
              <h2 className="add__title add__place">Добавить новости</h2>
              <div className="add__label add__data-label">
                Дата
                <input
                  className="form-control add__input add__date"
                  type="date"
                  onChange={changeHandler}
                  name="date"
                  value={news.date}
                />
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Введите заголовок"
                onChange={changeHandler}
                name="title"
                value={news.title}
              />
              <textarea
                className="form-control add__text"
                placeholder="Напишите текст"
                onChange={changeHandler}
                value={news.text}
                name="text"
              ></textarea>
              <input
                type="file"
                className="form-control-file"
                name="file"
                onChange={fileChangeHandler}
              />
              <button className="btn btn-primary add__btn" onClick={addNews}>
                Добавить
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Add
