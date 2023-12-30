import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import TeamIllustrationSrc from "images/team-illustration-2.svg";
import {ReactComponent as SvgDotPattern } from "images/dot-pattern.svg"

const Container = tw.div`z-10 relative  max-w-full  mx-auto`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-full items-start mx-auto   `;
const Column = tw.div`w-full h-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`lg:w-6/12  lg:py-0 md:py-8 lg:px-8 md:w-5/12 flex-shrink-0 relative`;
const TextColumn = styled(Column)(props => [
  tw`md:w-7/12 lg:w-6/12 mt-8 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.img(props => [
  tw``,
  props.imageRounded && tw`rounded`,
  props.imageBorder && tw`border`,
  props.imageShadow && tw`shadow`,
]);

const DecoratorBlob = styled(SvgDotPattern)(props => [
  tw`w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-primary-500 -z-10`,
])

const TextContent = tw.div` text-center md:text-justify `;

const Subheading = tw(SubheadingBase)`text-left`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-purple-900 text-3xl md:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Listing = tw.p`text-justify  md:text-justify  text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-300`;
const Listing1 = tw.p`mt-4 text-justify font-bold md:text-justify text-sm md:text-base lg:text-lg  leading-relaxed text-purple-900`;

const PrimaryButton = styled(PrimaryButtonBase)(props => [
  tw`mt-8 md:mt-8 text-sm inline-block mx-auto md:mx-0`,
  props.buttonRounded && tw`rounded-full`
]);


export default ({
  subheading = "Our Expertise",
  heading = (
    <>
      Designed & Developed by <span tw="text-primary-500">Professionals.</span>
    </>
  ),
 
  primaryButtonText = "Learn More",
  primaryButtonUrl = "https://timerse.com",
  imageSrc = TeamIllustrationSrc,
  buttonRounded = true,
 
  description = "",
  imageRounded = true,
  imageBorder = false,
  imageShadow = false,
  imageCss = null,
  
  textOnLeft = true
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.
/*
 <Listing1>"Diligence"  ||  "Empathy"  ||   "Excellence'   ||  "Ingenuity"   ||   "Verity" </Listing1>
         */
  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
          <Image css={imageCss} src={imageSrc} imageBorder={imageBorder} imageShadow={imageShadow} imageRounded={imageRounded}/>
          
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            <Listing>Flogile Technologies provides an expert range of technology offerings such as Cloud Computing, DevOps, Containerization, Digital Transformation, and Agile Coaching We gauge our success with our client’s success and regard it as a privilege to ensure 100% customer satisfaction. </Listing>
            <Subheading>Core Values</Subheading>
            <Listing>Flogile Technologies adheres to a set of core values in all business dealings. All our employees are expected to take ownership of these values and incorporate them into their everyday activities.</Listing>
           <Listing1>Diligence |  Empathy  |   Excellence   |  Ingenuity   |   Verity </Listing1>
         
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
