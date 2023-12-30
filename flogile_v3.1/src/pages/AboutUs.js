import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import MainFeature1 from "components/features/Aboutflogile.js";
import MainFeature2 from "components/features/TwoColWithButton1.js";
// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats.js";
// import MainFeature3 from "components/features/TwoColSingleFeatureWithStats2.js";
import Features from "components/features/ThreeColSimple.js";
import AboutMain from "components/features/About.js";
// import Features from "components/features/ThreeColWithSideImage.js";
import TeamCardGrid from "components/cards/ProfileThreeColGrid.js";
import Hero from "components/hero/Navbarheader.js";
import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomerLoveIconImage from "images/simple-icon.svg";
const HighlightedText = tw.span`text-purple-900  border-b-2 border-purple-900`;
const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
  return (
    <AnimationRevealPage>
      <Hero />
     <AboutMain
       heading="ABOUT FLOGILE"
        subheading={<Subheading>We are a latest technologies developer.</Subheading>}
       
        description="Flogile Technologies, an IT consulting services provider based out of Tamilnadu, India. We focus on delivering high value to clients through integrated, reliable, responsive, and cost-effective solutions. We have been a trusted partner to several small, and medium-sized companies since 2017, We help businesses to overcome their critical business challenges. We hold profound experience and expertise in providing solutions for complex IT implementation projects and integrating emerging technologies in a dynamic environment. Our cutting-edge services made us a seamless extension to our clients. With our dynamic, scalable, resilient, and responsive offerings, we ensure rapid growth and high value for our clients.
        
        "/>
      <MainFeature1
        
        buttonRounded={false}
      
        imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
      />
      <MainFeature2
      
        heading="We Disrupt The Digital Space"
        buttonRounded={false}
      
        imageSrc="https://img.hcinnovationgroup.com/files/base/ebm/hci/image/2019/05/disruption_digital_.5cee9c6176a58.png?auto=format&fit=max&w=1200"
        textOnLeft={false}
      />
      <Features
      
        heading="We follow these."
        description="“Born digital,” Flogile takes an agile, collaborative approach in creating customized solutions across the digital value chain. Our deep expertise in infrastructure and applications management turns IT into a strategic asset."
        cards={[
          {
            imageSrc: SupportIconImage,
            title: "Custom Guidelines",
            description: "Every client is unique and so are the problem statements, we build specific solutions and create reusable guidelines based on every successful client delivery."
          },
          {
            imageSrc: ShieldIconImage,
            title: "Certified Specialist ",
            description: "Our team is a certified specialist on all the digital components with overall 6+ years of Org experience on client success stories with relevant vendor partnerships."
          },
          {
            imageSrc: CustomerLoveIconImage,
            title: "Customer Satisfaction",
            description: "Our Operational excellence and continuous service improvements are the Value addition that brings a smile to every client and that smile is our success factor."
          },
        ]}
        linkText=""
      />
    
      <Footer />
    </AnimationRevealPage>
  );
};
