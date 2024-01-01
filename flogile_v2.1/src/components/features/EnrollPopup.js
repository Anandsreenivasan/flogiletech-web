import { render } from "@testing-library/react";
import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
const Container = tw.div`w-128 h-56 bg-purple-100`;


export default class EnrollPopup extends React.Component{
    render(){
        return(
            <Container>
            <h1>             popup</h1>
            </Container>
        )
    }
}