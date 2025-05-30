import React from 'react';
import Navbar from '../../components/Navbar';
import HeroCard from '../../components/HeroCard';
import Footer from '../../components/Footer';
import Event from './Event';
import Lomba from './Lomba';
import ContactUs from '../ContactUs';
import TimelineUmum from '../TimelineUmum';

const Home = () => {
  return (
    <>
      <Navbar />
      <div
        className="min-h-screen flex flex-col justify-start items-center pt-20"
        id="hero"
      >
        <HeroCard Logo={'/LOGO_ITTODAY_2025.webp'} />


        <div
          className="w-full px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 font-dm-sans"
          id="about"
        >
          <div className="max-w-7xl mx-auto bg-[#4D3159] rounded-3xl text-white shadow-[0_0_60px_#AC6871] py-12 px-6 mt-12 mb-20">
            <p className="font-dm-sans text-base md:text-lg leading-relaxed text-justify text-pink-100 drop-shadow-[0_0_10px_#ffffff77]">
              <strong>IT Today</strong> merupakan megaproker yang diselenggarakan oleh Himpunan Mahasiswa Ilmu Komputer (HIMALKOM) IPB dan Departemen Ilmu Komputer IPB yang sudah berlangsung sebanyak 20 kali sejak diselenggarakan pertama
              kali pada tahun 2003. Acara tahunan ini memiliki serangkaian acara berupa seminar komunitas, workshop, kompetisi, seminar nasional, dan awarding yang dikemas secara menarik. Dengan beragam kegiatan yang melibatkan banyak
              mahasiswa dan masyarakat umum, acara ini menjadi wadah penting untuk pengembangan pengetahuan dan keterampilan di bidang ilmu komputer serta teknologi.
            </p>
          </div>
        </div>
      </div>
      <div id="event">
        <Event />
      </div>
      <div id="competition">
        <Lomba />
      </div>
      <div id="timeline">
        <TimelineUmum />
      </div>
      <div id="contact">
        <ContactUs />
      </div>
      <Footer />
    </>
  );
};

export default Home;
