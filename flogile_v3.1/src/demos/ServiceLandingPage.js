import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import Hero from "components/hero/BackgroundAsImage.js";
//import Hero from "components/hero/TwoColumnWithFeaturesAndTestimonial.js";
import Features from "components/features/ThreeColWithSideImage.js";
import MainFeature from "components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
import FeatureStats from "components/features/ThreeColCenteredStatsPrimaryBackground.js";
import Pricing from "components/pricing/TwoPlansWithDurationSwitcher.js";
import Blog from "components/blogs/GridWithFeaturedPost.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndRating.js";
import FAQ from "components/faqs/SingleCol.js";
import GetStarted from "components/cta/GetStartedLight.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import Features1 from "components/features/ThreeColSimple1.js";

const HighlightedText = tw.span`text-purple-900`;
const Subheading = tw.span`uppercase tracking-wider text-sm`;

export default () => {
  return (
    <AnimationRevealPage>
      
      <Hero />
      <Features1
      
      heading={<> <HighlightedText>ABOUT US</HighlightedText></>}
        description="Flogile Technologies, an IT consulting services provider based out of Tamilnadu, India. We focus on delivering high value to clients through integrated, reliable, responsive, and cost-effective solutions. We have been a trusted partner to several small, and medium-sized companies since 2017, We help businesses to overcome their critical business challenges. We hold profound experience and expertise in providing solutions for complex IT implementation projects and integrating emerging technologies in a dynamic environment. Our cutting-edge services made us a seamless extension to our clients. With our dynamic, scalable, resilient, and responsive offerings, we ensure rapid growth and high value for our clients. Flogile Technologies provides an expert range of technology offerings such as Cloud Computing, DevOps, Containerization, Digital Transformation, and Agile Coaching We gauge our success with our client’s success and regard it as a privilege to ensure 100% customer satisfaction."
        
        />
      <Features 
        heading={<> <HighlightedText>OUR SERVICES</HighlightedText></>}
      />

      
      <Testimonial 
        heading={<>Our Major <HighlightedText>Achievements</HighlightedText></>}
        
      />
      
      <Footer />
    </AnimationRevealPage>
  );
}
