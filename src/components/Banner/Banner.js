import "./Banner.css"
import Form from "../Form/Form";
const Banner = (props) => {
    return (
        // Define top content/Banner
      <div className={`heading ${ props.headerClass }`} id="banner">
        {/* Home heading & Page Title */}
        <p className={ props.headerTextClass }>
            {props.headingText}
        </p>

        <div className= "centered">
          <p>
            {props.subtitle}
          </p>

          {(() => {
        if (props.add) {
          return (<Form/>)
        } else {
          return (<button className="quote">GET A QUOTE</button>)
        }
      })()}
        </div>
      </div>
    );
}
 
export default Banner;