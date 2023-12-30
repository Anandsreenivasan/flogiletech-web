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
  ${tw`flex flex-col items-start md:items-start md:flex-row flex-wrap md:justify-start max-w-full mx-auto py-20 md:py-24`}
`;
const Subheading = tw(SubheadingBase)`mb-4`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center`;

const VerticalSpacer = tw.div`mt-8 w-full`

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 max-w-3xl items-start`}
`;

const Card = styled.div`
  ${tw`flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left h-full mx-4 px-2 py-8`}
  .imageContainer {
    ${tw`border text-center rounded-full p-5 flex-shrink-0`}
    img {
      ${tw`w-6 h-6`}
    }
  }

  .textContainer {
    ${tw`sm:ml-4 mt-4 sm:mt-2`}
  }

  .title {
    ${tw`mt-4 tracking-wide font-bold text-2xl leading-none`}
  }

  .description {
    ${tw`mt-1 sm:mt-4 font-medium text-secondary-300 leading-loose`}
  }
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
      imageSrc: cloudIcon,
      title: "CLOUD COMPUTING",
      description: "Whether you are already in the Cloud, or carrying vision in Migrating to cloud , Flogile will back you up with our in-depth cloud engineering expertise in modernising legacy solutions with cloud native approach. We excel in building high-performance scalable and secure cloud initiatives, datacenter transformation, migration, network modernisation on Public, Private and Hybrid Cloud environments."
    },
    {
      imageSrc: dockerIcon,
      title: "CONTAINERIZATION",
      description: "Containers provide an isolation context for micro-services. They are highly accessible, scalable, easily portable from one environment to another, fast to create or destroy. These qualities make them ideal for building and running micro-service applications. We help clients to create container strategy, choose the right tools and frameworks necessary to achieve it and enable team to use containers and improve agility."
    },
    {

      imageSrc: devopsIcon,
      title: "DevOps",
      description: "Achieve a greater business agility and a faster time to market by eliminating bottlenecks in software development with Flogile Technologies DevOps Service.  Our experts bring in fundamental change in the way the Development, Operations and Testing teams interact with each other and enables enterprises to achieve a connected DevOps tool chain for end-to-end application release thereby enabling reliable releases and faster time to market."
    },


    { imageSrc: digitalIcon, title: "DIGITAL TRANSFORMATION",
      description:"Cloud readiness and DevOps maturity implementations are key in successful Digital adoption but are often more complex. Inefficient transformation approach can lead to unplanned costs and be disruptive to businesses. At Flogile we have developed a custom “Move and Run Better” assessment frame work that provides our clients a roadmap with digital transformation planning and execution with platform enablement, support and maintenance.  "
  },
    { imageSrc: agileIcon, title: "AGILE ADOPTION",
      description:"Containers provide an isolation context for micro-services. They are highly accessible, scalable, easily portable from one environment to another, fast to create or destroy. These qualities make them ideal for building and running micro-service applications. We help clients to create container strategy, choose the right tools and frameworks necessary to achieve it and enable team to use containers and improve agility."
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
      <DecoratorBlob />
    </Container>
  );
};
