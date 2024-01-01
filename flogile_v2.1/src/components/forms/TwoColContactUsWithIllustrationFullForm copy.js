import React, {useState }from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import EmailIllustrationSrc from "images/email-illustration.svg";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-10`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)(props => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`mt-2 text-center md:text-left`;
const Heading = tw(SectionHeading)`mt-4 text-purple-900 text-left text-2xl sm:text-3xl lg:text-4xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`

const Form = tw.form`mt-4 md:mt-6 text-sm flex flex-col max-w-sm mx-auto md:mx-0`
const Input = tw.input`mt-4 first:mt-0 border-b-2 py-2 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`
const Textarea = styled(Input).attrs({as: "textarea"})`
  ${tw`h-24`}
`

const SubmitButton = tw(PrimaryButtonBase)`inline-block mt-8`

export default ({
  heading = "Contact Us",
  subheading = <>Feel free to <span tw="text-primary-500">get in touch</span><wbr/> with us.</>,
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  submitButtonText = "Send",
  formAction = "#",
  formMethod = "post",
  textOnLeft = true,
  errors = ""

}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.
 
 const handleValidation = () =>
 {
  

let formIsValid = true;
let errors ={};
  

  //Name
  if(!name){
     formIsValid = false;
     errors["name"] = "Cannot be empty";
  }

  if(name !== "undefined"){
     if(!name.match(/^[a-zA-Z]+$/)){
        formIsValid = false;
        errors["name"] = "Only letters";
     }        
  }

  //Email
  if(!email){
     formIsValid = false;
     errors["email"] = "Cannot be empty";
  }

  if(email !== "undefined"){
     let lastAtPos = email.lastIndexOf('@');
     let lastDotPos = email.lastIndexOf('.');

     if (!(lastAtPos < lastDotPos && lastAtPos > 0 && email.indexOf('@@') == -1 && lastDotPos > 2 && (email.length - lastDotPos) > 2)) {
        formIsValid = false;
        errors["email"] = "Email is not valid";
      }
 }  
 if(!subject){
  formIsValid = false;
  errors["name"] = "Cannot be empty";
}
if(!message){
  formIsValid = false;
  errors["name"] = "Cannot be empty";
}

 
 return formIsValid;
};

const [email, setEmail] = useState("");
const [name, setName] = useState("");
const [subject, setSubject] = useState("");
const [message, setMessage] = useState("");


const contactSubmit = (e) =>
{
  console.log(name);
  e.preventDefault(e);

  if(handleValidation()){
     alert("Form submitted");
  }else{
     alert("Please Fill All The Details.")
  }

};


  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
          <Image imageSrc="https://image.freepik.com/free-photo/contact-us-customer-support-hotline-people-connect-call-customer-support_36325-1640.jpg" />
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            
            <Heading>{heading}</Heading>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Form action={formAction} method={formMethod} onSubmit= {contactSubmit.bind(this)}>
              <Input type="email" name="email" value={email} onChange ={e => setEmail(e.target.value)}placeholder="Your Email Address" />
              
              <Input type="text" name="name" value ={name}onChange ={e => setName(e.target.value)}placeholder="Full Name" />
              
              <Input type="text" name="subject" value ={subject} onChange ={e => setSubject(e.target.value)}placeholder="Subject" />
              
              <Textarea name="message" value = {message} onChange ={e => setMessage(e.target.value)}placeholder="Your Message Here" />
              
              <SubmitButton type="submit">{submitButtonText}</SubmitButton>
            </Form>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
