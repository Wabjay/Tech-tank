import "./case.css";
import Summary from "../../components/Summary/Summary";
import Study from "../../components/Study/Study";
import BannerImg from "../../images/Cases/Ecommerce_banner.png"
import Ecommerce1 from "../../images/Cases/Ecommerce1.png";
import Loan from "../../images/Works/loan_portal2.png";
import Poverty from "../../images/Works/metric_system2.png";
import CaseBanner from "./CaseBanner";

const Ecommerce = () => {
  const industry = [
    {
      id: 1,
      subtitle: "About project",
      text: "A web based loan apEnterprise Resource Planning, this includes human resource management, accounting, sales module, invoicing, customer relation management, inventory management, and E-learningplication portal to enable applicants access the bank loan by providing and uploading their details.",
    },
    {
      id: 2,
      subtitle: "The challenge",
      text: "Many companies struggle to manage their inventory, payroll, accounting, and procurement. Companies lose control and visibility over their operations and these problems lead to poor service delivery, accurate records, and slow growth.",
    },
    {
      id: 3,
      subtitle: "The solution",
      text: "We offer a unique solution that unifies all these individual systems together to help companies to grow.",
    },
  ];
  const graphs = [Ecommerce1];

  return (
    <>
    <CaseBanner
      header="Ecommerce ERP Deployment"
      text="A web based loan apEnterprise Resource Planning, this includes human resource management, accounting, sales module, invoicing, customer relation management, inventory management, and E-learningplication portal to enable applicants access the bank loan by providing and uploading their details."
      image={BannerImg}
      />
    <div className="case_study">
      <Summary
        topic="SHORT SUMMARY"
        industry="SAAS software"
        company="YDS Online, Affordall, Hajmam Interiors, Miniso Nigeria "
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
        title="National dosimetry metric system"
        text="A web based loan application portal to enable applicants access the bank loan by providing and uploading their details."
      />
    </div>
    </>
    
  );
};

export default Ecommerce;
