import React from "react";
import Image from "next/image";

const Reviews = () => {
  return (
    <div>
      <section id="resident-reviews">
        <div className="d-flex justify-content-between align-items-center border-bottom pb-2 pt-0">
         <div>
         <p className="black-off p-heading line-h-26 mb-0">Resident reviews for</p>
          <h6 className="big-heading text-black">
          Madhuram Height <span class="ms-3 rating"> <span class="pointer me-1"><Image src="/img/icons/star.svg" alt="info"  width="14" height="14"/></span> 4.2 <span> / 5</span></span>
          </h6>
          </div>



        </div>
      </section>
    </div>
  );
};

export default Reviews;
