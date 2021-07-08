import React, { useEffect, useState } from "react"
import "./News.css"

// `import Add from "../../assets/img/add1.jpg";
// import Add2 from "../../assets/img/add2.jpg";
// import Add3 from "../../assets/img/add3.jpg";
// import Add4 from "../../assets/img/add4.jpg";
// import Add5 from "../../assets/img/add5.jpg";`
import axios from "axios"
import Card from "./card/Card"

function News() {
  const [state, setState] = useState({})

  useEffect(() => {
    axios
      .get("https://norma-76317-default-rtdb.firebaseio.com/news.json")
      .then((r) => {
        setState(r.data)
      })
  }, [])

  useEffect(() => {
    axios.get("https://99a3dff3eb6d.ngrok.io/api/news/").then((r) => {
      console.log(r)
      debugger
    })
  }, [])

  return (
    <div className="page__2 position-padding">
      <div className="container">
        <div className="new">
          <div className="news">
            <div className="news2">
              <div className="news__title">Новости</div>
              <div className="news__text"></div>
            </div>
            {state !== null
              ? Object.keys(state).map((item) => (
                  <Card data={state[item]} id={item} key={item} />
                ))
              : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default News
