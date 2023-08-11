import "./Sales.css"
import Button from "../Components/Button"

const Sales = ({ result, handleClick }) =>{
    return (
        <>
        <div>
        <h2 className="title">Featured Products</h2>
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} value="Nike" title="Nike" />
          <Button onClickHandler={handleClick} value="Adidas" title="Adidas" />
          <Button onClickHandler={handleClick} value="Puma" title="Puma" />
          <Button onClickHandler={handleClick} value="Vans" title="Vans" />
        </div>
      </div>
         <section className="card-container">{result}</section>
        </>
    )
}
export default Sales
