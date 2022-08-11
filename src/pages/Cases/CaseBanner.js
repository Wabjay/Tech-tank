import './case.css'

const CaseBanner = (props) => {
    return (
        <>
        <div className="case-banner">
            <p className="banner_header">{props.header}</p>
            <p className="banner_text">{props.text}</p>
            {(() => {
            if (props.image1) {
          return (
                <div className="splitImg">
                <img src={props.image} alt="" className='bannerImg' />
            <img src={props.image1} alt="" className='bannerImg' />
                </div>
            );} else {
                return (
            <img src={props.image} alt="" className='bannerImg' />
            );
        }
      })()}
        </div>
        </>
    );
}
 
export default CaseBanner;