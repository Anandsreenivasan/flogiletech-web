import React, {useState }from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import EmailIllustrationSrc from "images/email-illustration.svg";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-2 md:py-2`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)(props => [
  tw`md:w-6/12 mt-16 md:mt-0`,
  tw` md:order-first`
]);
/*
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);*/
const Image = styled.img(props => [
  tw`mt-16 w-full h-9/12`,
  props.imageRounded && tw`rounded`,
  props.imageBorder && tw`border`,
  props.imageShadow && tw`shadow`,
]);
const TextContent = tw.div`text-center md:text-left`;

const Subheading = tw(SubheadingBase)`mt-2 text-center text-purple-900 md:text-left text-2xl sm:text-3xl lg:text-4xl`;
const Heading = tw(SectionHeading)`lg:mt-12 md:mt-12 mt-8 text-purple-900 text-center text-2xl md:text-3xl lg:text-4xl leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`

const Form = tw.form`mt-4 mr-8 md:mt-6 text-sm flex flex-col md:max-w-sm max-w-lg mx-auto md:mx-0`
const Input = tw.input`mt-4 first:mt-0 border-b-2 py-2 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`
const Textarea = styled(Input).attrs({as: "textarea"})`
  ${tw`h-24`}
`

const SubmitButton = tw(PrimaryButtonBase)`inline-block mt-8`

export default class ContactUs extends React.Component {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.
 
  constructor(props){
    super(props);

    this.state = {
        fields: {},
        errors: {}
    }
 }

 handleValidation(){
     let fields = this.state.fields;
     let errors = {};
     let formIsValid = true;

     //Name
     if(!fields["name"]){
        formIsValid = false;
        errors["name"] = "Please Enter Full Name";
     }

     if(typeof fields["name"] !== "undefined"){
        if(!fields["name"].match(/^[a-zA-Z]+$/)){
           formIsValid = false;
           errors["name"] = "Name Only letters";
        }        
     }

     //Email
     if(!fields["email"]){
        formIsValid = false;
        errors["email"] = "Please Enter Email Address";
     }

     if(typeof fields["email"] !== "undefined"){
        let lastAtPos = fields["email"].lastIndexOf('@');
        let lastDotPos = fields["email"].lastIndexOf('.');

        if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
           formIsValid = false;
           errors["email"] = "Please Enter Valid Email Address";
         }
    }  

    if(!fields["subject"]){
      formIsValid = false;
      errors["subject"] = "Please Enter Subject";
   }

   if(!fields["message"]){
    formIsValid = false;
    errors["message"] = "Please Fill Message";
 }


    this.setState({errors: errors});
    return formIsValid;
}
 
contactSubmit(e){
     e.preventDefault();

     if(this.handleValidation()){
        alert("Form submitted");
        this.handleClear();
     }else{
      
     }

 }
 handleClear(field, e){         
  console.log("yyyyyyyyy");
  let fields = this.state.fields;
  fields["name"] = "";    
  fields["email"] = ""; 
  fields["subject"] = ""; 
  fields["message"] = ""; 


  this.setState({fields});
}

 handleChange(field, e){         
     let fields = this.state.fields;
     fields[field] = e.target.value;        
     this.setState({fields});
 }
 
render(){

  return (
    <Container>
      
      <Heading>CONTACT US</Heading>
      <Subheading>{<>Feel Free To <span tw="text-primary-500">Get In Touch</span><wbr/> With Us.</>}</Subheading>
           
      <TwoColumn>
       
        <TextColumn >
          <TextContent>
            
          <Form onSubmit= {this.contactSubmit.bind(this)}>
              <Input type="email"  name="email" placeholder="Your Email Address"  onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]}/>
              <span style={{color: "red"}}>{this.state.errors["email"]}</span>
              <Input type="text"  name="name" placeholder="Full Name" onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]} />
              <span style={{color: "red"}}>{this.state.errors["name"]}</span>
              <Input type="text" name="subject" placeholder="Subject" onChange={this.handleChange.bind(this, "subject")} value={this.state.fields["subject"]}/>
              <span style={{color: "red"}}>{this.state.errors["subject"]}</span>
              <Textarea name="message" placeholder="Your Message Here" onChange={this.handleChange.bind(this, "message")} value={this.state.fields["message"]} />
              <span style={{color: "red"}}>{this.state.errors["message"]}</span>
              <SubmitButton type="submit">Submit</SubmitButton>
            </Form>
          </TextContent>
        </TextColumn>
        <ImageColumn>
        <Image src={"https://image.freepik.com/free-photo/contact-us-customer-support-hotline-people-connect-call-customer-support_36325-1640.jpg"} />
        </ImageColumn>
      </TwoColumn>
    </Container>
  );

}};
