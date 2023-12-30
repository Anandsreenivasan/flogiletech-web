import React ,{useState} from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import EmailIllustrationSrc from "images/email-illustration.svg";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-2 `;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)(props => [
  tw`md:w-6/12 mt-4 md:mt-0 `,
  tw`md:mr-12 lg:mr-16 md:order-first` 
]);

const Image = styled.img(props => [
  tw` w-full items-center h-10/12`,
  props.imageRounded && tw`rounded`,
  props.imageBorder && tw`border`,
  props.imageShadow && tw`shadow`,
]);
const TextContent = tw.div` text-center md:text-left`;

const Subheading = tw(SubheadingBase)` mt-8 md:mt-8 lg:mt-8 text-center text-purple-900 md:text-left text-xl sm:text-2xl lg:text-3xl`;
const Heading = tw(SectionHeading)`lg:mt-12 md:mt-12 mt-8 text-purple-900 text-center text-2xl md:text-3xl lg:text-4xl leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`

const Form = tw.form`  text-sm flex flex-col max-w-sm mx-auto md:mx-0`
const Input = tw.input`mt-2 first:mt-0 border-b-2 py-2 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`
const Textarea = styled(Input).attrs({as: "textarea"})`
  ${tw`h-20`}
`

const SubmitButton = tw(PrimaryButtonBase)`inline-block mt-8`

export default class Careers extends React.Component{
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
        errors["name"] = "Please Enter Name";
     }

     if(typeof fields["name"] !== "undefined"){
        if(!fields["name"].match(/^[a-zA-Z]+$/)){
           formIsValid = false;
           errors["name"] = "Name Only Letters";
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

    if(!fields["address"]){
      formIsValid = false;
      errors["address"] = "Please Enter Address";
   }

   if(!fields["phoneNumber"]){
    formIsValid = false;
    errors["phoneNumber"] = "Please Enter PhoneNumber";
 }
 
if(!fields["skills"]){
  formIsValid = false;
  errors["skills"] = "Please Enter Your Skills";
}

    this.setState({errors: errors});
    return formIsValid;
}
 
careersSubmit(e){
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
  fields["address"] = ""; 
  fields["phoneNumber"] = ""; 
  fields["skills"] = "";


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
      <Heading>CREATE YOUR CAREER </Heading>
      <Subheading>Please Fill The Following Form To Apply For A Suitable Position With Us.</Subheading>
          
      <TwoColumn>
        <ImageColumn>
          <Image src={"https://www.internships.com/wp-content/uploads/2019/09/software-engineer.jpg"} />
        </ImageColumn>
        <TextColumn >
          <TextContent>
           <Form onSubmit= {this.careersSubmit.bind(this)}>
              <Input type="text" name="Name"  placeholder="Full Name"  onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]} />
              <span style={{color: "red"}}>{this.state.errors["name"]}</span>
              <Input type="email" name="email" placeholder="Your Email Address"  onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]}/>
              <span style={{color: "red"}}>{this.state.errors["email"]}</span>
              <Input type="text" name="Address" placeholder="Your Address"  onChange={this.handleChange.bind(this, "address")} value={this.state.fields["address"]}/>
              <span style={{color: "red"}}>{this.state.errors["address"]}</span>
              <Input type="text" name="Phone Number" placeholder="Your PhoneNumber"  onChange={this.handleChange.bind(this, "phoneNumber")} value={this.state.fields["phoneNumber"]}/>
              <span style={{color: "red"}}>{this.state.errors["phoneNumber"]}</span>
              <Textarea name="Describe Your Skills"  placeholder="Your Skills Here"  onChange={this.handleChange.bind(this, "skills")} value={this.state.fields["skills"]}/>
              <span style={{color: "red"}}>{this.state.errors["skills"]}</span>
            Upload Resume  <input type="file" name="Upload Resume"  placeholder="Upload Resume" />
            <span style={{color: "red"}}>{this.state.errors["resume"]}</span>
              <SubmitButton type="submit">Submit</SubmitButton>
            </Form>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
 }
};
