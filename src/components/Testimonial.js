import React, { useRef } from "react";
import { IMAGES } from "../constants/theme";
import { Swiper, SwiperSlide } from "swiper/react";
import circlebig from "../assets/images/pattern/circle-big.svg";
import circlebig2 from "../assets/images/pattern/circle-2.svg";

const testimonials = [
  {
    img: IMAGES.largeTestimonialPic1,
    name: "Sarah Johnson",
    role: "Fitness Enthusiast",
    rating: 5,
    text: "When I started working with Darlington in 2023, I was overweight, and constantly tired. He tailored my workouts and diet to my needs. Years later, I've not only lost weight but gained strength, energy, and a new sense of self. Darlington genuinely cares about his clients—he doesn't just train you, he walks every step of the journey with you. I'm forever grateful!",
  },
  {
    img: IMAGES.largeTestimonialPic2,
    name: "Michael Chen",
    role: "Marathon Runner",
    rating: 5,
    text: "I started training with Darlington in early 2024. As someone in my late 40s, I was looking to lose fat, improve mobility, and take better care of my heart health. I was hesitant at first, but Darlington immediately made me feel comfortable. He’s incredibly knowledgeable and adjusts every session to suit my abilities while still pushing me to improve. I’ve already lost weight, feel more flexible, and even my doctor is impressed with my progress. Darlington is not just a trainer—he’s a partner in your health journey",
  },
  {
    img: IMAGES.largeTestimonialPic5,
    name: "David Wilson",
    role: "CEO",
    rating: 5,
    text: "Working with DC has completely transformed not only my body, but my confidence and my outlook on fitness. When I first walked into our sessions, I was self-conscious about my midsection and felt stuck in a cycle of workouts that never seemed to deliver the results I craved. DC took the time to learn my goals, my struggles, and even my schedule, then crafted a personalized training plan that challenged me without ever overwhelming me.",
  },
  {
    img: IMAGES.largeTestimonialPic3,
    name: "Emma Rodriguez",
    role: "Busy Mom",
    rating: 4,
    text: "I was lean but wanted to build a stronger, more defined body—especially a six-pack. I began training with Darlington in 2023, and it’s one of the best decisions I’ve made. His programming is spot-on, progressive, and challenging in the best way. He’s incredibly dedicated, and you can tell he lives and breathes fitness. He also spent time explaining how to align my meals with my training goals. Now, not only do I have the six-pack I wanted, but I also understand how to maintain it. Darlington is a coach who really knows his stuff",
  },
  {
    img: IMAGES.largeTestimonialPic4,
    name: "David Wilson",
    role: "CEO",
    rating: 5,
    text: "I didn’t want to lose weight—I just wanted to maintain my figure, stay flexible, and keep my cardiovascular health in check. In 2024, I started working with Darlington, and it’s been the best decision. He listened to what I needed, designed a balanced plan, and made sure I felt empowered throughout. His friendly nature makes training enjoyable, and his focus on nutrition has helped me feel stronger and more balanced in everyday life.",
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
    return Array(count)
      .fill()
      .map((_, i) => (
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
                  <img
                    src={testimonial.img}
                    alt={`${testimonial.name}, ${testimonial.role}`}
                  />
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

      <img
        className="svg-shape rotate-360"
        src={circlebig}
        alt="Decorative circle"
      />
      <img
        className="svg-shape-2 rotate-360"
        src={circlebig2}
        alt="Decorative circle"
      />
    </div>
  );
};

export default Testimonial;
