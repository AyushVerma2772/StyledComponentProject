import React from 'react'
import styled from 'styled-components'
import introGirl from '../Images/intro girl.png'
import { Button, Title, Para, Clip } from './CommonStyles';
import { mobile } from './Responsive';

const Intro = () => {
    const Container = styled.div`
        width: 100%;
        height: calc(70rem - 8rem);
        
        position: relative;

        ${mobile({
            height: '90rem',
            flexDirection: 'column'
        })}
    `;

    const Left = styled.div`
        width: 60%;
        height: inherit;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        ${mobile({width: '100%'})}
    `

    const Contact = styled.div`
        width: 60%;
        justify-content: space-between;
        ${mobile({width: '75%'})}
    `

    const ContactInfo = styled.div`
        
    `
    const PhoneNo = styled.div`
        color: ${(props) => props.color};
        font-size: 1.6rem;
    `

    const Right = styled.div`
        height: 55rem;
        width: 40%;
        align-items: flex-end;
        justify-content: end;

        ${mobile({display: 'none'})}
    `

    const IntroImage = styled.img`
        width: 100%;
    `

    return (
        <>
            <Container className='d-flex' id='home'>
                <Left>
                    <Title>Adventure in creative age</Title>

                    <Para>Lorem ipsum dolor sit amet consectetur adipisicing elit. At harum nobis accusantium architecto earum suscipit est vero animi molestias nemo officiis dolor, voluptates porro laborum perferendis cupiditate ea reiciendis aspernatur.</Para>

                    <Contact className='d-flex'>
                        <Button bg="#f34a0d">Start a project</Button>
                        <ContactInfo>
                            <PhoneNo color='#f83556'>Call us +91-935415245*</PhoneNo>
                            <PhoneNo color="gray" >For any question or concern</PhoneNo>
                        </ContactInfo>
                    </Contact>
                </Left>

                <Right className='d-flex'>
                    <IntroImage src={introGirl}></IntroImage>
                </Right>

                <Clip polygon='polygon(100% 0, 100% 100%, 54% 100%, 81% 0)' bg='#49c0a4'/>


            </Container>

        </>
    )
}

export default Intro