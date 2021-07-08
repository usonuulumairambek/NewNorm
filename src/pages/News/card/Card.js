import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

function Card({ data, id}) {
  return (
    <div className="card">
      <img src={data.fileLink} alt="" />
      <span className="card__date">{data.date}</span>
      <h3 className="card__title">{data.title}</h3>
      <Link to={`/News/${id}`} className="btn btn-primary">
        Подробнее
      </Link>
    </div>
  );
}

export default Card;