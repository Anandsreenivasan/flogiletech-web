import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import TeamIllustrationSrc from "images/team-illustration-2.svg";
import {ReactComponent as SvgDotPattern } from "images/dot-pattern.svg"
import Popup from 'reactjs-popup';
import EnrollPopup from "./EnrollPopup";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl items-start mx-auto   items-center`;
const Column = tw.div`w-full h-full max-w-full mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-6/12 flex-shrink-0  `;
const PopUpBox = tw.div`w-128 h-56 bg-purple-100`;
const TextColumn = styled(Column)(props => [
  tw`md:w-6/12 `,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.img(props => [
  tw`w-full h-full`,
  props.imageRounded && tw`rounded`,
  props.imageBorder && tw`border`,
  props.imageShadow && tw`shadow`,
]);

const DecoratorBlob = styled(SvgDotPattern)(props => [
  tw`w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-primary-500 -z-10`,
])

//const TextContent = tw.div` text-center w-full h-full`;

const Subheading = tw(SubheadingBase)`text-center text-lg md:text-left`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-2xl sm:text-3xl lg:text-4xl text-center md:text-left leading-tight text-purple-900`;
const Description = tw.p`mt-1 text-justify  text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-300`;

const SubDescription = tw.p`mt-4 text-blue-600 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed `;

const PrimaryButton = styled(PrimaryButtonBase)(props => [
  tw`mt-8 md:mt-8 text-sm inline-block mx-auto md:mx-0`,
  props.buttonRounded && tw`rounded-full`
]);


export default ({
  subheading = "Our Expertise",
  heading = (
    <>
      Designed & Developed by <span tw="text-purple-900">Professionals.</span>
    </>
  ),
 
  primaryButtonText = "",
  primaryButtonUrl = "",
  imageSrc = TeamIllustrationSrc,
  buttonRounded = true,
  description = "",
  description1 = "",
  description11 = "",
  description2 = "",
  description22 = "",
  description3 = "",
  description33 = "",
  subdescription = "",
  imageRounded = true,
  imageBorder = false,
  imageShadow = false,
  imageCss = null,
  imageDecoratorBlob = false,
  imageDecoratorBlobCss = null,
  textOnLeft = true
}) => {

  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.



  
  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
          <Image css={imageCss} src={imageSrc} imageBorder={imageBorder} imageShadow={imageShadow} imageRounded={imageRounded}/>
          </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          
          {description1 && <Subheading>{description1}</Subheading>}
            {description11 && <Description>{description11}</Description>}
            {description1 && <Subheading>{description2}</Subheading>}
            {description22 && <Description>{description22}</Description>}
            {description1 && <Subheading>{description3}</Subheading>}
            {description33 && <Description>{description33}</Description>}
            {subdescription && <SubDescription>{subdescription}</SubDescription>}
 
            {<PrimaryButton>{primaryButtonText}</PrimaryButton>} 
    
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
