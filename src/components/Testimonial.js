import React, { useRef } from "react";
import { IMAGES } from "../constants/theme";
import { Swiper, SwiperSlide } from "swiper/react";
import circlebig from "../assets/images/pattern/circle-big.svg";
import circlebig2 from "../assets/images/pattern/circle-2.svg";

const testimonials = [
  {
    img: IMAGES.largeTestimonialPic7,
    name: "Sarah Johnson",
    role: "Fitness Enthusiast",
    rating: 5,
    text: "The trainers here completely transformed my approach to fitness. In just 3 months, I've lost 15kg and gained so much confidence. Their personalized nutrition plan made all the difference!"
  },
  {
    img: IMAGES.largeTestimonialPic7,
    name: "Michael Chen",
    role: "Marathon Runner",
    rating: 5,
    text: "As an athlete, I needed specialized training. The team designed a program that improved my endurance by 30% and helped me qualify for Boston. Their expertise is unmatched!"
  },
  {
    img: IMAGES.largeTestimonialPic7,
    name: "Emma Rodriguez",
    role: "Busy Mom",
    rating: 4,
    text: "The home training sessions have been a lifesaver! With three kids, I can't always get to the gym. My trainer brings the workout to me and keeps me accountable. Down 2 dress sizes!"
  },
  {
    img: IMAGES.largeTestimonialPic7,
    name: "David Wilson",
    role: "CEO",
    rating: 5,
    text: "The corporate wellness program has revolutionized our workplace. My energy levels are through the roof, and my executive team has never been more productive. Worth every penny."
  },
];

const avtarImg = [
  { img: IMAGES.avatarLargePic1, className: "avatar1", alt: "Happy client 1" },
  { img: IMAGES.avatarLargePic2, className: "avatar2", alt: "Happy client 2" },
  { img: IMAGES.avatarLargePic5, className: "avatar4", alt: "Happy client 3" },
  { img: IMAGES.avatarLargePic3, className: "avatar6", alt: "Happy client 4" },
];

const Testimonial = () => {
  const swiperRef = useRef(null);

  const renderStars = (count) => {
    return Array(count).fill().map((_, i) => (
      <li key={i}>
        <i className="fa-solid fa-star"></i>
      </li>
    ));
  };

  return (
    <div className="testimonial-section">
      <div className="swiper swiper-fade testimonial-swiper swiper-btn-lr">
        <Swiper
          className="swiper-wrapper"
          loop={true}
          speed={1300}
          ref={swiperRef}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide className="swiper-slide" key={index}>
              <div className="testimonial-1 testimonial-left">
                <div className="testimonial-pic wow fadeInUp">
                  <img src={testimonial.img} alt={`${testimonial.name}, ${testimonial.role}`} />
                </div>
                <div className="testimonial-info wow fadeInUp">
                  <ul className="testimonial-rating justify-content-start wow fadeInUp">
                    {renderStars(testimonial.rating)}
                  </ul>
                  <blockquote className="testimonial-text">
                    "{testimonial.text}"
                  </blockquote>
                  {/* <h4 className="testimonial-name">{testimonial.name}</h4>
                  <span className="testimonial-position text-primary">
                    {testimonial.role}
                  </span> */}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        <div
          onClick={() => swiperRef.current.swiper.slidePrev()}
          className="testimonial-button-prev btn-prev"
          aria-label="Previous testimonial"
        >
          <i className="fa-solid fa-arrow-left"></i>
        </div>
        <div
          onClick={() => swiperRef.current.swiper.slideNext()}
          className="testimonial-button-next btn-next"
          aria-label="Next testimonial"
        >
          <i className="fa-solid fa-arrow-right"></i>
        </div>
      </div>

      {avtarImg.map((item, index) => (
        <div className={item.className} key={index}>
          <img src={item.img} alt={item.alt} />
        </div>
      ))}
      
      <img className="svg-shape rotate-360" src={circlebig} alt="Decorative circle" />
      <img className="svg-shape-2 rotate-360" src={circlebig2} alt="Decorative circle" />
    </div>
  );
};

export default Testimonial;