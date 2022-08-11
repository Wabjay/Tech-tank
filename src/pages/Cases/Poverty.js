import "./case.css";
import Summary from "../../components/Summary/Summary";
import Study from "../../components/Study/Study";
import PovertyImg from "../../images/Cases/Poverty1.png"
import PovertyImg1 from "../../images/Cases/Poverty1.png"
import PovertyStat from "../../images/Cases/PovertyStat.png"
import Metric from "../../images/Works/metric_system.png";
import ERP from "../../images/Works/erp_solution.png";
import CaseBanner from "./CaseBanner";

const Poverty = () => {
  const industry = [
    {
      id: 1,
      subtitle: "About project",
      text: "Building an online analytics platform about the poverty situation in Nigeria.",
    },
    {
      id: 2,
      subtitle: "The challenge",
      text: "Data about the living conditions of Nigeria's population is residing in disconnected systems. There is no single system that combines these datasets and transforms them into simple poverty analytics for easy benchmarking with other countries decision making at the national level.",
    },
    {
      id: 3,
      subtitle: "The solution",
      text: "We worked as a conglomerate to build a single system called the Nigerian Poverty Map that provides poverty analytics at real-time. At a glance, one can see poverty escape rate target, those that escaped poverty and those that fell behind.",
    },
  ];
//   const graphs = [Dosimetry1, Dosimetry2, Dosimetry3];

  return (
   <>
    <CaseBanner
      header="Poverty map"
      text="Building an online analytics platform about the poverty situation in Nigeria."
      image={PovertyImg}
      image1={PovertyImg1}
      />

    <div className="case_study">
      <Summary
        topic="SHORT SUMMARY"
        industry="wireless device"
        company="World Compliance"
        data={industry}
      />

      {/* <div className="dosimetryImg">
        {graphs.map((graph) => (
                <img src={graph} alt=""/>
              ))}
      </div> */}
      <div className="splitImg">
                <img src={PovertyImg} alt="" className='bannerImg' />
            <img src={PovertyImg1} alt="" className='bannerImg' />
                </div>
                <div className="povertyStat">
                <img src={PovertyStat} alt="" className='bannerImg' />
                </div>


        <p className="bigHead">More case studies</p>


      <Study
        split="split split_reverse" //Classname to split div
        image1={ERP}
        imageClass1="study_img_small"
        title1="Ecommerce, ERP System Deployment"
        text1="Enterprise Resource Planning, this includes human resource management, accounting, sales module, invoicing, customer relation management, inventory management, and E-learning"
        image={Metric}
        imageClass="study_img_long"
        title="National dosimetry metric system"
        text="A web based loan application portal to enable applicants access the bank loan by providing and uploading their details. "
      />
    </div>
   </>
  );
};

export default Poverty;
