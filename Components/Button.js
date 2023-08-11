const Button = ({ onClickHandler, value, title }) => {
    return (
      <>
      <div className="adjust">
      <button onClick={onClickHandler} value={value} className="btns">
        {title}
      </button>
      </div>
      
      </>
      
    );
  };
  
  export default Button;