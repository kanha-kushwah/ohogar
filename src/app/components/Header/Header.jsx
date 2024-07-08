"use client"
import React, { useState, useEffect,useContext } from 'react';
import Image from "next/image";
import Link from "next/link";
import styles from './Sidebar.module.css';
import ParentModal from "../Dailoge/ParentModal";
import BASE_URL from '@/config/config';
import { LocationContext } from '../Context/LocationContext';
import ProfileEdit from '../Dailoge/ProfileEdit';
import useToken from '@/config/useToken';

const Header = () => {
  // const { location } = useContext(LocationContext);
const token = useToken();
  const [locationData, setLocationData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { setLocation } = useContext(LocationContext);

  const [showFilter, setShowFilter] = useState(false);

  const handleShowfilter = () => setShowFilter(false);
  const handleClosefilter = () => setShowFilter(false);

    const opensidebar = () => {
      setIsOpen(true);
    };
  
    const closebar = () => {
      setIsOpen(false);
    }

    useEffect(() => {
      const fetchLocationData = async () => {
        setLoading(true);
        try {
          const response = await BASE_URL.get('/api/cities'); 
          console.log('Location Data:', response.data);
          setLocationData(response.data);
          setLocation(response.data);
        } catch (error) {
          console.error('Error fetching location data:', error);
          toast.error('Failed to fetch location data.');
        }finally {
          setLoading(false);
        }
      };
  
      fetchLocationData();
    }, []); 

  return (
    <>
     {/* {loading && <Loader />} */}
<div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
       
       <div className='text-end'><button className='close' onClick={closebar}>X</button>
       </div> 
   <ParentModal/>
   <ProfileEdit show={showFilter} handleClose={handleClosefilter} />
      </div>
      <div className={`${styles.backdrop} ${isOpen ? styles.open : ''}`} onClick={closebar}></div>

      <section id="header" className="py-sm-2 py-2">
        <div className="container">
          <div className="row py-md-4 px-md-5">
            <div className="col-md-2 col-2">
              <div className="logo">
                <Link href="/">
                  <Image src="/img/list/logo-white.svg" alt="Logo" width={103}
                    height={32} />
                </Link>{" "}
              </div>
            </div>
            <div className="col-md-10 col-10 align-self-end">
              <div className="d-flex justify-content-end heder-gap align-items-center">
               
                <div className="col-select d-none d-sm-block">
                 <div className="map smart-phone d-flex align-items-center"> <Image src="/img/map.svg" height={20} width={20} alt="icon" />
                 <select className="form-select" aria-label="Default select example">
                      {locationData?.data?.map(location => (
                        <option key={location.id} value={location.id}>{location.name}</option>
                      ))}
                    </select>
                 </div>
                 
                </div>
                <div className="col-select d-none d-sm-block">
                  <button className="smart-phone"><span className="new">New</span>  <Image src="/img/smarthone-icon.svg" height={20} width={20} alt="icon" /> Download App</button>
                </div>
                <div className="col-select d-none d-sm-block">
                <Link href="/list-property">
                  <button className="smart-phone"><span className="free">Free</span> + Post Property</button>
                  </Link>
                </div>
                <div className="col-select">
               <div className="d-flex smart-phone bo-ra-full align-items-center justify-content-center">
                <Image onClick={opensidebar} className="pointer me-2" src="/img/menu.svg" alt="menu" height={28} width={28}  />
              {token ?   <Image onClick={handleShowfilter} className="pointer" src="/img/user.svg" alt="user" height={28} width={28} /> :   
              <Image className="pointer" src="/img/user.svg" alt="user" height={28} width={28} />}
              

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

export default Header;
