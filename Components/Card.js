const Card = ({ img, title, star, reviews, prevPrice, newPrice }) => {
    return (
      <>
        <section className="card">
          <img src={img} alt={title} className="card-img" />
          <div className="card-details">
            <h3 className="card-title">{title}</h3>
            <section className="card-reviews">
              {star} {star} {star} {star} <br/>
              
            </section>
            <section className="card-price">
              <div className="price">
                <del>{prevPrice}</del> {newPrice}
              </div>
              <div className="bag">
              <i class="bag-icon fas fa-shopping-bag"></i> 
              </div>
            </section>
          </div>
        </section>
      </>
    );
  };
  
  export default Card;
  