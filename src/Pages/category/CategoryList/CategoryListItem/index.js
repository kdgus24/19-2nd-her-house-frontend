import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function CategoryListItem({ categoryList, onChangeClickId }) {
  return (
    <ListItemWrap>
      {categoryList.map((list, index) => {
        return (
          <ListItem key={index}>
            <Link to="" onClick={() => onChangeClickId(index)}>
              {list.name}
            </Link>
          </ListItem>
        );
      })}
    </ListItemWrap>
  );
}

const ListItemWrap = styled.ul`
  color: #424242;
`;

const ListItem = styled.li`
  font-size: 13px;

  & + & {
    margin-top: 10px;
  }
`;

export default CategoryListItem;
