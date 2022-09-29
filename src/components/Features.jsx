import React from 'react'
import styled from 'styled-components';
import featureImg from '../Images/features.png'
import { Container, Button, Title, Para, Clip } from './CommonStyles';
import { mobile } from './Responsive';

const Left = styled.div`
    height: inherit;
    width: 40%;
    align-items: flex-end;
    ${mobile({ height: '40rem', alignSelf: 'flex-start', alignItem: 'center', width: '50%' })}
`;

const FeatureImg = styled.img`
    width: 45rem;
`;

const Right = styled.div`
    width: 60%;
    height: inherit;
    flex-direction: column;

    ${mobile({ width: '75%', alignSelf: 'flex-end', height: '80rem' })}
`;

const Features = () => {

    return (
        <>
            <Container className='d-flex' id='feature'>
                <Left className='d-flex'>
                    <FeatureImg src={featureImg} ></FeatureImg>
                </Left>


                <Right className='d-flex'>
                    <Title><b>Good</b> design</Title>
                    <Title>Good <b>business</b></Title>

                    <Para>Lorem ipsum dolor sit amet consectetur adipisicing elit. At harum nobis accusantium architecto earum suscipit est vero animi molestias nemo officiis dolor, voluptates porro laborum perferendis cupiditate ea reiciendis aspernatur.</Para>

                    <Button bg="#5a01c0" >Learn More</Button>

                </Right>

                <Clip polygon="polygon(54% 0,32% 100%,0 100%,0 0)" bg='#5a01c0'></Clip>

            </Container>
        </>
    )
}

export default Features