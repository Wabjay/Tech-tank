import Study from "../components/Study/Study";
import Metric from "../images/Works/metric_system.png"
import Loan from "../images/Works/loan_portal.png"
import Poverty from "../images/Works/poverty_map.png"
import ERP from "../images/Works/erp_solution.png"
import BigHead from "../components/BigHead";

const Works = (props) => {
    return (
        <div className="works">
        <BigHead
        title="OUR WORKS"
        text="TechTank’s team of professionals are committed to the highest standards in regards to the quality of work we offer our customers. "
        button="true"
        value="GET A QUOTE"
        type="btn orange_btn big_btn"
        />
        <Study
        image= {Metric}
        imageClass="study_img_big"
        title="National dosimetry metric system"
        text="A web based loan application portal to enable applicants access the bank loan by providing and uploading their details."
        
        />
            <Study
            split="split" //Classname to split div
            image= {Loan}
            imageClass="study_img_small"
            title="NIRSAL Loan Application Portal"
            text="A web based loan application portal to enable applicants access the bank loan by providing and uploading their details."
          
            image1= {Poverty}
            imageClass1="study_img_long"
            title1="Nigeria poverty map"
            text1="Building an online analytics platform about the poverty situation in Nigeria"
           
            />
             <Study
             right="right"
        image= {ERP}
        imageClass="study_img_big"
        title="National dosimetry metric system"
        text="A web based loan application portal to enable applicants access the bank loan by providing and uploading their details."
       
        />
        </div>
    );
}
 
export default Works;