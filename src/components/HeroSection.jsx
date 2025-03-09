import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const heroImages = [
  { src: "/images/swipe.webp", caption: "Find your perfect dream home today" },
  { src: "/images/swipe1.jpeg", caption: "Experience comfort and elegance" },
  { src: "/images/swipe2.webp", caption: "Modern homes designed for you" },
  { src: "/images/swipe3.jpeg", caption: "Exclusive properties at great prices" },
  { src: "/images/swipe4.jpeg", caption: "Your journey to homeownership starts here" },
];

const HeroSection = () => {
  return (
    <div className="relative flex justify-center items-center w-full py-4 z-10 mt-16"> {/* Add mt-16 to account for Navbar height */}
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation
        loop={true}
        grabCursor={true}
        className="w-full h-[653px] mx-auto rounded-lg overflow-hidden"
      >
        {heroImages.map((item, index) => (
          <SwiperSlide key={index} className="relative w-full h-full">
            <img
              src={item.src}
              alt="Property"
              className="w-full h-[653px] object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center px-4">
              <h2 className="text-xl md:text-2xl font-bold">{item.caption}</h2>
              <button className="mt-4 px-6 py-3 bg-[#b99a45] text-white font-semibold rounded-lg hover:bg-[#c7ae6a] transition">
                Discover More
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;