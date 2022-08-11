import Banner from "../components/Banner/Banner";
import Grids from "../components/Grids/Grids";
import BigHead from "../components/BigHead";
// INPUT IMAGES
import Wireless from "../images/Services/wireless.png";
import Hardware from "../images/Services/hardware_solution.png";
import Software from "../images/Services/software_solution.png";
import Technical from "../images/Services/tecnical_consult.png";
import Buttons from "../components/Buttons/Buttons";
import Works from "./Works";
import {Link} from "react-router-dom"

const Home = () => {
  const data = [
    {
      id: 1,
      image: Wireless,
      title: "Wireless Communication Device Type Approval",
      subtitle:
        "TechTanks Telecom offers a complete range of services – from ascertaining the globally acceptable test reports of the wireless devices, to ensure the technical specification meets the target market requirement.",
    },
    {
      id: 2,
      image: Software,
      title: "Web and Software development",
      subtitle:
        "Expect corporate style design that pronounces your company image, business correspondence style, and website representation, through the development of powerful web integrated solutions from internal office intranets to complex corporate web portals",
    },
    {
      id: 3,
      image: Hardware,
      title: "Cloud and Hardware solutions",
      subtitle:
        "The key to implementing the right hardware and software solution is planning. Whether you are looking to introduce a new computer or application to your network or upgrade your entire infrastructure, TechTanks Technologies can help you manage your project to ensure that your goals are achieved.",
    },
    {
      id: 4,
      image: Technical,
      title: "Technical Support and Technology Consulting",
      subtitle:
        "Our support, customer service, and technical teams are always ready to assist you and provide you with knowledgeable advice regarding your operating systems or any future system or technical solution you wish to integrate within your company.",
    },
  ];
  return (
    <div className="home">
      <Banner
        headerClass="green-banner"
        headerTextClass="green-title"
        headingText="Helping companies turn their vision into finished products."
        subtitle="Our team of professionals are committed to the highest standards in
        regards to the quality of work we offer our customers."
      />
      <BigHead title="OUR CORE SERVICES" />
      <Grids grid="services" data={data}/>
      <Buttons buttontype="btn black_btn big_btn" value="VIEW ALL SERVICES" link={<Link to="/services" />}>
        </Buttons>

    <Works />
    </div>
  );
};

export default Home;
