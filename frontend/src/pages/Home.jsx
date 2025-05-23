import React from 'react';

import heroImg01 from '../assets/images/hero-Img01.png';
import heroImg02 from '../assets/images/hero-Img02.png';
import heroImg03 from '../assets/images/hero-Img03.png';

import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";

import faqImg from "../assets/images/faq-img.png";

import featureImg from "../assets/images/feature-img.png";
import videoIcon from "../assets/images/video-icon.png";
import avatarIcon from "../assets/images/avatar-icon.png";

import {Link} from 'react-router-dom';
import { BsArrowRight } from "react-icons/bs";

import About from '../components/About/About';
import ServiceList from '../components/Services/ServiceList';
import DoctorList from '../components/Doctors/DoctorList';
import FaqList from '../components/faq/FaqList';
import Testimonial from "../components/Testimonial/Testimonial.jsx"

const Home = () => {
  return( <>
  {/* ====== Hero section ====== */}

  <section className="hero_section pt-[60px] 2xl:h-[800px]">
    <div className="container">
      <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
       
       
        {/* ====== hero content ====== */}
      <div>
        <div className="lg:w-[570px]">
          <h1 className="text-[36px] leading-[56px] text-headingColor font-[700] md:text-[60px] md:leding-[70px]">
            We help patients live a healthy, longer life.
            </h1>
          <p className=" text_para">
          hjchbvyabfvugdvvhb vbhcvbhaffvb hvbashifvb hfbfvhiafvh hfouhf bsiubhjgg  hdbfvybfvbg bufgbjfgb hn bxhvfv bv wrhfv hyfbwrry
          ghsdvyfv hfvbhffgvyrfvbfvgr vfvfi fgvvyfvbf cereghf vgsv vgvryrfgjdsv sd'
          fvvvyufvsgvvsgv vjgsvg fvvbsvhvsdvjvcgbsdbcvsdcvgsd cbvdcsdvbvcgvddgvveysbv sdv
          </p>

          <button className="btn">Request an Appointment</button>          
          </div>
          

          {/**=====Hero counter*/}
          <div className= "mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
            <div>
            <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-hedingColor">
               10+
             </h2>
             <span className= "w-[80px] h-2 bg-yellowColor rounded-full block mt-[-12px]"></span>

             <p className="taxt_para"> Years of Experience </p>
             </div>
           

            <div>
            <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-hedingColor">
               5+
             </h2>
             <span className= "w-[60px] h-2 bg-purpleColor rounded-full block mt-[-12px]"></span>

             <p className="taxt_para"> Clinic location </p>
             </div>

              <div>
            <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-hedingColor">
               150%
             </h2>
             <span className= "w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-12px]"></span>

             <p className="taxt_para">Patient Satisfaction </p>
             </div>


             </div>
         </div>

<div className="flex gap-[30px] justify-end">
  <div>
    <img className="w-full" src={heroImg01} alt="" />
  </div>
  <div className="mt-[30px]">
<img src={heroImg02} alt="" className="w-full mb-[30px]" />
<img src={heroImg03} alt="" className="w-full" />
  </div>
</div>


        </div>
      </div>
    
  </section>
 
{ /* ====== Hero section end =======*/ }
<section>
<div className="container">
  <div className= "lg:w-[470px] mx-auto">
    <h2 className="heading text-center">
      Providing the best madical services
    </h2>
    <p className="text_para text-center">World-class care for everyone. Our helth System offers unmatched, expert health care.
    </p>
  </div>

<div className="grid grid-cols-l md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
  

{/*1*/}

<div className="py-[30] px-5">
    <div className="flex items-center justify-center">
      <img src={icon01} alt="" />
    </div>

    <div className="mt-[30px]">
      <h2  className="text-[26px] leading-9 text-headingColor font-[700] text-center">
        Find a Doctor
        </h2>
    
    <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
      World-class care for everyone. Our helth System offers unmatched, expert health care.
    </p>
    <Link to='/doctors' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] 
    mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor">
    <BsArrowRight className="group-hover:text-white w-6 h-5"/>
    </Link>
    </div>
  </div>

{/*2*/}

<div className="py-[30] px-5">
    <div className="flex items-center justify-center">
      <img src={icon02} alt="" />
    </div>

    <div className="mt-[30px]">
      <h2  className="text-[26px] leading-9 text-headingColor font-[700] text-center">
        Find a Location
        </h2>
    
    <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
      World-class care for everyone. Our helth System offers unmatched, expert health care.
    </p>
    <Link to='/doctors' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] 
    mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor">
    <BsArrowRight className="group-hover:text-white w-6 h-5"/>
    </Link>
    </div>
  </div>

{/*3*/}
  <div className="py-[30] px-5">
    <div className="flex items-center justify-center">
      <img src={icon03} alt="" />
    </div>

    <div className="mt-[30px]">
      <h2  className="text-[26px] leading-9 text-headingColor font-[700] text-center">
              Book Appointment
        </h2>
    
    <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
      World-class care for everyone. Our helth System offers unmatched, expert health care.
    </p>
    
    <Link to='/doctors' 
    className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] 
    mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor">
    <BsArrowRight className="group-hover:text-white w-6 h-5"/>
    </Link>

    </div>
  </div>



</div>

</div>
</section>

{/* About Section */}
<About />


{/* Service Scetion start*/}

<section>
  <div className="container">
    <div className="xl:w-[470px] mx-auto">
      <h2 className="heading text-center">Our medical services</h2>
    <p className="text_para text-center">
      World-class care for everyone. Our health System offers unmatched,
      expert helth care.
    </p>
    </div>

<ServiceList />
  </div>
</section>

{/* feature section start */}
<section>
  <div className="container">
  <div className="flex items-center justify between flex-col lg:flex-row">
         
     {/* feature content */}

          <div className="xl:w-[670px]">
            <h2 className="heading">Get virtual treatment <br /> anytime.</h2>
          
          <ul className="pl-4">
            <li className="text_para">
              1. Schedule the appointment directlty.
            </li>

            <li className="text_para">
             2. Search for your physician here, and content their office.
            </li>

            <li className="text_para">
             3. View our physician who are accepting new parients, 
             use the online scheduling tool to select an appointment time. 
            </li>
          </ul>
              <Link to="/">
              <button className="btn">Learn more </button>
              </Link>
          </div>

          {/* feature img */}

          <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
            <img src={featureImg} className="w-3/4" alt="" />

          <div className= " w-[150px] lg:w[240px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded -[10px]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[6px] lg:gap-3">
                <p className="text-[10px] leading-[10px] lg:landing-5 text-headingColor font-[600]">
                  Tue, 24
                  </p>

                  <p className="text-[10px] leading-[10px] lg:landing-5 text-headingColor font-[300]">
                  10.00 AM
                  </p>
              </div>

              <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-cemter bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
                <img src={videoIcon} alt="" />
              </span>
            </div>
            
            <div className="w-[65px] lg:w-[96px] bg:[#ccf0f3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:leading-4 text-irisBlueColor  font-[500] mt-2 lg:mt-4">
              Consultation
            </div>
            <div className="flex item-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
              <img src={avatarIcon} alt="" />
              <h4 className="text-[10px] leading-3 lg:text-[16px]  lg:leading-[22px] front-[700] text-headingColor">
                Wayne Collins
              </h4>
            </div>

          </div>
          </div>
  </div>
  </div>
</section>


      {/* Our greate doctors       */}

      <section>
        <div className="container">
             <div className="xl:w-[470px] mx-auto">
      <h2 className="heading text-center">Our Great Doctors </h2>
    <p className="text_para text-center">
      World-class care for everyone. Our health System offers unmatched,
      expert helth care.
    </p>
    </div>
    
<DoctorList />
        </div>
      </section>

      {/* fqe section */}

<section>
<div className="container">
<div className="flex justify-between gap-[50px] lg:gap-0">
<div className="w-1/2 hidden md:block">
<img src={faqImg} alt="" />
</div>

<div className="w-full md:w-1/2">
<h2 className="heading">
  Most question by our beloved patients
</h2>

<FaqList />
</div>

</div>
</div>
</section>

{/* testimonial */}

<section>
<div className="container">
<div className="xl:w-[470px] mx-auto">
<h2 className="heading text-center">What our patient say </h2>
<p className="text_para text-center">
World-class care for everyone. Our health System offers unmatched,
expert health care.
</p>
</div>

<Testimonial />

</div>
</section>

  </>
  );   
};

export default Home;