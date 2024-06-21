import React from "react";
import styles from "./fooditem.module.css";
export default function FoodItem({ food ,setFoodId }) {
  return (
    <div className={styles.FoodItem}>
      <img className={styles.image} src={food.image} alt="" />
      <div className={styles.content}>
        <p className={styles.title}>{food.title}</p>
      </div>
      <h1>{food.title}</h1>

      <div className={styles.buttonn}>
        <button  onClick={()=>{ console.log(food.id) , setFoodId(food.id) }}   
         className={styles.itemBut}> View Recipe </button>
      </div>
    </div>
  );
}
