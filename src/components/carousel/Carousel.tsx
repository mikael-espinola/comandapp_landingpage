"use client";
import Image from "next/image";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const images = [
  "/photo-01.jpg",
  "/photo-02.jpg",
  "/photo-03.jpg",
  "/photo-04.jpg",
  "/photo-05.jpg",
];

export default function Carousel() {
  return (
    <div className="w-full max-w-2xl mx-auto rounded-2xl overflow-hidden my-4">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
        loop
        className="rounded-2xl"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              width={300}
              height={800}
              className="mx-auto object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
