import { useState, useEffect } from "react";

function Home() {

    const [data, setData] = useState({});

    useEffect(() => {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
            .then(res => res.json())
            .then(json => {
                console.log(json);
                setData(json);
            });
    }, []);

    return (
      <>
        <h1 className='text-3xl font-bold text-center mt-10'>Random Cocktail</h1>
        {data?.drinks?.map((drink,i) => (
            <>
                <h2>{drink.strDrink}</h2>
                <img key={i} src={drink.strDrinkThumb} />
                <p>{drink.strInstructions}</p>
            </>
        ))}
      </>
    );
  }
  
  export default Home;