import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import flogilehome from "images/home2.jpg";

import Header, { NavLink, NavLinks, PrimaryLink, LogoLink, NavToggle, DesktopNavLinks } from "../headers/light.js";
import ResponsiveVideoEmbed from "../../helpers/ResponsiveVideoEmbed.js";

const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none `}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300 `}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;
const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover`}
  background-image: url("https://specials-images.forbesimg.com/imageserve/5f9fa9e815da35da1356a28b/960x0.jpg?fit=scale");
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-primary-500 opacity-25`;

const HeroContainer = tw.div`z-20 relative px-4 sm:px-8 max-w-screen-xl  mx-auto`;
const TwoColumn = tw.div`pt-24 pb-32 px-4 flex justify-between items-center flex-col lg:flex-row`;
const LeftColumn = tw.div`flex flex-col items-center lg:block `;
const RightColumn = tw.div`w-full sm:w-5/6 lg:w-1/2 mt-16 lg:mt-0 lg:pl-8`;

const Heading = styled.h1`
  ${tw`text-6xl  font-black text-gray-100 `}
  span {
    ${tw`inline-block mt-2 `}
  }
  
  
`;

const SlantedBackground = styled.span`
  ${tw`relative text-primary-500 px-4 -mx-4 py-2`}
  &::before {
    content: "";
    ${tw`absolute inset-0 bg-gray-100 transform -skew-x-12 -z-10`}
  }

`;

const Notification = tw.span`inline-block font-extrabold italic my-0 pl-3 py-1 ml-8 text-gray-100  font-medium text-sm`;

const PrimaryAction = tw.button`px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 text-primary-500 font-bold rounded shadow transition duration-300 hocus:bg-primary-500 hocus:text-gray-100 focus:shadow-outline`;



export default () => {

  const navLinks = [
    
    <NavLinks key={1}>
    <NavLink href="/">Home</NavLink>
    <NavLink href="/Services">Services</NavLink>
    <NavLink href="/AboutUs">About</NavLink>
    <NavLink href="/ContactUs">Contact</NavLink>
    <NavLink href="/Careers">Careers</NavLink>
    </NavLinks>
  
    
  ];

  return (
    <Container>
      
      <HeroContainer   style={{ height: 600 }}>
        <StyledHeader links={navLinks} />
        <TwoColumn>
          <LeftColumn  style={{marginTop:170}}>
        
          
            <Heading >
            <h1 class="fontStroke">
                        Welcome To Flogile Technologies
            </h1>
            </Heading>
            <Notification> ONE-STOP SOLUTION FOR DIGITAL TRANSFORMATION......</Notification>
          </LeftColumn>
          
        </TwoColumn>
      </HeroContainer>
    </Container>
  );
};
