import Buttons from "./Buttons/Buttons";

// import '../Styles/general.css'

const BigHead = (props) => {
    return (
        <div className="BigHeader_container">
            <p className="BigHeader">{props.title} </p>
            <div className="">
            <p className="BigHeader_text">{props.text}</p>
            {props.button && <Buttons value={props.value} buttontype={props.type}/> }
              {/* <button type={props.type} className={props.buttontype}/> */}
            </div>
       
        </div>
    );
}
 
export default BigHead;