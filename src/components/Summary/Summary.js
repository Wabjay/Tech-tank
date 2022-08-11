import Buttons from "../Buttons/Buttons";
import "./Summary.css"

const Summary = (props) => {
  return (
    <div className="summary">
        <p className="summary_topic">{props.topic}</p>
      <div>
        <div className="industry">
          <p className="industry_title">INDUSTRY</p>
          <p className="industry_text">{props.industry}</p>
        </div>

        <div className="industry">
          <p className="industry_title">COMPANY</p>
          <p className="industry_text">{props.company}</p>
        </div>

        <Buttons buttontype="btn orange_btn big_btn" value="START A PROJECT" />
      </div>
      <div>
        {props.data.map((data) => (
          <div className="summary_content">
            <p className="summary_header">{data.subtitle}</p>
            <p className="summary_text">{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Summary;
