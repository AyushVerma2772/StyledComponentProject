import React, { useState } from 'react';
import styled from 'styled-components';
import { Container, Clip, Title, Para, Button } from './CommonStyles';
import serviceGirl from '../Images/service girl.png';
import Card from './Card';
import { mobile } from './Responsive';

const Service = () => {
  const [openVdo, setOpenVdo] = useState(false);

  const Left = styled.div`
    width: 40%;
    height: inherit;
    overflow: hidden;
    align-items: ${(props) => props.openVdo ? 'center' : 'flex-end'};
    justify-content:  ${(props) => props.openVdo ? 'flex-end' : 'center'};
    ${mobile({height: '40rem', alignSelf: 'flex-start', alignItem: 'center', width: `${
      openVdo ? '80%' : '50%'
    }`})}
  `;

  const Right = styled.div`
    width: 60%;
    height: inherit;
    flex-direction: column;
    ${mobile({width: '75%', alignSelf: 'flex-end', height: '80rem'})}
  `;

  const ServiceTitle = styled(Title)`
    width: 80%;
    font-size: 6rem;
  `

  const ServiceImage = styled.img`
    width: 50rem;
    ${mobile({width: '40rem'})}
  `

  const CardContainer = styled.div`
    width: 80%;
    justify-content: space-evenly;
    margin-bottom: 4rem ;
    ${mobile({width: '90%'})}
  `

  const Video = styled.iframe`
    width: 56rem;
    height: 31rem;
  `;

  

  return (
    <>
      <Container className='d-flex'>
        <Left className='d-flex' openVdo={openVdo}>

          {
            openVdo ? <Video src="https://www.youtube.com/embed/Mn_GKVcupUc" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></Video>
              : <ServiceImage src={serviceGirl} ></ServiceImage>
          }

        </Left>

        <Right className='d-flex' id='services'>
          <ServiceTitle>Simple process to start</ServiceTitle>

          <Para>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, esse non numquam maiores eius qui saepe repellat? Perferendis obcaecati, eaque eligendi animi nemo dolore error, sunt voluptas quod itaque molestiae.</Para>

          <CardContainer className='d-flex'>
            <Card cardInfo='lorem torem porem'></Card>
            <Card cardInfo='lorem torem porem'></Card>
            <Card cardInfo='lorem torem porem'></Card>
          </CardContainer>

          <Button bg='#f3b90a' onClick={()=> setOpenVdo(!openVdo)}>How it works</Button>
        </Right>

        <Clip polygon='polygon(32% 0, 32% 100%, 0 100%, 0% 0%, 0 0);' bg='#f3b90a' ></Clip>
      </Container>
    </>
  )
}

export default Service