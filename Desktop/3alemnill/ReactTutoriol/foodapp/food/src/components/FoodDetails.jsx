import { useEffect, useState } from "react";
 import styles from './FoodDetails.module.css';
export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading,setISLoading] = useState(true)
  // const URL = `https://api.spoonacular.com/recipes/${foodId}/information`; 
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY ="9ee31fd8ffe4407195e0cc04e52307cc";

  useEffect(() => { 
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data); 
      setISLoading(false)
    }
    fetchFood();
  }, [foodId]);

  return (
    <div>
      {/* <h1>Food Details {foodId}</h1> */}
      <div className={styles.one}>
             <h1 className={styles.two}>Food Details {foodId}</h1>
     <span className={styles.image}> {food.title && <h2>{food.title}</h2>}</span> 
      {food.image && <img src={food.image} alt={food.title} />}
      </div>
      {/* <Info>
        <InfoItem>{food.readyInMinutes} Minutes</InfoItem>
        <InfoItem>{food.servings} Servings</InfoItem>
        <InfoItem>{food.vegetarian ? "Vegetarian" : "Non-Vegetarian"}</InfoItem>
      </Info> */}
      <div> 
 <span className={styles.three}>
    <strong>{food.readyInMinutes}Minutes</strong>
 </span>
 <span>
    <strong>{food.servings}Servers</strong>
 </span>
 <span>
    <strong>{food.vegetarian ? "Vegetarian":"Non-Vegetarian"}</strong>
 </span>
 <span>{food.vegan ? "vegan" : "" }   </span> 
    </div>
    <div>
       $ <span>{food.pricePerServing/100} Per serving </span>
    </div>
    <div>
        <h2> Ingredients</h2>
        {food.extendedIngredients.map((item)=><div>
          <img src={`https://spoonacular.com/cdn/ingredients_100*100/`+item.image} alt=""/>
          <h3>{item.name}</h3>
          <h3>{item.amount}</h3>
        </div>)}
        <h2 className={styles.four}>Instructions:</h2>
        <ol> 
        {isLoading ? (<p>Loading...</p>) :(     food.analyzedInstructions[0].steps.map((step)=>(<li>{step.step}</li>))  )}
        </ol>
        {/* // {food.analyzedInstructions[0].steps.map((step)=>(<li>{step.step}</li>))} */}
    </div>
    </div>
  );
}
