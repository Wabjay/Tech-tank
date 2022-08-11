import Banner from "../components/Banner/Banner";
import "../Styles/Aboutus.css"
import BigHead from "../components/BigHead";
import IMG from '../images/aboutus.png';
import Study from "../components/Study/Study";

const AboutUs = () => {
    const data = [
        {
          id: 1,
          title: "Integrity and honesty",
          text: "Our firm adherence to a code of especially moral or artistic values inspire our honesty and strong moral principles.",
        },
        {
          id: 2,
          title: "Good customer relations",
          text: "Customers are the most important part of business, hence we ensured to keep a long term relationship and also provide a win - win and excellence result with our good customer relationship management.",
        },
        {
            id: 3,
            title: "Commitment",
            text: "We are dedicated in providing excellence result to our clients and customers.",
          },
          {
            id: 4,
            title: "Web and Software development",
            text: "We strive to deliver excellent individual, innovative and affordable services every time and to follow it through with an outstanding delivery which is both on time and within budget.",
          },
          {
            id: 5,
            title: "Reliability",
            text: "Attracting and building the best end result with our diverse group of strategist and professionals.",
          }
      ];
    return (
        <>
        <div className="Aboutus_banner">
        <Banner
         headerClass="white-banner"
         headerTextClass="white-title"
         headingText="WE ARE TECH TANKS"
         subtitle="TechTanks is an IT solutions (Web, mobile app, custom software development, type approval, etc) company in Nigeria. We are a diverse group of digital strategists, technologists, critical thinkers, and thought leaders. We offer a comprehensive set of software development and technical services from requirements discovery to support and promote high quality and continuous improvement. Together, we aim to co-invent the future by adding our unique expertise pulled from a diverse portfolio of industries."
        />
        </div>
        <img src={IMG} alt="" className="aboutus_img"/>
        
        <div className="aboutus_top">
        <BigHead
        title="OUR HISTORY"
        text="TechTank’s team of professionals are committed to the highest standards in regards to the quality of work we offer our customers. "
        />
        <Study
        split="split"
        image={IMG}
        imageClass="study_img_big"

        image1={IMG}
        imageClass1="study_img_small"
        />
        </div>
        <div className="aboutus_content">
        <BigHead
        title="OUR CORE VALUES" />
        {/* <div className="split_aboutus"> */}
        {data.map((data) => (
            <div className="aboutus_value">
                <p className="title">{data.title}</p>
                <p className="text">{data.text}</p>
            </div>
            ))}
        {/* </div> */}
        </div>
        </>
    );
}
 
export default AboutUs;