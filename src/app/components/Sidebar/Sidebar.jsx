import React from "react";
import Image from "next/image";

const Sidebar = () => {
  return (
    <section>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-8">
            {" "}
            <div className="d-flex g-20 align-items-center">
              {" "}
              <div>
                <Image src="/img/user.svg" width={64} height={64} alt="av" />
              </div>
              <div>
                <h4>Hello ✋ </h4>
                <p className="mb-1 ps-4 check-be position-relative">Easy Contact with sellers</p>
                <p  className="mb-0 ps-4 check-be position-relative">Personalized experience</p>
              </div> 
            </div>{" "}
          </div>
          <div className="col-md-4">
            {" "}
            <button>Login</button>{" "}
          </div>


<div className="col-12 mt-md-4 sidebar-box">
  <div className="col"><h4>My Activity</h4></div>
<div className="d-flex">
  <div className="col">1</div>
  <div className="col">1</div>
  <div className="col">1</div>
  <div className="col">1</div>

</div>
</div>

        </div>
      </div>
    </section>
  );
};

export default Sidebar;
