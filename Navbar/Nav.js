import "./Nav.css"
// import Image from '../assets/images/5429553.jpg'
const Nav = () =>{
    return(
        <>
        <section class="header">
        
        <div className="general">
        <div className="logo"><a href="index.html">
        <i class="fad fa-thumbs-up"></i>

            </a></div>
        <div className="nav-links">
                <div className="link"><p><a href="school website.html">EVERYTHING</a></p></div>
                <div className="link"><p><a href="school website.html">WOMEN</a></p></div>
                <div className="link"><p><a href="school website.html">MEN</a></p></div>
                <div className="link"><p><a href="school website.html">ACCESSORIES</a></p></div>
        </div>
        <div className="icons">
           <div><i class = "fas fa-user"></i></div> 
           <div className= "shop"><i class = "fas fa-shopping-cart "></i></div> 
    </div>
        </div>
        <div className="text-box">
            <h1>Raining Offers <br/>For Hot Summer!</h1>
            <p>25% Off On All Products</p>
            <a href="http\\ub.com" class="ub-btn">Shop now</a>
        </div>
    </section>
        </>
    )
}

export default Nav