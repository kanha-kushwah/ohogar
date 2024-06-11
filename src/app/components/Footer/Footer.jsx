import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <section id="footer">
      <div className="container-footer">
        <div className="row text-white justify-content-between">
          <div className="col-md-4">
            <b></b>
            <div>
              {" "}
              <Image
                src="/img/footer-logo.svg"
                alt="img"
                height={50}
                width={165}
              />
              <ul className="d-flex g-20 py-4 footer-list">
                <li>Facebook</li> <li>Instagram</li> <li>Linkedin</li>{" "}
                <li>Pinterest</li>{" "}
              </ul>
              <div className="d-flex g-20 ">
                <Image
                  src="/img/paly-store.png"
                  alt="img"
                  height={46}
                  width={155}
                />
                <Image
                  src="/img/app-store.png"
                  alt="img"
                  height={46}
                  width={155}
                />
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>

          <div className="col-md-2">
            <b>Quick links</b>{" "}
            <ul className="mt-5 footer-list li-mb">
              <li>Buy</li>
              <li>Rent</li>
              <li>Commercial</li>
              <li>Lands</li>
            </ul>
          </div>
          <div className="col-md-2">
            {" "}
            <div>
              {" "}
              <b>Company</b>
              <ul  className="mt-5 footer-list li-mb">
                <li>About us</li>
                <li>List Property </li>
              </ul>
            </div>{" "}
          </div>
          {/* <div className="col-md-1"></div> */}
          <div className="col-md-2">
            {" "}
            <div className="mb-5">
              {" "}
              <b>Address</b>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d429270.000751548!2d-97.6189782269329!3d32.80095839710444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e6e122dc807ad%3A0xa4af8bf8dd69acbd!2sFort%20Worth%2C%20TX%2C%20USA!5e0!3m2!1sen!2sin!4v1718094311185!5m2!1sen!2sin"
              width={174}
              height={136}
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="col-md-12 d-flex justify-content-between mt-5">
            <div className="col"><p>© 2024 Ohogar.All right reserved</p></div>
            <div className="col justify-content-end">
              <div className="d-flex justify-content-end">
                <p className="me-3">Terms & Conditions</p> <p>Privacy Policies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
