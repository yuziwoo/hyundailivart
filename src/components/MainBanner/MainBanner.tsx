import { ComponentStyle as S } from './MainBanner.styled';
import { MainBannerAPIProps } from '../../types/mainBanner';
import { Swiper as SwiperContainer, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination } from 'swiper/modules';
import MotionImg from '../motion/MotionImg';

interface MainBannerProps {
  data: MainBannerAPIProps[] | undefined;
}

const MainBanner = ({ data }: MainBannerProps) => {
  if (data === undefined) return <S.Component></S.Component>;

  return (
    <S.Component>
      <SwiperContainer
        loop={true}
        spaceBetween={0}
        slidesPerView={1}
        speed={400}
        className="swiper"
        navigation={true}
        pagination={{
          type: 'fraction',
        }}
        modules={[Navigation, Pagination]}
        breakpoints={{
          1080: {
            slidesPerView: 2.3702,
            spaceBetween: 30,
          },
          730: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }}
      >
        {data.map(({ imgURL, title, description, color }, index) => (
          <SwiperSlide key={index}>
            <S.Slide>
              <MotionImg src={imgURL} alt={title} />

              <S.Text>
                <S.Title $color={color}>{title}</S.Title>
                <S.Description $color={color}>{description}</S.Description>
              </S.Text>
            </S.Slide>
          </SwiperSlide>
        ))}
      </SwiperContainer>
    </S.Component>
  );
};

export default MainBanner;
