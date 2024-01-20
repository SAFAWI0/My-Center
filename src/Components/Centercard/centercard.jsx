import React from 'react'
import style from './centercard.module.css'
import Container from '../Container/container'
import { FaStar } from "react-icons/fa";
import cover from '../../assets/barbie.jpg'
import logo from '../../assets/barbielogo.jpg'
import { Link } from 'react-router-dom';

const Centercard = () => {
  return (
    <div>
       
    
      <div className={style.cards}>
     <div className={style.card}>
    <Link to={'/Sessioncard'} >
      <img src={cover} className={style.card__image} alt="" /></Link> 
      <div className={style.card__overlay}>
        <div className={style.card__header}>
          <svg className={style.card__arc} xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img className={style.card__thumb} src={logo} alt="" />
          <div className={style.card__headertext}>
            <h3 className={style.card__title}>Barbie Center</h3>            
            <span className={style.card__status}>Baghdad</span>
          </div>
        </div>
        <p className={style.card__description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
        <p className={style.evaluation}>
                  <FaStar style={{ color: "gold" }} />
                  <span className={style.evl}>8.8</span>
                  
                </p>
      </div>
         
 </div>
</div>
    </div>
  )
}

export default Centercard
