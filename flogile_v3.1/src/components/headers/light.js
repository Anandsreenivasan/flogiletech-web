import React ,{useState }from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import useAnimatedNavToggler from "../../helpers/useAnimatedNavToggler.js";

import logo from "../../images/flogile-logo.png";
import { ReactComponent as MenuIcon } from "feather-icons/dist/icons/menu.svg";
import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";

const Header = tw.header`
  flex justify-center items-center 
   
  max-w-screen-xl mx-auto  
`;

export const NavLinks = tw.div`inline-block `;

/* hocus: stands for "on hover or focus"
 * hocus:bg-primary-700 will apply the bg-primary-700 class on hover or focus
 */
export const NavLink = tw.a`
  text-lg mt-2 lg:text-sm lg:mx-5 lg:my-0 justify-end  
  font-semibold tracking-wide transition duration-300
   border-b-2 border-gray-700 hover:border-primary-500 hocus:text-primary-500
`;

export const PrimaryLink = tw(NavLink)`
  lg:mx-0
   rounded bg-primary-500 text-gray-100
  hocus:bg-primary-100 hocus:text-gray-700 
  border-b-0  
`;

export const LogoLink = styled(NavLinks)`
  ${tw`flex items-center font-black border-b-0  border-white text-2xl! ml-0!`};

  img {
    ${tw`w-10 mr-3`}
  }
`;

export const MobileNavLinksContainer = tw.nav`flex mr-8 flex-1 h-12 justify-between`;
export const NavToggle = tw.button`
  lg:hidden z-20 focus:outline-none  transition duration-300
`;
export const MobileNavLinks = motion.custom(styled.div`
  ${tw`lg:hidden z-10 fixed inset-x-0   text-center   `}
  ${NavLinks} {
    ${tw`flex flex-col  mt-4 h-12 mr-16 items-end `}
  }
`);

export const DesktopNavLinks = tw.nav`
  hidden lg:flex flex-1 justify-between  items-center h-12`;


export default ({ roundedHeaderButton = false, logoLink, links,className, collapseBreakpointClass = "lg" }) => {
  /*
   * This header component accepts an optionals "links" prop that specifies the links to render in the navbar.
   * This links props should be an array of "NavLinks" components which is exported from this file.
   * Each "NavLinks" component can contain any amount of "NavLink" component, also exported from this file.
   * This allows this Header to be multi column.
   * So If you pass only a single item in the array with only one NavLinks component as root, you will get 2 column header.
   * Left part will be LogoLink, and the right part will be the the NavLinks component you
   * supplied.
   * Similarly if you pass 2 items in the links array, then you will get 3 columns, the left will be "LogoLink", the center will be the first "NavLinks" component in the array and the right will be the second "NavLinks" component in the links array.
   * You can also choose to directly modify the links here by not passing any links from the parent component and
   * changing the defaultLinks variable below below.
   * If you manipulate links here, all the styling on the links is already done for you. If you pass links yourself though, you are responsible for styling the links or use the helper styled components that are defined here (NavLink)
   */
  const defaultLinks = [
    <NavLinks key={1}>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/Services">Services</NavLink>
      <NavLink href="/AboutUs">About</NavLink>
      <NavLink href="/ContactUs">Contact</NavLink>
      <NavLink href="/Careers">Careers</NavLink>
      </NavLinks>
  ];

  const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler();
  const collapseBreakpointCss = collapseBreakPointCssMap[collapseBreakpointClass];

  const defaultLogoLink = (
    <LogoLink >
      <img src={logo} alt="logo" />
      Flogile Technologies
    </LogoLink>
  );

  logoLink = logoLink || defaultLogoLink;
  links = links || defaultLinks;

  
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () =>{
       if(window.scrollY >= 600){
         console.log(window.scrollY);
         setColorchange(true);
       }
       else{
         setColorchange(false);
       }
    };
    window.addEventListener('scroll', changeNavbarColor);
  




  return (
    <Header >
      <div className={"navbar-translate" || "header-light"}>
        <div className={colorChange ? 'navbar colorChange' : 'navbar'}>
      <DesktopNavLinks  css={collapseBreakpointCss.desktopNavLinks}>
        {logoLink}
        {links}
        
      </DesktopNavLinks>

      <MobileNavLinksContainer css={collapseBreakpointCss.mobileNavLinksContainer}>
        {logoLink}
        <MobileNavLinks initial={{ x: "150%", display: "none" }} animate={animation} css={collapseBreakpointCss.mobileNavLinks}>
          {links}
        </MobileNavLinks>
                <NavToggle onClick={toggleNavbar} className={showNavLinks ? "open" : "closed"}>
          
          {showNavLinks ? <CloseIcon tw="w-6 h-6" /> : <MenuIcon tw="w-8 h-8" />}
          
        </NavToggle>
      </MobileNavLinksContainer>
      </div>
      </div>
    </Header>
  );
};

/* The below code is for generating dynamic break points for navbar.
 * Using this you can specify if you want to switch
 * to the toggleable mobile navbar at "sm", "md" or "lg" or "xl" above using the collapseBreakpointClass prop
 * Its written like this because we are using macros and we can not insert dynamic variables in macros
 */

const collapseBreakPointCssMap = {
  sm: {
    mobileNavLinks: tw`sm:hidden`,
    desktopNavLinks: tw`sm:flex`,
    mobileNavLinksContainer: tw`sm:hidden`
  },
  md: {
    mobileNavLinks: tw`md:hidden`,
    desktopNavLinks: tw`md:flex`,
    mobileNavLinksContainer: tw`md:hidden`
  },
  lg: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`
  },
  xl: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`
  }
};
