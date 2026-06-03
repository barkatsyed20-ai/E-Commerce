import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaStar } from "react-icons/fa";

import Heading from "../Heading/Heading";

import Customer1 from "../../assets/customer1.jpg";
import Customer2 from "../../assets/customer2.jpg";
import Customer3 from "../../assets/customer3.jpg";
import Customer4 from "../../assets/customer4.jpg";
import Customer5 from "../../assets/customer5.jpg";

import "swiper/css";
import "swiper/css/navigation";

const Testimonials = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
        {/* Heading */}
        <Heading highlight="Customers" heading="Saying" />

        {/* Navigation Buttons */}
        <div className="flex justify-end gap-3 mt-8 mb-10">
          <button className="custom-prev w-12 h-12 rounded-full bg-zinc-100 hover:bg-orange-500 hover:text-white transition-all duration-300 flex items-center justify-center text-2xl">
            <IoIosArrowBack />
          </button>

          <button className="custom-next w-12 h-12 rounded-full bg-zinc-100 hover:bg-orange-500 hover:text-white transition-all duration-300 flex items-center justify-center text-2xl">
            <IoIosArrowForward />
          </button>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          speed={800}
          spaceBetween={25}
          autoHeight={false}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {review.map((item) => (
            <SwiperSlide key={item.id} className="h-auto">
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-zinc-100 h-[320px] flex flex-col hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                
                {/* User Info */}
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-orange-500"
                  />

                  <div>
                    <h4 className="text-lg font-bold text-zinc-800">
                      {item.name}
                    </h4>

                    <p className="text-sm text-zinc-500">
                      {item.profession}
                    </p>
                    

                    <div className="flex gap-1 mt-2 text-orange-500">
                      {[...Array(item.rating)].map((_, index) => (
                        <FaStar key={index} />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Review Text */}
                <p className="mt-6 text-zinc-600 leading-7 flex-grow">
                  "{item.para}"
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;

const review = [
  {
    id: 1,
    name: "Emily Johnson",
    profession: "Food Blogger",
    rating: 4,
    para: "FreshMart delivers freshness you can trust. The quality of their fruits, vegetables, and organic products is outstanding, and their fast delivery keeps me coming back.",
    image: Customer1,
  },
  {
    id: 2,
    name: "David Smith",
    profession: "Chef",
    rating: 4,
    para: "As a professional chef, I appreciate FreshMart's commitment to quality. Their fresh vegetables and reliable service help me serve the very best every time.",
    image: Customer2,
  },
  {
    id: 3,
    name: "Alya Zahra",
    profession: "Model",
    rating: 5,
    para: "I trust FreshMart for all my family's weekly grocery needs. Their fresh produce, convenient ordering, and prompt delivery make every shopping experience stress-free.",
    image: Customer3,
  },
  {
    id: 4,
    name: "Carlos Mendes",
    profession: "Fitness Coach",
    rating: 5,
    para: "FreshMart makes healthy living easier with their carefully curated selection of nutritious and clean-label products.",
    image: Customer4,
  },
  {
    id: 5,
    name: "Natcha Phongchai",
    profession: "Fitness Coach",
    rating: 5,
    para: "The freshness, quality, and variety at FreshMart are unmatched. Every order inspires me to make healthier choices every day.",
    image: Customer5,
  },
];