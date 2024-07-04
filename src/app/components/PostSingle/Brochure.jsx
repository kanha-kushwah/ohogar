import Image from "next/image";
import React from "react";

const Brochure = () => {
  return (
    <div>
      <section id="brochure" className="text-center">
        <div className="d-flex justify-content-between align-items-center border-bottom pb-2 pt-0">
          <h6 className="big-heading text-black">Madhuram Height - Brochure</h6>
        </div>


<div className="d-flex flex-col g-20 mt-4 relatve">
    <Image src={"/img/single/medium.jpg"} alt="" height={233} width={311} />
    <Image src={"/img/single/medium.png"} alt="" height={233} width={311} />

<button className="view">View Brochure</button>
</div>

<button className="down-broc md-mt-4 mt-4"> <Image className="me-2 mb-1" src={"/img/icons/download.svg"} width={16} height={16} alt="img"/> Download Brochure</button>
      </section>
    </div>
  );
};

export default Brochure;
