import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import CareersForm from "components/forms/CareersForm.js";
import ContactDetails from "components/cards/ThreeColContactDetails.js";
import Hero from "components/hero/Navbarheader.js";
const Address = tw.span`leading-relaxed`;
const AddressLine = tw.span`block`;
const Email = tw.span`text-sm mt-6 block text-gray-500`;
const Phone = tw.span`text-sm mt-0 block text-gray-500`;

export default () => {
  return (
    <AnimationRevealPage>
      <Hero />
      <CareersForm />
               
      <Footer style="height: calc(100% - 60px);" />
    </AnimationRevealPage>
  );
};
