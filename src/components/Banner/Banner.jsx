import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const Banner = () => {
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#24dc7a",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={30}
        effect={"fade"}
        paceBetween={30}
        navigation={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade,  Autoplay]}
        className="mySwiper"
        centeredSlides={true}
      >
        <SwiperSlide>
          <img
            className="w-full h-[200px] md:h-[750px] object-fill"
            src="https://i.ibb.co/y8MLqnr/LG-TV-BANNER-10-Years-1600x800-1.png"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="w-full h-[200px] md:h-[750px] object-fill"
            src="https://i.ibb.co/r0bMR5t/macbook-banner2.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[200px] md:h-[750px] object-fill"
            src="https://i.ibb.co/fGW01cF/s21.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[200px] md:h-[750px] object-fill"
            src="https://i.ibb.co/f9MPXWg/Xbox-Series-X-banner-scaled.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[200px] md:h-[750px] object-fill"
            src="https://i.ibb.co/RBHNhfk/ps5-1.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
    
  );
};

export default Banner;
