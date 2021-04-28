import React from 'react';
import styled from 'styled-components';

function CategoryLocation({ categoryList, clickId }) {
  console.log(categoryList);
  return (
    <LocationWrap>
      <Location>가구</Location>
      <Location>{categoryList && categoryList[clickId].name}</Location>
    </LocationWrap>
  );
}

const LocationWrap = styled.ul`
  display: flex;
  margin-bottom: 20px;
`;

const Location = styled.li`
  & + &::before {
    margin: 0 10px;
    color: #424242;
    content: '>';
  }
`;
export default CategoryLocation;
