import "../Styles/Services.css"
import Banner from "../components/Banner/Banner";
import Grids from "../components/Grids/Grids";
import Study from "../components/Study/Study";
import Wireless from "../images/Services/wireless.png";
import Hardware from "../images/Services/hardware_solution.png";
import Software from "../images/Services/software_solution.png";
import Technical from "../images/Services/tecnical_consult.png";


const Services = () => {
  const hardware = [
    {
      image: Hardware,
      title: "Cloud and Hardware solutions",
      subtitle:
        "Expect corporate style design that pronounces your company image, business correspondence style, and website representation, through the development of powerful web integrated solutions from internal office intranets to complex corporate web portals",
    },
  ];

  const wireless = [
    {
      image: Wireless,
      title: "Wireless Communication Device Type Approval",
      subtitle:
        "TechTanks Telecom offers a complete range of services – from ascertaining the globally acceptable test reports of the wireless devices, to ensure the technical specification meets the target market requirement.",
    },
  ];

  return (
    <div className="service">
      <Banner
        headerClass="white-banner"
        headerTextClass="white-title"
        headingText="HOW CAN WE HELP YOU"
        subtitle="TechTank’s team of professionals are committed to the highest standards in regards to the quality of work we offer our customers. Everyone on our dedicated team has either started, ran, or sold a business. With the success and experience we have within our team, we are confident that we can help any entrepreneur or business owner create new products, strategize, and grow their businesses."
      />
      <Grids grid="services" data={wireless} />

      <Study
        split="split" //Classname to split div
        image={Software}
        imageClass="study_img_small"
        title="Web and Software development"
        text="Expect corporate style design that pronounces your company image, business correspondence style, and website representation, through the development of powerful web integrated solutions from internal office intranets to complex corporate web portals."
        
        image1={Technical}
        imageClass1="study_img_long"
        title1="Technical Support and Technology Consulting"
        text1="Our support, customer service, and technical teams are always ready to assist you and provide you with knowledgeable advice regarding your operating systems or any future system or technical solution you wish to integrate within your company."
      />

      <Grids grid="services" data={hardware} />

      <Study
        split="split" //Classname to split div
        image={Software}
        imageClass="study_img_small"
        title="Branding and Product design"
        text="Here at TechTanks, we ensure design and print meet your marketing and communication requirements and are true to your brand identity, focusing on its core values, providing powerful branding solutions that bring together separate elements: typography, textures and a colour palette to create inspiring visual graphic design
        and imagery."
        
        image1={Technical}
        imageClass1="study_img_long"
        title1="Research And Development"
        text1="At TechTanks, we know a key engine to sustaining growth and creating value is our focus on Research & Development (R&D) and commitment towards technology innovation, incubation and commercialization."
      />
    </div>
  );
};

export default Services;
