import "./case.css";
import Summary from "../../components/Summary/Summary";
import Study from "../../components/Study/Study";
import BannerImg from "../../images/Cases/Loan_banner.png"
import Dosimetry1 from "../../images/Cases/Dosemetry1.png";
import Dosimetry2 from "../../images/Cases/Dosemetry2.png";
import Dosimetry3 from "../../images/Cases/Dosemetry3.png";
import ERP from "../../images/Works/erp_solution.png";
import Poverty from "../../images/Works/poverty_map.png";
import CaseBanner from "./CaseBanner";

const Loan = () => {
  const industry = [
    {
      id: 1,
      subtitle: "About project",
      text: "A web based loan application portal to enable applicants access the bank loan by providing and uploading their details.",
    },
    {
      id: 2,
      subtitle: "The challenge",
      text: "So much time and resources are spent on manually applying, processing and tracking loans in the Agriculture sector. This leads to unprecedented delays in getting farmers out to the fields on time and  enable NIRSAL manage the process in a more efficient manner.",
    },
    {
      id: 3,
      subtitle: "The solution",
      text: "We and our partners built the first online real-time NIRSAL portal that captures the entire loan process, starting from loan application, percentage completion of the application, verification, training, and approvals. This is multi-portal platform that brings together the loan processors and applicants on one platform. This saves so much time and resources to all parties and scales to accommodate any number of applications nationally.",
    },
  ];
  const graphs = [Dosimetry1, Dosimetry2, Dosimetry3];

  return (
    <>
    <CaseBanner
      header="Nisral loan application Portal"
      text="A web based loan application portal to enable applicants access the bank loan by providing and uploading their details."
      image={BannerImg}
      />
    <div className="case_study">
      <Summary
        topic="SHORT SUMMARY"
        industry="Fintech"
        company="NISRAL Plc"
        data={industry}
      />
      <div className="dosimetryImg">
        {graphs.map((graph) => (
        <img src={graph} alt="" />
      ))}
      </div>
      


        <p className="bigHead">More case studies</p>


      <Study
        split="split split_reverse" //Classname to split div
        image1={ERP}
        imageClass1="study_img_small"
        title1="Ecommerce, ERP System Deployment"
        text1="Enterprise Resource Planning, this includes human resource management, accounting, sales module, invoicing, customer relation management, inventory management, and E-learning."
        image={Poverty}
        imageClass="study_img_long"
        title="Device Type Approval"
        text="Wireless Device type approval certification in Nigeria."
      />
    </div>
    </>
  );
};

export default Loan;
