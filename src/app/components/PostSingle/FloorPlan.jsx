import Image from 'next/image'
import React from 'react'

export const FloorPlan = () => {

  const details = [
    {
      label: "Builtup Area",
      value: "696 sq.ft",
      image: "/img/icons/download.svg",
    },
    {
      label: "Rera ID",
      value: "P-BPL-17-1396",
      image: "/img/icons/download.svg",
    },
    {
      label: "Possession Status",
      value: "Ready to Move",
      image: "/img/icons/download.svg",
    },
  ];

  return (
    <section id="floor-plan">
     <div className="d-flex justify-content-between align-items-center border-bottom pb-2 pt-0">
        <h6 className="big-heading text-black">Madhuram Height Price & Floor Plan</h6>
      </div>
  

<div className="floor-box pt-3 pb-0">
  <div className="inner-box-floor text-center d-flex align-items-center">
    <p className='mb-0'>2 BHK Apartment</p>
  </div>
</div>

  <p className='text-floor mb-0 text-center pt-3 '>696 sq.ft</p>
  <p className=' border-bottom'></p>



<div className="fllor-img">
  <h5 className='my-3'><b>₹ 38.0 L</b></h5>
  <Image src={"/img/single/flore.png"} alt='img' width={712} height={311}/>
</div>


<div className=" d-flex align-items-center justify-content-between mt-md-4 mt-4 pe-5 flex-wrap">
        {details.map((detail, index) => (
          <div key={index} className="col-4 mb-4 d-flex align-items-center">
            <Image
              className="me-2"
              src={detail.image}
              width={16}
              height={16}
              alt={detail.label.toLowerCase()}
            />
            <div className="inner-ov-box">
              <p className="p-heading common-black mb-0">{detail.label}</p>
              <p className="common-black-60 p-samll-m mb-0">{detail.value}</p>
            </div>
          </div>
        ))}
      </div>


  </section>
  )
}
