import Nav from "./Navbar/Nav";
import { useState,useEffect } from "react";
import Products from "./Products/Products";
import Product from "./assets/data"
import Card from "./Components/Card";
import Sales from "./Sales/Sales";


function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
 
  useEffect(()=>{
    setSelectedCategory('Nike')
  },[])

  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };
  const filteredData = (product,Selected) =>{
    let filteredProducts = product;

    if (Selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === Selected ||
          color === Selected ||
          company === Selected ||
          newPrice === Selected ||
          title === Selected
      );
      return filteredProducts.map(
        ({ img, title, star, reviews, prevPrice, newPrice }) => (
         
          
             <Card
            key={Math.random()}
            img={img}
            title={title}
            star={star}
            reviews={reviews}
            prevPrice={prevPrice}
            newPrice={newPrice}
          />
        )
      );
    }
  }
  const result = filteredData(Product, selectedCategory);
  return (
    <div>
      <Nav />
      <Products />
      <Sales handleClick={handleClick} result={result} />
    </div>
  );
}

export default App;
