import React from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IconMenu } from '@/components/common/IconMenu';
import { MainCountdown } from '@/components/common/index/MainCountdown';
import 'swiper/css';
import 'swiper/css/pagination';

type CountInfo = {
  departureTime: Date;
  hasDeparted: boolean;
};

export const Home = () => {
  const createDate = (hours: number, minutes: number): Date => {
    const newDate: Date = new Date(2022, 4 - 1, 25, hours, minutes);
    return newDate;
  };

  const countInfoList: CountInfo[] = [
    { departureTime: createDate(9, 1), hasDeparted: true },
    { departureTime: createDate(10, 1), hasDeparted: false },
    { departureTime: createDate(11, 1), hasDeparted: false },
    { departureTime: createDate(12, 1), hasDeparted: false },
    { departureTime: createDate(13, 1), hasDeparted: false },
    { departureTime: createDate(14, 1), hasDeparted: false },
    { departureTime: createDate(15, 1), hasDeparted: false },
    { departureTime: createDate(16, 1), hasDeparted: false },
    { departureTime: createDate(17, 1), hasDeparted: false },
    { departureTime: createDate(18, 1), hasDeparted: false },
  ];

  return (
    <>
      <Swiper
        centeredSlides={true}
        direction="vertical"
        modules={[Pagination]}
        pagination={{
          clickable: false,
        }}
        slidesPerView={'auto'}
        spaceBetween={30}
      >
        {countInfoList.map((info, index) => {
          return (
            <SwiperSlide key={index}>
              <MainCountdown departureTime={info.departureTime} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <IconMenu isTopPage={true} />
    </>
  );
};
