"use client";

import globalCSS from "../../global.module.css";
import styles from "./styles.module.css";
// import { Swiper, SwiperSlide } from "swiper/react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import { useEffect, useRef } from "react";
import Image from "next/image";
import image1 from "../../../assets/Renate.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { ReactNode } from "react";
import { Button } from "@/components/Button";
import { AccentedSpan } from "@/components/AccentedSpan";

export const Jobs = ({
  title,
  span,
  description,
  image,
  slides,
  buttons,
  isReverse = false,
}: {
  title?: string;
  span?: string;
  description?: string;
  image?: {
    src: string;
    alt: string;
  };
  buttons?: [
    {
      title: string;
      href?: string;
      onClick?: () => void;
    }
  ];
  isReverse?: boolean;
  slides?: {
    isImage?: boolean;
    alt: string;
    imageUrl?: string;
    children?: ReactNode;
  }[];
}) => {
  //   const containerRef = useRef(null);
  //   const panelsRef = useRef([]);

  //   useEffect(() => {
  //     const sections = panelsRef.current;

  //     gsap.to(sections, {
  //       xPercent: -137.5 * (sections.length - 1),
  //       //   -133 * (sections.length - 1),
  //       ease: "none",
  //       scrollTrigger: {
  //         trigger: containerRef.current,
  //         pin: true,
  //         scrub: 2,
  //         end: () => "+=" + containerRef.current.offsetWidth,
  //       },
  //     });
  //   }, []);

  return (
    <section>
      <div className={globalCSS.container}>
        <div className={globalCSS.vertical_padding}>
          <div
            className={`${styles.content_container} ${
              isReverse && styles.reverse
            }`}
          >
            <div className={styles.column}>
              {image && (
                <Image
                  className={styles.img}
                  src={image?.src ?? image1}
                  alt={image?.alt}
                />
              )}
              {slides && (
                <Swiper
                  spaceBetween={10}
                  slidesPerView={1}
                  onSlideChange={() => console.log("slide change")}
                  onSwiper={(swiper) => console.log(swiper)}
                >
                  {slides.map((slide, index) => (
                    <SwiperSlide key={`slide-${index}`}>
                      {slide?.isImage ? (
                        <Image
                          className={styles.img}
                          src={image1}
                          // src={slide.imageUrl}
                          alt={slide?.alt}
                        />
                      ) : (
                        slide?.children
                      )}
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
            </div>
            <div className={styles.column}>
              <div className={styles.contnet}>
                {span && <AccentedSpan label={span} />}
                {title && <h2>{title}</h2>}
                {description && <p>{description}</p>}
                {buttons && (
                  <div>
                    {buttons.map((button, index) => (
                      <Button key={`button-${index}`}>{button.title}</Button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className={styles.container} ref={containerRef}>
        {[1, 2, 3].map((num, i) => (
          <div
            className={styles.panel}
            ref={(el) => (panelsRef.current[i] = el)}
            key={num}
          >
            <div className={styles.stickyImageWrap}>
              <div className={styles.stickyImage}>
                <Image src={image1} alt="Re" />
              </div>
            </div>
            <div className="content">
              <h1>Panel {num}</h1>
              <p>Content inside panel {num}.</p>
            </div>
          </div>
        ))}
      </div> */}
    </section>
  );
};
