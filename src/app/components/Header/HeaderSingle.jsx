"use client"
import React,{useState} from "react";
import Image from "next/image";
import Link from "next/link";
import styles from './Sidebar.module.css';
import ParentModal from "../Dailoge/ParentModal";



const HeaderSingle = () => {


    const [isOpen, setIsOpen] = useState(false);
  
    const opensidebar = () => {
      setIsOpen(true);
    };
  
    const closebar = () => {
      setIsOpen(false);
    }
  
  return (
    <>
<div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        {/* <button onClick={closebar}>Close Sidebar</button> */}
   <ParentModal/>
      </div>
      <div className={`${styles.backdrop} ${isOpen ? styles.open : ''}`} onClick={closebar}></div>

      <section id="header1" className="py-sm-2 py-2 header-single mb-4">
        <div className="container">
          <div className="row py-md-4 px-md-0">
            <div className="col-md-3 col-3 d-flex g-20">
              <div className="logo">
                <Link href="/">
                  <Image src="/img/footer-logo.svg" alt="Logo" width={103}
                    height={32} />
                </Link>{" "}
              </div>

              <div className=" d-none d-sm-block">
                 <select className="form-select" aria-label="Default select example">
                    <option selected>Buy in Bhopal</option>
                    <option value="1">Indore, Madhya Pardesh</option>
                  </select>
                 
                </div>

            </div>
            <div className="col-md-9 col-9 align-self-end">
              <div className="d-flex justify-content-end heder-gap align-items-center">
              

              


                <div className="d-none d-sm-block w-54 add-list-header" >
                 <div className="map d-flex align-items-center"> 
                 <input className="w-100" type="search" placeholder="Search" />
                 </div>
                 
                </div>


                <div className="col-select d-none d-sm-block">
                  <button className="smart-phone bg-transprant"><span className="new">New</span>  <Image src="/img/smarthone-icon.svg" height={20} width={20} alt="icon" /> Download App</button>
                </div>
                <div className="col-select d-none d-sm-block">
                <Link href="/list-property">
                  <button className="smart-phone"><span className="free">Free</span> + List Property</button>
                  </Link>
                </div>
                <div className="col-select">
               <div className="d-flex smart-phone bo-ra-full align-items-center justify-content-center">
                <Image onClick={opensidebar} className="pointer me-2" src="/img/menu.svg" alt="menu" height={28} width={28}  />
                <Image className="pointer" src="/img/user.svg" alt="user" height={28} width={28} />

               </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeaderSingle;
