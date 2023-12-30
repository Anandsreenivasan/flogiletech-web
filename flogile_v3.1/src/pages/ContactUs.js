import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustrationFullForm.js";
import ContactDetails from "components/cards/ThreeColContactDetails.js";
import MainFeature1 from "components/features/ContactOffice";
import Hero from "components/hero/Navbarheader.js";
const Address = tw.span`leading-relaxed`;
const AddressLine = tw.span`block`;
const Email = tw.span`text-sm mt-6 block text-gray-500`;
const Phone = tw.span`text-sm mt-0 block text-gray-500`;

export default () => {
  return (
    <AnimationRevealPage>
      <Hero />
      <ContactUsForm />
      <MainFeature1
       
        heading="Registered Office"
        buttonRounded={false}
        imageSrc="https://knowledge-leader.colliers.com/wp-content/uploads/2020/04/Knowledge-Leader-Article-1024x680-1.jpg"
        textOnLeft={false}
      />
               
      <Footer />
    </AnimationRevealPage>
  );
};
