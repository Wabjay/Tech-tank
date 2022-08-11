import Banner from "../components/Banner/Banner";
import "../Styles/ContactUs.css";
import WhatsApp from "../images/WhatsApp.png"

const ContactUs = () => {
//  {(()=>{
//     let hideDiv = document.querySelector(".footer_top");
//     hideDiv.classList.add("hidden");
// })
//     ()}
    return (
        <div className="contactus">
        <Banner
        headerClass= "green-banner align-center"
        headerTextClass="green-title"
        headingText='START YOUR PROJECT'
        subtitle="TechTank's team of professionals are committed to the highest standards in regards to the quality of work we offer our customers. "
        add="add"
        />
        <div className="contact_container">
        <p className="contactBig">
        If you prefer, send us an email for new business opportunities or job openings.
        </p>
        <div className="contact_details">
            <div className="">
                <a href="mailto:hello@techtanks.tech" className="title">hello@techtanks.tech</a>
                <p className="text">New business and general.</p>
            </div>
            <div className="">
                <p className="title">No. 5 Siraso close, Wuse Zone 7, Abuja - Nigeria</p>
                <p className="text">If you wish to visit us at out office.</p>
            </div>
            <div className="">
                <div className="whatsapp">
                    <img src={WhatsApp} alt="" />
                    <p className="title">+234 70 6578 4089</p>
                </div>
                <p className="text">Message us on whatsApp</p>
            </div>
            <div className="">
                <p className="title">Social media</p>
                <ul className="text">
                    <li>Linkedin: TechTanks Solutions Nigeria Limited</li>
                    <li>Instagram: @tech_tanks</li>
                    <li>Twitter: @techtanks</li>
                </ul>
            </div>
        </div>
        </div>
        </div>
    );
}
 
export default ContactUs;