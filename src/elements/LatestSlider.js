import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { IMAGES } from "../constants/theme";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const dataBlog = [
  {
    image1: IMAGES.gallery0,
  },
  {
    image1: IMAGES.gallery1,
  },
  {
    image1: IMAGES.gallery2,
  },
  {
    image1: IMAGES.gallery3,
  },
  {
    image1: IMAGES.gallery4,
  },
  {
    image1: IMAGES.gallery5,
  },
  {
    image1: IMAGES.gallery6,
  },
  {
    image1: IMAGES.gallery7,
  },
  {
    image1: IMAGES.gallery8,
  },
  {
    image1: IMAGES.gallery9,
  },
  {
    image1: IMAGES.gallery10,
  },
  {
    image1: IMAGES.gallery11,
  },
  {
    image1: IMAGES.gallery12,
  },
  {
    image1: IMAGES.gallery13,
  },
  {
    image1: IMAGES.gallery14,
  },
  {
    image1: IMAGES.gallery15,
  },
  {
    image1: IMAGES.gallery16,
  },
  {
    image1: IMAGES.gallery17,
  },
  {
    image1: IMAGES.gallery18,
  },
  {
    image1: IMAGES.gallerylast,
  },
];

function LatestSlider() {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const paginationRef     = React.useRef(null);

  return (
    <div className="container">
      {/* — Heading Row — */}
      <div className="row justify-content-between align-items-center m-b10">
        <div className="col-xl-7">
          <div className="section-head text-center text-md-start">
            <h2 className="title">
              My <span>Gallery</span>
            </h2>
          </div>
        </div>
      </div>

      {/* — Gallery + Arrows — */}
      <div className="gallery-container">
        <div className="btn-prev" ref={navigationPrevRef}>
          <i className="fa-solid fa-arrow-left" />
        </div>
        <div className="btn-next" ref={navigationNextRef}>
          <i className="fa-solid fa-arrow-right" />
        </div>

        <Swiper
          className="gallery-slider"
          centeredSlides={true}
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          speed={1000}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          pagination={{
            el: paginationRef.current,
            clickable: true,
            renderBullet: (index, className) =>
              `<span class="${className}">0${index + 1}</span>`,
          }}
          modules={[Navigation, Pagination]}
          breakpoints={{
            1200: { slidesPerView: 3 },
            768:  { slidesPerView: 1.5, centeredSlides: true },
            320:  { slidesPerView: 1,   centeredSlides: true },
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
            swiper.params.pagination.el  = paginationRef.current;
          }}
        >
          {dataBlog.map((item, ind) => (
            <SwiperSlide key={ind}>
              <div className="dz-card gallery-slide">
                <div className="dz-media">
                  <img src={item.image1} alt={`Gallery item ${ind + 1}`} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* — Styles — */}
      <style jsx>{`
        .gallery-container {
          position: relative;
          padding: 20px 0;
        }
        .btn-prev,
        .btn-next {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          width: 40px;
          height: 40px;
          background: rgba(255, 129, 57, 0.9);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        .btn-prev { left: 10px; }
        .btn-next { right: 10px; }

        .gallery-slider {
          padding: 0 60px; /* gives room for arrows */
        }
        .gallery-slide {
          transition: all 0.3s ease;
          transform: scale(0.85);
          opacity: 0.7;
          filter: brightness(0.8);
        }
        .swiper-slide-active .gallery-slide {
          transform: scale(1);
          opacity: 1;
          filter: brightness(1);
          z-index: 1;
        }
        .dz-media img {
          width: 100%;
          height: auto;
          border-radius: 8px;
          box-shadow: 0 10px 30px rgba(255, 129, 57, 0.9);
        }
        .swiper-slide-active .dz-media img {
          box-shadow: 0 15px 40px rgba(255, 129, 57, 0.9);
        }
        .swiper-pagination {
          text-align: center;
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
}

export default LatestSlider;