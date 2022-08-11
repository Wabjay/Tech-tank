import "./Study.css";
import Buttons from "../Buttons/Buttons";
import Right_arrow from "../../images/arrow.png";

const Study = (props) => {
  return (
    <div className={`study ${props.right}`}>
      {(() => {
        if (props.split) {
          return (
            <div className={props.split}>
              <div>
                <img src={props.image} alt="" className={props.imageClass} />
                <p className="study_title">{props.title}</p>
                <p className="study_text">{props.text}</p>
                <Buttons
                  buttontype="btn black_btn small_btn"
                  value="READ CASE STUDY"
                  image={Right_arrow}
                  
                />
              </div>
              <div>
                <img src={props.image1} alt="" className={props.imageClass1} />
                <p className="study_title">{props.title1}</p>
                <p className="study_text">{props.text1}</p>
                <Buttons
                  buttontype="btn black_btn small_btn"
                  value="READ CASE STUDY"
                  image={Right_arrow}
                 
                />
              </div>
            </div>
          );
        } else {
          return (
            //   {/* Single Div Study */}
            <>
              <img src={props.image} alt="" className={props.imageClass} />
              <p className="study_title">{props.title}</p>
              <p className="study_text">{props.text}</p>
              <Buttons
                buttontype="btn black_btn small_btn"
                value="READ CASE STUDY"
                image={Right_arrow}
              />
            </>
          );
        }
      })()}
    </div>
  );
};

export default Study;
