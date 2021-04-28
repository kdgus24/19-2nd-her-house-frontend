import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import styled from 'styled-components';

function CategoryCarousel() {
  return (
    <CarouselWrap>
      <Carousel showThumbs={false}>
        <CarouselImgBox>
          <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/category_banners/159557670268413438.jpg?gif=1&w=1700&webp=1" />
        </CarouselImgBox>
        <CarouselImgBox>
          <img src="http://react-responsive-carousel.js.org/assets/6.jpeg" />
        </CarouselImgBox>
        <CarouselImgBox>
          <img src="http://react-responsive-carousel.js.org/assets/6.jpeg" />
        </CarouselImgBox>
      </Carousel>
    </CarouselWrap>
  );
}
const CarouselImgBox = styled.div`
  img {
    width: 100%;
    height: 100%;
  }
`;

const CarouselWrap = styled.div`
  width: 684px;
  height: 250px;
`;

export default CategoryCarousel;
