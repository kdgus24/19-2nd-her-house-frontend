import React from 'react';
import styled from 'styled-components';
import CategoryCarousel from './CategoryCarousel';
import CategoryLocation from './CategoryLocation';

function CategoryContent({ categoryList, clickId }) {
  return (
    <CategoryContentWrap>
      <CategoryLocation categoryList={categoryList} clickId={clickId} />
      <CategoryCarousel />
    </CategoryContentWrap>
  );
}

const CategoryContentWrap = styled.div`
  margin: 0 10px;
  background-color: tomato;
`;

export default CategoryContent;
