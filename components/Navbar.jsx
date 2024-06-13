// 'use client'
import Link from "next/link";
import React ,{ useContext, useEffect, useRef } from "react";
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineLogin, MdOutlineLogout, MdOutlineRestaurantMenu } from 'react-icons/md';
import { HStack, VStack } from "@chakra-ui/react";
import AuthContext from "../app/context/authContext";
import {
  AnimatedBurgerButton,
  AnimatedSpoonForkButton,
  AnimatedWrappedMobileMenu,
  LoginButton,
  LogoutButton,
  MobileMenuButton,
  Overlayscreen,
  StyledImage,
  StyledLi,
  StyledLiMobile,
  StyledNavbar,
  StyledUl,
  StyledUlmobile,
  UserName,
  UserPicture,
} from "./styled_navbar";
import LogoFDS from '../public/LogoFDS&desc(new)rounded-white.png';

const NavBar = ({currentPage, setCurrentPage}) => {
  const NavBarRef = useRef(null);
  const {
    user,
    login,
    logout,
    authReady,
    scrollToTopHomePage,
    scrollToTopPage,
    scrollToTopSubPage
  } = useContext(AuthContext);
  console.log(user);

  useEffect(() => {
    let prevScrollPos = window.scrollY;
  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const NavBarElement = NavBarRef.current;
    if (!NavBarElement) {
      return;
      }
    if (prevScrollPos > currentScrollPos) {
      NavBarElement.style.transform = "translateY(0)";
      } else {
      NavBarElement.style.transform = "translateY(-200px)";
      }
      prevScrollPos = currentScrollPos;
    }
      window.addEventListener('scroll', handleScroll)

      return() => {
          window.removeEventListener('scroll', handleScroll)
      }
  },[]);

  const [toggleMenu, setToggleMenu] = React.useState(false);
  // const [currentPage, setCurrentPage] = React.useState('Home');

  return (
    <StyledNavbar
      ref={NavBarRef}
      translateY="0"
    >
      <StyledImage
        src={LogoFDS}
        alt="FD_logo"
        width={350}
        height={45}
      />
      {authReady && (
        <StyledUl>
          <Link href="/">
            <StyledLi onClick={() => {
                setCurrentPage('Home')
                scrollToTopHomePage()
              }}
              $current={currentPage === 'Home'}
            >
              Home
            </StyledLi>
          </Link>
          <Link href="/about">
            <StyledLi onClick={() => {
                setCurrentPage('About')
                scrollToTopPage()
              }}
              $current={currentPage === "About"}
            >
              About
            </StyledLi>
          </Link>
          <Link href='/services'>
            <StyledLi onClick={() => {
                setCurrentPage('Services')
                scrollToTopSubPage()
              }}
              $current={currentPage === 'Services'}
            >
              Services
            </StyledLi>
          </Link>
          <Link href='/portfolio'>
            <StyledLi onClick={() => {
                setCurrentPage('Portfolio')
                scrollToTopPage()
              }}
              $current={currentPage === "Portfolio"}
            >
              Portfolio
            </StyledLi>
          </Link>
          <Link href='/blog'>
            <StyledLi onClick={() => {
                setCurrentPage('Blog')
                scrollToTopPage()
              }}
              $current={currentPage === "Blog"}
            >
              Blog
            </StyledLi>
          </Link>
          <Link href="/contact">
            <StyledLi onClick={() => {
                setCurrentPage('Contact')
                scrollToTopPage()
              }}
              $current={currentPage === "Contact"}
            >
              Contact
            </StyledLi>
          </Link>
          {!user?(
            <LoginButton
              onClick={login}
            >
              <MdOutlineLogin/>&nbsp;Get Started!
            </LoginButton>
            ) : (
            <VStack>
              <LogoutButton
                onClick={logout}
              >
                <MdOutlineLogout/>&nbsp;logout
              </LogoutButton>
              <HStack>
                <UserName>
                  Welcome&nbsp;<b>{user.user_metadata.full_name}</b>
                </UserName>
                {user.user_metadata.avatar_url ? (
                  <UserPicture
                    src={user.user_metadata.avatar_url}
                    alt="user"
                    width={50}
                    height={50}
                  />) : (
                  <UserPicture
                    src={`/images/avatar.jpg`}
                    alt="user"
                    width={50}
                    height={50}
                  />
                  )
                }
              </HStack>
            </VStack>
            )
          }
        </StyledUl>
      )}
      <AnimatedBurgerButton $toggleMenu={toggleMenu}>
        <GiHamburgerMenu
          onClick={() => {
            setToggleMenu(!toggleMenu);
          }} />
      </AnimatedBurgerButton>
      <AnimatedSpoonForkButton $toggleMenu={toggleMenu}>
        <MdOutlineRestaurantMenu
          onClick={() => {
            setToggleMenu(!toggleMenu);
          }} />
      </AnimatedSpoonForkButton>
      {toggleMenu ? (
        <>
        <Overlayscreen/>
        <AnimatedWrappedMobileMenu $toggleMenu={toggleMenu}>
          <StyledUlmobile>
            <Link href='/'>
              <StyledLiMobile>
                <MobileMenuButton onClick={() => {setCurrentPage('Home');scrollToTopHomePage();setToggleMenu(false)}} $current={currentPage === 'Home'}>
                  Home
                </MobileMenuButton>
              </StyledLiMobile>
            </Link>
            <Link href='/about'>
              <StyledLiMobile>
                <MobileMenuButton onClick={() => {setCurrentPage('About');scrollToTopPage();setToggleMenu(false)}} $current={currentPage === 'About'}>
                  About
                </MobileMenuButton>
              </StyledLiMobile>
            </Link>
            <Link href='/services'>
              <StyledLiMobile>
                <MobileMenuButton onClick={() => {setCurrentPage('Services');scrollToTopSubPage();setToggleMenu(false)}} $current={currentPage === 'Services'}>
                  Services
                </MobileMenuButton>
              </StyledLiMobile>
            </Link>
            <Link href='/portfolio'>
              <StyledLiMobile>
                <MobileMenuButton onClick={() => {setCurrentPage('Portfolio');scrollToTopPage();setToggleMenu(false)}} $current={currentPage === 'Portfolio'}>
                  Portfolio
                </MobileMenuButton>
              </StyledLiMobile>
            </Link>
            <Link href='/blog'>
              <StyledLiMobile>
                <MobileMenuButton onClick={() => {setCurrentPage('Blog');scrollToTopPage();setToggleMenu(false)}} $current={currentPage === 'Blog'}>
                  Blog
                </MobileMenuButton>
              </StyledLiMobile>
            </Link>
            <Link href='/contact'>
              <StyledLiMobile>
                <MobileMenuButton onClick={() => {setCurrentPage('Contact');scrollToTopPage();setToggleMenu(false)}} $current={currentPage === 'Contact'}>
                  Contact
                </MobileMenuButton>
              </StyledLiMobile>
            </Link>
              {!user ? (
                <MobileMenuButton
                  onClick={() => {login();setToggleMenu(false)}}
                >
                  Get Started
                </MobileMenuButton>
                ) : (
                <MobileMenuButton
                  onClick={() => {logout();setToggleMenu(false)}}
                >
                  Logout
                </MobileMenuButton>
                )
              }
          </StyledUlmobile>
        </AnimatedWrappedMobileMenu>
        </>
      ) : (
        <>
        <AnimatedWrappedMobileMenu $toggleMenu={toggleMenu}>
          <StyledUlmobile>
            <Link href='/'>
              <StyledLiMobile>
                <MobileMenuButton onClick={() => {handleClick("Home")();setToggleMenu(false)}} $current={currentPage === 'Home'}>
                  Home
                </MobileMenuButton>
              </StyledLiMobile>
            </Link>
            <Link href='/content/pages/menu'>
              <StyledLiMobile>
                <MobileMenuButton onClick={() => {handleClick("AllMenu")();setToggleMenu(false)}} $current={currentPage === 'AllMenu'}>
                  Menu
                </MobileMenuButton>
              </StyledLiMobile>
            </Link>
            <Link href='/'>
              <StyledLiMobile>
                <MobileMenuButton onClick={() => {handleClick("Menu")();setToggleMenu(false)}} $current={currentPage === 'Menu'}>
                  Order Online
                </MobileMenuButton>
              </StyledLiMobile>
            </Link>
            <Link href='/content/pages/testimonials'>
              <StyledLiMobile>
                <MobileMenuButton onClick={() => {handleClick("Testimonials")();setToggleMenu(false)}} $current={currentPage === 'Testimonials'}>
                  Testimonials
                </MobileMenuButton>
              </StyledLiMobile>
            </Link>
            <Link href='/content/pages/about'>
              <StyledLiMobile>
                <MobileMenuButton onClick={() => {handleClick("About")();setToggleMenu(false)}} $current={currentPage === 'About'}>
                  About Us
                </MobileMenuButton>
              </StyledLiMobile>
            </Link>
            <Link href='/content/pages/reserve-table'>
              <StyledLiMobile>
                <MobileMenuButton href="#Reservation-section" onClick={() => {handleClick("Reservation")();setToggleMenu(false)}} $current={currentPage === 'Reservation'}>
                  Reserve a table
                </MobileMenuButton>
              </StyledLiMobile>
            </Link>
              {!user ? (
                <MobileMenuButton
                  onClick={() => {login();setToggleMenu(false)}}
                >
                  Login / Sign Up
                </MobileMenuButton>
                ) : (
                <MobileMenuButton
                  onClick={() => {logout();setToggleMenu(false)}}
                >
                  Logout
                </MobileMenuButton>
                )
              }
          </StyledUlmobile>
        </AnimatedWrappedMobileMenu>
        </>
      )}
    </StyledNavbar>
  );
};

export default NavBar;