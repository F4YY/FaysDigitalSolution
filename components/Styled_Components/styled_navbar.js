import Image from "next/image";
import styled, {css} from "styled-components";
import { HStack } from "@chakra-ui/react";
import { fadeInLeft, fadeInRight } from '@/components/Styled_Components/styled_menu';

export const StyledNavbar = styled(HStack)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  font-weight: var(--medium);
  font-family: 'poppins', sans-serif;
  letter-spacing: 0.04rem;
  color: var(--Very-dark-desaturated-blue);
  background-color: #fff;
  padding: 0.5rem 1.2rem;
  border-bottom: .3rem solid var(--Light-grayish-blue);
  z-index:1;
  @media screen and (max-width: 991px) {
    padding: 0.6rem 1.2rem;
  }
  @media screen and (max-width: 640px) {
    padding: 0.6rem .7rem;
  }
`
export const StyledImage = styled(Image)`
  display: flex;
  @media (max-width: 991px) {
    width: 220px;
    height: auto;
  }
  @media (max-width: 640px) {
    width: 190px;
    height: auto;
  }
`
export const UserName = styled.h4`
  font-size: .8rem;
  font-weight: var(--regular);
  text-align: center;
  @media screen and (max-width: 640px) {
    font-size: .5rem;
  }
`;
export const UserPicture = styled(Image)`
  display: flex;
  width: 30px;
  height:30px;
  object-fit: cover;
  object-position: center;
  aspect-ratio: 1/1;
  border-radius: 50%;
`;
export const StyledUl = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  @media (max-width: 991px) {
    justify-content: center;
  }
  @media (max-width: 640px) {
    width: 100%;
    gap: .2rem;
    margin-right: 1.5rem;
  }
`;
export const StyledUlmobile = styled(StyledUl)`
  display: flex;
  flex-direction: column;
  margin: 4rem auto 0;
`;
export const StyledLi = styled.li`
  text-decoration: none;
  &:hover {
    color: var(--darkblue);
    line-height: 105%;
  }
  ${props => props.$current && css`
    background-color: var(--white);
    box-shadow: 2px 4px 3px var(--lightblue);
    border-bottom: 2px solid var(--darkblue);
    padding: 0.4rem 0.8rem;
  `}
  @media (max-width: 991px) {
    display: none;
  }
`;
export const StyledLiMobile = styled(StyledLi)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`
export const LoginButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 1px solid;
  padding: .4rem .8rem;
  &:hover {
    color: var(--darkblue);
    border-color: var(--darkblue);
    background-color: var(--lightblue);
  }
  @media (max-width: 991px) {
    display: none;
  }
  @media (max-width: 640px) {
    display: none;
  }
`
export const LogoutButton = styled(LoginButton)`
`
export const BurgerButton = styled.div`
  display: none;
  font-size: 1.6rem;
  color: var(--darkblue);
  @media (max-width: 991px) {
    display: flex;
  }
`;
export const AnimatedBurgerButton = styled(BurgerButton)`
  opacity: ${({ $toggleMenu }) => $toggleMenu ? 0 : 1};
  transition: transform 0.3s ease-in;
  transform: ${({ $toggleMenu }) => $toggleMenu ? 'rotate(90deg)' : 'rotate(0deg)'};
`;
export const WrappedMobileMenu = styled.div`
  display: none;
  @media (max-width: 991px) {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 94%;
    min-height: 200vh;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: var(--white);
    gap: .5rem;
  }
`;
export const AnimatedWrappedMobileMenu = styled(WrappedMobileMenu)`
  animation-duration: 0.3s;
  animation-timing-function: ease-in;
  animation-fill-mode: both;
  animation-name: ${({ $toggleMenu }) =>
    $toggleMenu ? fadeInLeft : fadeInRight};
`;
export const Overlayscreen = styled.div`
    position:fixed;
    flex-direction: column;
    top:0;
    left:0;
    width:100%;
    min-height:200vh;
    animation: overlayslide .3s ease-out;
    animation-direction: alternate;
    animation-iteration-count: 1;
    opacity:.7;
    background:var(--darkblue);
`
export const SpoonForkButton = styled.div`
  position: absolute;
  font-size: 1.6rem;
  color: var(--darkblue);
  z-index: 2;
  @media (max-width: 991px) {
    top: .7rem;
    right: 1.2rem;
  }
  @media (max-width: 640px) {
    top: .7rem;
    right: .7rem;
  }
`;
export const AnimatedSpoonForkButton = styled(SpoonForkButton)`
  transition: transform 0.5s ease-in-out;
  transform: ${({ $toggleMenu }) => $toggleMenu ? 'rotate(0deg)' : 'rotate(-90deg)'};
  opacity: ${({ $toggleMenu }) => $toggleMenu ? 1 : 0};
`;
export const MobileMenuButton = styled.button`
  width: 260px;
  font-size: 1rem;
  font-weight: var(--medium);
  color: var(--darkblue);
  border: .11rem solid var(--darkblue);
  border-radius: .5rem;
  padding: .4rem 2.7rem;
  margin: .03rem;
  border-left: ${props => props.$current ? '10px solid var(--darkblue)' : '.13rem solid var(--darkblue)'};
`;