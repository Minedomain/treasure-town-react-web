import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom';
import {IoIosAddCircle} from 'react-icons/io'
import {AiOutlineQuestionCircle} from 'react-icons/ai'
import {HiOutlineCheckCircle} from 'react-icons/hi'

export const Nav = styled.nav`
background: rgba(0,0,0,0.7);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom: 2px solid gray;
padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

export const TitleIcon = styled.img`
  height: 55px;
  width: 55px;
  object-fit: contain;
  min-height: 30px;
  min-width: 30px;
  display: flex;
  float: left;


  @media screen and (max-width: 960px) {
    height: 40px;
    width: 40px;
    
  }
  @media screen and (max-width: 560px) {
    height: 30px;
    width: 30px;
    
  }
`;

export const HomeTitle = styled.h1`
  color: #fff;
  font-size: 18px;
  margin-left: 5px;

  @media screen and (max-width: 960px) {
    font-size: 16px;
  }
  @media screen and (max-width: 560px) {
    font-size: 14px;
  }
`;

//BURGER =======================================


export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  margin-left: 90%;
  float: left;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: white;
    margin-bottom: 4px;
    border-radius: 5px;
    
  }
  @media (max-width: 768px) {
    position: relative;
    display: flex;
    z-index: 4;
  }
`;

//MENU LINK =============================

export const Menu = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
    
  }



`;

export const MenuLink = styled(LinkR) `
padding: 1rem 2rem;
cursor: pointer;
text-align: center;
text-decoration: none;
color: white;
font-size: large;
font-weight: bold;
transition: all 0.2s ease-in;

&:hover {
    color: #DDB376;
}

`;




