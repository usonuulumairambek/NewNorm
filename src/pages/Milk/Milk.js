import React from 'react'
import './Milk.css'
import gif from "./ofd-nn.gif"
    
export default function Milk() {
	return (
		<div className='howworktextile'>
			<div className='howworktextile_wrapper'>
                <div className="howworktextile_info">
                <div className="howworktextile_title">
                Маркировка молока: сроки и схема работы, как подготовиться
                </div>
                <div className="howworktextile_stick"/>
                <div className="howworktextile_text">В 2021 году начнется обязательная маркировка молочной продукции. Разберемся со сроками и схемой работы, как подготовиться, что делать с остатками и сколько стоят нарушения..</div>
                </div>
                <div className="howworktextile_image">
                    <img src={gif} alt="gif old"/>
                </div>
            </div>
		</div>
	)
}
    