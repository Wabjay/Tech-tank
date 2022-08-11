import "./case.css";
import Summary from "../../components/Summary/Summary";
import Study from "../../components/Study/Study";
import BannerImg from "../../images/Cases/Dosemetry_banner.png"
import Dosimetry1 from "../../images/Cases/Dosemetry1.png";
import Dosimetry2 from "../../images/Cases/Dosemetry2.png";
import Dosimetry3 from "../../images/Cases/Dosemetry3.png";
import Loan from "../../images/Works/loan_portal.png";
import Poverty from "../../images/Works/poverty_map.png";
import CaseBanner from "./CaseBanner";

const Dosimetry = () => {
  const industry = [
    {
      id: 1,
      subtitle: "About project",
      text: "Web-based application for recording, monitoring and generating of a report for dosimetry of workers exposed to radiation Nationwide.",
    },
    {
      id: 2,
      subtitle: "The challenge",
      text: "The manual collection and archiving of data on businesses and radiation equipment on a national scale demands a significant amount of time and human resources. There is no effective way to search for and track applications. The quality of the national database is compromised by entry errors brought on by this manual process.",
    },
    {
      id: 3,
      subtitle: "The solution",
      text: "We built a web-based National Dosemetry Registry. We captured all the manual processes and automated them into a single platform. This secure system includes easy registration, a comprehensive database that is searchable, easy tracking of companies, approvals, staff, and audit trail. ",
    },
  ];
  const graphs = [Dosimetry1, Dosimetry2, Dosimetry3];

  return (
    <>
    <CaseBanner
      header="National dosimetry Registry system (NDR)"
      text="A web based loan application portal to enable applicants access the bank loan by providing and uploading their details."
      image={BannerImg}
      />
    <div className="case_study">
      <Summary
        topic="SHORT SUMMARY"
        industry="Radiation expertise"
        company="Nigerian nulear regulations authority"
        data={industry}
      />
      
      <div className="dosimetryImg">
        {graphs.map((graph) => (
                <img src={graph} alt=""/>
              ))}
      </div>


        <p className="bigHead">More case studies</p>


      <Study
        split="split split_reverse" //Classname to split div
        image1={Loan}
        imageClass1="study_img_small"
        title1="NIRSAL Loan Application Portal"
        text1="A web based loan application portal to enable applicants access the bank loan by providing and uploading their details."
        image={Poverty}
        imageClass="study_img_long"
        title="Nigeria poverty map"
        text="Building an online analytics platform about the poverty situation in Nigeria"
      />
    </div>
    </>
    
  );
};

export default Dosimetry;
