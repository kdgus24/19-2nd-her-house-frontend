import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/theme';
import CategoryContent from './CategoryContent';
import CategoryList from './CategoryList';
import CATEGORY_LIST from './mockData';
import API_URL from '../../config';

function Category() {
  const [clickId, setClickId] = useState(0);
  const [categoryList, setCategoryList] = useState([]);
  const onChangeClickId = index => {
    setClickId(index);
  };

  useEffect(() => {
    fetch(`${API_URL}/store/category`)
      .then(res => res.json())
      .then(data => {
        setCategoryList(data.category_lists);
      });
  }, []);

  return (
    <CategoryFeedContainer>
      <Nav>Nav자리</Nav>
      <CategoryFeedWrap>
        <CategoryList
          categoryList={categoryList}
          onChangeClickId={onChangeClickId}
        ></CategoryList>
        <CategoryContent
          categoryList={categoryList}
          clickId={clickId}
        ></CategoryContent>
      </CategoryFeedWrap>
    </CategoryFeedContainer>
  );
}

const Nav = styled.div`
  height: 128px;
  width: 100%;
  color: white;
  background-color: black;
`;

const CategoryFeedContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const CategoryFeedWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 1136px;
  margin: 0 182px;
`;

export default Category;
