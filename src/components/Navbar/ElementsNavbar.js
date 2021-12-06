import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom';
import {IoIosAddCircle} from 'react-icons/io'
import {AiOutlineQuestionCircle} from 'react-icons/ai'
import {HiOutlineCheckCircle} from 'react-icons/hi'

export const Nav = styled.nav`
  background: rgba(0,0,0,0.7);
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  min-width: 280px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom: 2px solid gray;
  margin-top: -70px;
  
  @media screen and (max-width: 1060px) {
      transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 15px;
`;

export const HomeDiv = styled.div`
  flex: 1;
  display: flex;
`;

export const Home = styled(LinkR)`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  border: none;
`;

export const TitleIcon = styled.img`
  height: 55px;
  width: 55px;
  object-fit: contain;
  min-height: 30px;
  min-width: 30px;

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


export const Hamburger = styled.div `
height: 55px;
width: 55px;
object-fit: contain;
min-height: 30px;
min-width: 30px;

@media screen and (max-width: 960px) {
  height: 40px;
  width: 40px;
}
@media screen and (max-width: 560px) {
  height: 30px;
  width: 30px;
}
`;


//MENU LINK =============================

export const Menu = styled.div `
display: flex;
justify-content: space-between;
align-items: center;
position: relative;
margin-right: 28%;


`;

export const MenuLink = styled(LinkR) `
padding: 1rem 2rem;
cursor: pointer;
text-align: center;
color: white;
font-size: large;
font-weight: bold;
transition: all 0.2s ease-in;

&:hover {
    color: #DDB376;
}


`;






