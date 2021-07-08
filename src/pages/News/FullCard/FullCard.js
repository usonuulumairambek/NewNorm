import axios from "axios"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
//import firebase from "./../../config/FbConfig";
import "./FullCard.css"

function FullCard() {
  //let history = useHistory();
  let { id } = useParams()
  const [postData, setPostData] = useState(null)
  useEffect(() => {
    axios
      .get(`https://norma-33eab-default-rtdb.firebaseio.com/news/${id}.json`)
      .then((r) => {
        setPostData(r.data)
      })
  }, [])
  // let removePost = (e) => {
  //   let desertRef = firebase
  //     .storage()
  //     .ref()
  //     .child(`images/${postData.fileName}`);
  //   firebase
  //     .database()
  //     .ref("news/" + id )
  //     .remove()
  //     .then(() => {
  //       desertRef.delete();
  //       history.push('/news')
  //     });
  // };
  return (
    <div className="container complex__info fullcard">
      {postData ? (
        <React.Fragment>
          <img src={postData.fileLink} alt="" className="photo" />
          <h2 className="fullcard__title">{postData.title}</h2>
          <span className="fullcard__subtitle">{postData.text}</span>
        </React.Fragment>
      ) : null}
    </div>
  )
}

export default FullCard
