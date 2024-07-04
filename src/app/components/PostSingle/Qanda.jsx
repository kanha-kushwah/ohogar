import React from "react";

const Qanda = () => {
  return (
    <section id="questions-answers">
      <div className="d-flex justify-content-between align-items-center border-bottom pb-2 pt-0">
        <h6 className="big-heading text-black">Questions and Answers</h6>

        <button>Have Any Question? Ask Here...</button>
      </div>

      <div className="box-qa-outer">
        <p>Get answers to your un-answered questions.</p>
        <div className="qa-inner">
          <span>For Project</span>
          <h6>
            <b>Q: Is it a residential development alone? </b>
          </h6>
          <h6>
            <b>A:</b> Is it a residential development alone?
          </h6>
          <p className="small mt-4">Answered 4 years ago</p>
        </div>
      </div>

      <div className="box-qa-outer">
        <p>Get answers to your un-answered questions.</p>
        <div className="qa-inner">
          <span>For Project</span>
          <h6>
            <b>Q: Is it a residential development alone? </b>
          </h6>
          <h6>
            <b>A:</b> Is it a residential development alone?
          </h6>
          <p className="small mt-4">Answered 4 years ago</p>
        </div>
      </div>

      <p className="samll">
        Disclaimer: While Housing.com takes all steps to ensure accuracy of the
        information provided in this section, please check the same with the
        developers. Housing.com does not take responsibility for any
        discrepancies in the information provided.
      </p>
    </section>
  );
};

export default Qanda;
