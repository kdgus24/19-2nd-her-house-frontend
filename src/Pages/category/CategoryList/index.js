import React from 'react';
import styled from 'styled-components';
import CategoryListItem from './CategoryListItem';

function CategoryList({ categoryList, onChangeClickId }) {
  return (
    <CategoryListContainer>
      <CategoryListWrap>
        <h1>가구</h1>
        <CategoryListItem
          categoryList={categoryList}
          onChangeClickId={onChangeClickId}
        />
      </CategoryListWrap>
    </CategoryListContainer>
  );
}

const CategoryListContainer = styled.div`
  width: 269px;
  padding: 0 10px;
`;

const CategoryListWrap = styled.section`
  max-width: 160px;
  h1 {
    margin-bottom: 27px;
    font-size: 20px;
    font-weight: 700;
  }
`;

export default CategoryList;
