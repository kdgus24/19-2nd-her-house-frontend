import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BiSearch, BiCart } from 'react-icons/bi';
import { BsBookmark, BsBell } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { MdPhotoCamera } from 'react-icons/md';
import { AiOutlineDown } from 'react-icons/ai';
import NAV_DATA from './navdata';

const Nav = () => {
  return (
    <div>
      <HeadNav>
        <NavBar>
          <NavMain>
            {/* //왼쪽 요소들 */}
            <div>
              <Link to="/">
                <MainLogo alt="오늘의 집" src="/images/logo.png" />
              </Link>
            </div>
            <NavMainContent>
              <Link className="mainContent-menu" to="/">
                커뮤니티
              </Link>
            </NavMainContent>
            <NavMainContent>
              <Link className="mainContent-menu" to="/">
                스토어
              </Link>
            </NavMainContent>
            <NavMainContent>
              <Link className="mainContent-menu" to="/">
                인테리어 시공
              </Link>
            </NavMainContent>
          </NavMain>
          {/* //오른쪽 요소들 */}
          <NavMain>
            <div>
              <form className="form">
                <input placeholder="스토어검색" type="text" required />
                <button type="submit">
                  <BiSearchs className="inputIcon"></BiSearchs>
                </button>
                <button type="submit">
                  <MdPhotoCameras></MdPhotoCameras>
                </button>
              </form>
            </div>
            <div>
              <Link to="/">
                <BsBookmark className="Nav-Aside"></BsBookmark>
              </Link>
            </div>
            <div>
              <Link to="/">
                <BsBell className="Nav-Aside"></BsBell>
              </Link>
            </div>
            <div>
              <Link to="/">
                <BiCart className="Nav-Aside"></BiCart>
              </Link>
            </div>
            <div>
              <Link to="/">
                <CgProfile className="Nav-Aside"></CgProfile>
              </Link>
            </div>
            <div>
              <button className="writeBtn" type="button">
                글쓰기
                <AiOutlineDown className="AiOutlineDown"></AiOutlineDown>
              </button>
            </div>
          </NavMain>
        </NavBar>
      </HeadNav>
      <div>
        <MainCategory>
          {NAV_DATA.map(item => {
            return (
              <li>
                <Link className="MainCategory_Link" to="/">
                  {item}
                </Link>
              </li>
            );
          })}
        </MainCategory>
      </div>
    </div>
  );
};
const HeadNav = styled.header`
  border-bottom: 1px solid #dbdbdb;
`;
const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  margin: 0 7%;
  padding: 10px 40px;
`;
const NavMain = styled.div`
  display: flex;
  align-items: center;
  .form {
    position: relative;
    top: 10px;
    padding: 8px 9px 10px 39px;
    width: 258px;
    height: 40px;
    margin-right: 20px;
    line-height: 20px;
    border: 1px solid #dbdbdb;
    border-radius: 3px;
    background-color: #fff;
    color: #424242;
    input {
      font-size: 15px;
      &::placeholder {
        color: gray;
      }
    }
  }
  .Nav-Aside {
    width: 24px;
    height: 24px;
    vertical-align: -25px;
    margin-right: 20px;
    color: #757575;
  }
  .writeBtn {
    padding: 10px 0 10px;
    width: 100px;
    height: 40px;
    line-height: 22px;
    vertical-align: -25px;
    border-radius: 3px;
    color: #ffffff;
    background-color: ${props => props.theme.mainPink};
    font-size: 16px;
    font-weight: bold;
    .AiOutlineDown {
      margin-left: 8px;
      vertical-align: -2px;
    }
  }
`;

const BiSearchs = styled(BiSearch)`
  position: absolute;
  left: 10px;
  bottom: 5px;
  width: 24px;
  height: 24px;
  color: #757575;
`;

const MdPhotoCameras = styled(MdPhotoCamera)`
  position: absolute;
  bottom: 5px;
  right: 10px;
  width: 24px;
  height: 24px;
  color: #757575;
`;
const NavMainContent = styled.div`
  margin-right: 30px;
  .mainContent-menu {
    position: relative;
    top: 5px;
    padding: auto 6px;
    color: #424242;
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
    &:hover {
      color: ${props => props.theme.mainPink};
    }
  }
`;
const MainLogo = styled.img`
  width: 150px;
  height: 45px;
  margin-right: 30px;
`;

const MainCategory = styled.ul`
  display: flex;
  align-items: center;
  margin: 20px 9%;
  color: #424242;
  font-size: 15px;
  li {
    margin-right: 15px;
    .MainCategory_Link {
      margin: 8px 4px;
      padding: 6px 8px 4px;
      color: #424242;
      font-size: 15px;
      font-weight: 500;
      &:hover {
        color: ${props => props.theme.mainPink};
      }
    }
  }
`;

export default Nav;
