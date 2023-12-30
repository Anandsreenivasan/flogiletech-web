import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import MainFeature1 from "components/features/TwoColWithButton.js";
import MainFeatures from "components/features/CloudComputing.js";
import CloudMain from "components/features/About.js";
// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats.js";
// import MainFeature3 from "components/features/TwoColSingleFeatureWithStats2.js";
import Features from "components/features/ThreeColSimple.js";
// import Features from "components/features/ThreeColWithSideImage.js";
import TeamCardGrid from "components/cards/ProfileThreeColGrid.js";
import Hero from "components/hero/Navbarheader.js";
import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomerLoveIconImage from "images/simple-icon.svg";

const Subheading = tw.span`uppercase text-left text-sm `;
export default () => {
  return (
    <AnimationRevealPage>
      <Hero />
      <CloudMain 
       heading = "Services"
       heading1="Cloud Computing"
       subheading={<Subheading>We are a latest technologies Cloud.</Subheading>}
       description = "Focus on your business and avoid all the web hosting hassles. Our managed hosting guarantees unmatched performance, reliability and choice with 24/7 support that acts as your extended team, we simplify cloud hosting experiences because we believe in empowering individuals, teams and businesses. We set high standards of performance, commit to complete freedom of choice coupled with simplicity and agility in every process. Backed by an innovative approach, our platform is built on best-of-breed technologies and industry-leading infrastructure providers that creates smooth managed cloud hosting experiences. We do this by investing in the right talent and by organising the perfect teams.Cloud computing solutions are grouped in multiple categories depending how the resources are consumed by end users. we help our clients in managing all the following cloud aspects "
       
      
      />
      <MainFeatures
       description1 = "IaaS - Infrastructure as a Service"
        description11 = "Provides access to computing resources in a virtualised environment. Basically users of IaaS will receive virtual servers that they will manage:"
        description2 = "PaaS - Platform as a Service"
        description22 = "Is a form of cloud computing that provides a platform (runtime) and environment to allow developers to build applications."
        description3 = "SaaS - Software as a Service"
        description33 = "Is a business model where software is licensed and delivered. SaaS Is basically on-demand software for end users."
        subdescription = "Enroll To Try Our Cloud Computing"
        buttonRounded={false}
        primaryButtonText="Enroll-Cloud Computing"
        imageSrc="https://networkencyclopedia.com/wp-content/uploads/2019/09/cloud-computing.png"
      />
      <MainFeature1
        
        heading="Containerization"
        subheading={<Subheading>Our Vision</Subheading>}
        buttonRounded={false}
        description = "Containers provide an isolation context for micro-services. They are highly accessible, scalable, easily portable from one environment to another, fast to create or destroy. These qualities make them ideal for building and running micro-service applications. We help clients to create container strategy, choose the right tools and frameworks necessary to achieve it and enable team to use containers and improve agility."
        subdescription = "Enroll To Try Our Cloud Computing"
        primaryButtonText="Enroll-Containerization"
        imageSrc="https://hackernoon.com/hn-images/1*VxAJ5aCzUJtmVhdg290RXg.png"
        textOnLeft={false}
      />
       <MainFeature1
        heading="Devops"
        subheading={<Subheading>We are a latest technologies Devops.</Subheading>}
        description = "Achieve a greater business agility and a faster time to market by eliminating bottlenecks in software development with Flogile Technologies DevOps Service.       Our experts bring in fundamental change in the way the Development, Operations and Testing teams interact with each other and enables enterprises to achieve a connected DevOps tool chain for end-to-end application release thereby enabling reliable releases and faster time to market."
        subdescription = "Enroll To Try Our DevOps"
        buttonRounded={false}
        primaryButtonText="Enroll-DevOps"
        imageSrc="https://wessexsociety.org/wp-content/uploads/2021/03/2.png"
      />
        <MainFeature1
        description = "Our digital transformation consulting group helps clients transform their business and accelerate their ecosystem by digital experiences. We build product and service solutions from a truly human-centered approach that’s further validated through a data-driven and agile mindset to drive measurable value.Our design thinking led approach to deliver optimized experiences ensures your customer's needs are met at each stage of the customer journey with surprise and delight, and business needs are met with effectiveness and efficiency.Clients from different domains struggle with managing the complexities of digital marketing and customer engagement. Customer journeys increasingly traverse channels, are behaviourally dependent, and are influenced by a multitude of factors. We observed there is a constant battle to deepen the understanding of the customer and craft a relevant engagement strategy to evoke a progressively productive response. The design should be the outcome of understanding; the better the understanding, the better the design. "
        heading="Digital Transformation"
        subheading={<Subheading>Our Vision</Subheading>}
        subdescription = "Enroll To Try Our Digital Transformation"
        buttonRounded={false}
        primaryButtonText="Enroll-Digital Transformation"
        imageSrc="https://assets.entrepreneur.com/content/3x2/2000/1595269642-GettyImages-1165055277.jpg"
        textOnLeft={false}
      />
       <MainFeature1
        heading="Agile Adoption"
        subheading={<Subheading>We are a latest technologies Cloud.</Subheading>}
        description = "Agile software development has become increasingly important in today’s rapidly changing business environment. Organisations adopt agile consulting services to improve time-to-market, reduce cost and quickly adapt to change in their business and IT needs. With Flogile’s experience in executing multiple projects on agile methodologies, our agile practitioners offer a tailored approach that recommends the right set of tools and methodologies to meet specific customer needs. "
        subdescription = "Enroll To Try Our Agile Adoption"
        buttonRounded={false}
        primaryButtonText="Enroll-Agile Adoption"
        imageSrc="https://www.consultancy.eu/illustrations/news/spotlight/2020-05-06-202318670-Agile-spot.jpg"
      />
      
    
      <Footer />
    </AnimationRevealPage>
  );
};
