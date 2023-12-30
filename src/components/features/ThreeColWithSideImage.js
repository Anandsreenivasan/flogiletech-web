import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";

import defaultCardImage from "images/shield-icon.svg";

import { ReactComponent as SvgDecoratorBlob3 } from "images/svg-decorator-blob-3.svg";

import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomizeIconImage from "images/customize-icon.svg";
import FastIconImage from "images/fast-icon.svg";
import ReliableIconImage from "images/reliable-icon.svg";
import cloudIcon from "images/cloud1.jpg";
import dockerIcon from "images/dockerIcon.png";
import devopsIcon from "images/devops1.png";
import agileIcon from "images/agile2.png";
import digitalIcon from "images/demo/digital4.png";


const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-start md:items-start md:flex-row flex-wrap md:justify-start max-w-full mx-auto `}
`;
const Subheading = tw(SubheadingBase)`mb-4`;
const Heading = tw(SectionHeading)`w-full mt-8`;
const Description = tw(SectionDescription)`w-full text-center`;

const VerticalSpacer = tw.div`mt-8 w-full`

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 max-w-3xl items-start`}
`;

const Card = styled.div`
  ${tw`flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left h-full mx-4 px-2 py-8`}
  .imageContainer {
    ${tw`border text-center rounded-full  flex-shrink-0`}
    img {
      ${tw`w-12 h-12`}
    }
  }

  .textContainer {
    ${tw`sm:ml-4 mt-4 sm:mt-2`}
  }

  .title {
    ${tw`mt-4 tracking-wide font-bold text-2xl leading-none`}
  }

  .description {
    ${tw`mt-1 sm:mt-4 font-medium text-justify  text-secondary-300 leading-loose`}
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

export default ({ cards = null, heading = "Amazing Features", subheading = "Features", description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }) => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component) or you can directly pass this using the cards prop:
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  const defaultCards = [
    {
      imageSrc:"data:image/png;base64,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",
      title: "Cloud Computing",
      description: "Whether you are already in the Cloud or carrying vision in Migrating to the cloud, Flogile will back you up with our in-depth cloud engineering expertise in modernizing legacy solutions with a cloud-native approach. We excel in building high-performance scalable and secure cloud initiatives, data center transformation, migration, network modernization on Public, Private, and Hybrid Cloud environments."
    },
    {
      imageSrc: dockerIcon,
      title: "Containerization",
      description: "Containers provide an isolation context for micro-services. They are highly accessible, scalable, easily portable from one environment to another, fast to create or destroy. These qualities make them ideal for building and running micro-service applications. We help clients to create container strategy, choose the right tools and frameworks necessary to achieve it, and enable the team to use containers and improve agility."
    },
    {

      imageSrc: "https://cdn1.iconfinder.com/data/icons/devops-cycle/256/devops_cycle_2_flat-512.png",
      title: "DevOps",
      description: "Achieve greater business agility and faster time to market by eliminating bottlenecks in software development with Flogile DevOps Service. Our experts bring in a fundamental change in the way Development, Operations and Testing teams interact with each other and enables enterprises to achieve a connected DevOps toolchain for end-to-end application release thereby enabling reliable releases and faster time to market."
    },


    { imageSrc: digitalIcon, title: "Digital Transformation",
      description:"Cloud readiness and DevOps maturity implementations are key in successful Digital adoption but are often more complex. An inefficient transformation approach can lead to unplanned costs and be disruptive to businesses. At Flogile we have developed a custom “Move and Run Better” assessment framework that provides our clients a roadmap with digital transformation planning and execution with platform enablement, support, and maintenance.  "
  },
    { imageSrc: "https://cdn3.iconfinder.com/data/icons/basic-ui-elements-2-4-flat-style-36/512/Basic_UI_Elements_2.4_-_Flat_Style_-_36-43-512.png", 
      title: "Agile Adoption",
      description:"Agile software development has become increasingly important in today’s rapidly changing business environment. Organizations adopt agile consulting services to improve time-to-market, reduce cost and quickly adapt to change in their business and IT needs. With Flogile’s experience in executing multiple projects on agile methodologies, our agile practitioners offer a tailored approach that recommends the right set of tools and methodologies to meet specific customer needs towards agility."
  },
    
  ];

  if (!cards) cards = defaultCards;

  return (
    <Container>
      <ThreeColumnContainer>
        
        <Heading>{heading}</Heading>

        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="imageContainer">
                <img src={card.imageSrc || defaultCardImage} alt="" />
              </span>
              <span className="textContainer">
                <span className="title">{card.title || "Fully Secure"}</span>
                <p className="description">
                  {card.description }
                </p>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
          </Container>
  );
};
