// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
// import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

//custom css
import styles from "../../styles/component/TopBanner.module.scss";

const TopBanner = () => {
  return (
    <div className={styles.banner_container}>
      <Swiper
        allowTouchMove= {false}
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className={styles.mySwiper}
      >
        <SwiperSlide>
          <img
            className={styles.banner_img}
            src="/assets/images/banner3.jpg"
            alt="banner"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className={styles.banner_img}
            src="/assets/images/banner4.jpg"
            alt="banner"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className={styles.banner_img}
            src="/assets/images/banner5.jpg"
            alt="banner"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className={styles.banner_img}
            src="/assets/images/banner6.jpg"
            alt="banner"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TopBanner;
