import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import MainFeature1 from "components/features/TwoColWithButton.js";
import MainFeature2 from "components/features/DigitalServices.js";
import MainFeature3 from "components/features/DevopsServices.js";
import MainFeature4 from "components/features/ContainerServices.js";
import MainFeatures from "components/features/CloudComputing.js";
import CloudMain from "components/features/About.js";
import DigitalMain from "components/features/Digital.js";
// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats.js";
// import MainFeature3 from "components/features/TwoColSingleFeatureWithStats2.js";
import Features from "components/features/ThreeColSimple.js";
// import Features from "components/features/ThreeColWithSideImage.js";
import TeamCardGrid from "components/cards/ProfileThreeColGrid.js";
import Hero from "components/hero/Navbarheader.js";
import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomerLoveIconImage from "images/simple-icon.svg";
const HighlightedText = tw.span`text-purple-900  border-b-2 border-purple-900`;

const Subheading = tw.span`uppercase text-left text-sm `;
export default () => {
  return (
    <AnimationRevealPage>
      <Hero />
      <CloudMain 
      heading="SERVICES"
      
       heading1="Cloud Computing"
       subheading={<Subheading>We are a latest technologies Cloud.</Subheading>}
       description = "Focus on your business and avoid all the web hosting hassles. Our managed hosting guarantees unmatched performance, reliability, and choice with 24/7 support that acts as your extended team, we simplify cloud hosting experiences because we believe in empowering individuals, teams, and businesses. We set high standards of performance, commit to complete freedom of choice coupled with simplicity and agility in every process. Backed by an innovative approach, our platform is built on best-of-breed technologies and industry-leading infrastructure providers that create smooth managed cloud hosting experiences. We do this by investing in the right talent and by organizing the perfect teams. Cloud computing solutions are grouped in multiple categories depending on how the resources are consumed by end-users. we help our clients in managing all the following cloud aspects, "
       
      
      />
      <MainFeatures
       description1 = "IaaS - Infrastructure as a Service"
        description11 = "Provides access to computing resources in a virtualized environment. Users of IaaS will receive virtual servers that they will manage."
        description2 = "PaaS - Platform as a Service"
        description22 = "Is a form of cloud computing that provides a platform (runtime) and environment to allow developers to build applications."
        description3 = "SaaS - Software as a Service"
        description33 = "Is a business model where software is licensed and delivered. SaaS Is on-demand software for end-users."
        subdescription = "Enroll To Try Our Cloud Computing"
        buttonRounded={false}
        primaryButtonText="Enroll-Cloud Computing"
        imageSrc="https://networkencyclopedia.com/wp-content/uploads/2019/09/cloud-computing.png"
      />

      <DigitalMain 
      heading="Containerization"
       subheading={<Subheading>We are a latest technologies Cloud.</Subheading>}
       description = "Containers have many credible advantages a clear understanding of containers can help in obtaining funds for containers to forward the digital transformation objectives of the business. Containers can deliver more services using the same hardware that is used for virtual machines” and that spells more profits for both data centers and cloud services. "
       
      
      />
      <MainFeature4
        
        buttonRounded={false}
        description = "If we think about containers in the cloud specifically Lightweight, scalable, and Agile, another great benefit of the container is elasticity, elasticity is a spectrum that you can provision at the level of containers, and based on the more rapid response time of containers, you can dynamically scale up or down very quickly and efficiently. At Flogile we are highly skilled in implementing container solutions across domains."
        subdescription = "Enroll To Try Our Cloud Computing"
        primaryButtonText="Enroll-Containerization"
        imageSrc="https://hackernoon.com/hn-images/1*VxAJ5aCzUJtmVhdg290RXg.png"
        textOnLeft={false}
      />
        <DigitalMain 
      heading="DevOps"
      
       description = "Major IT organization has identified a barrier between application developers and IT operations, and it creates a blockage in true team collaboration. DevOps helps shrink down that barrier.DevOps' primary goal is to bridge the gap between development and operations to enable faster, more efficient production. It works by making changes to the go-to production software. The benefits of DevOps can span through the entire software delivery pipeline. It works by making changes to the go-to production software. The benefits of DevOps can span through the entire software delivery pipeline. "
       
      
      />
       <MainFeature3
        heading="Devops"
        subheading={<Subheading>We are a latest technologies Devops.</Subheading>}
        description = " It can help you improve deployment frequency, leading to faster time to market, the lower failure rate of new releases, shortened lead time between bug ﬁxes, and quicker turnaround time to recovery. By embracing a DevOps approach, your organization can make simple processes-related tools the delivers operational predictability, security & efficiency. As a digital-first organization, Flogile offers unique differentiators to support you, as you get ready to embark on your DevOps journey."
        subdescription = "Enroll To Try Our DevOps"
        buttonRounded={false}
        primaryButtonText="Enroll-DevOps"
        imageSrc="https://wessexsociety.org/wp-content/uploads/2021/03/2.png"
      />
     <DigitalMain 
      heading="Digital Transformation"
       subheading={<Subheading>We are a latest technologies Cloud.</Subheading>}
       description = "Our digital transformation consulting group helps clients transform their business and accelerate their ecosystem by digital experiences. We build product and service solutions from a truly human-centered approach that’s further validated through a data-driven and agile mindset to drive measurable value. Our design thinking-led approach to delivering optimized experiences ensures your customer's needs are met at each stage of the customer journey with surprise and delight, and business needs are met with effectiveness and efficiency. "
       
      
      />

        <MainFeature2
        description = "Clients from different domains struggle with managing the complexities of digital marketing and customer engagement. Customer journeys increasingly traverse channels, are behaviourally dependent, and are influenced by a multitude of factors. We observed there is a constant battle to deepen the understanding of the customer and craft a relevant engagement strategy to evoke a progressively productive response. The design should be the outcome of understanding; the better the understanding, the better the design. "
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
        description = "When the IT business evolves there is a need for an agile software platform that will evolve along with them. While the need to create business applications of any scale that needs expert coaching on the agile principles and frameworks. Flogile’s Agile Center of Excellence (ACOE) is your best option with an exceptional blend of people, deep domain expertise, and technology capabilities, all housed in a state-of-the-art facility designed for Agile training and development. Please reach us for a quick assessment of your Agile maturity. "
        subdescription = "Enroll To Try Our Agile Adoption"
        buttonRounded={false}
        primaryButtonText="Enroll-Agile Adoption"
        imageSrc="https://www.consultancy.eu/illustrations/news/spotlight/2020-05-06-202318670-Agile-spot.jpg"
      />
      
    
      <Footer />
    </AnimationRevealPage>
  );
};
