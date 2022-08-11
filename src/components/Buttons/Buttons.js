import "./Buttons.css";
// import {Link} from "react-router-dom"
const Buttons = (props) => {
  return (
    <div className="buttons">
      {/* <Link to={props.link}> */}
      <button type={props.type} className={props.buttontype}>
      {props.link}
        <p>{props.value}</p>
        {props.image && <img src={props.image} className="imgSize" alt="" />}       
      </button>
      {/* </Link> */}
    </div>
  );
};

export default Buttons;
