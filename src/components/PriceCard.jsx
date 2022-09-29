import React from 'react'
import styled from 'styled-components'
import { Para, Button } from './CommonStyles';
import { mobile } from './Responsive';

const PriceCard = (props) => {

    const Card = styled.div`
        width: 27%;
        height: 45rem;
        background-color: white;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        box-shadow: 0.7rem 0.8rem 1.5rem -0.4rem #696969;
        border-radius: 0.8rem;
        ${mobile({height: '50rem', width: '60%'})}
    `

    const PriceDetails = styled(Para)`
        padding: 0.5rem;
        margin: 0;
        color: Black;
        text-align: center;
        font-size: 1.7rem;
    `;

    const Plan = styled.p`
        padding: 0.5rem 1.5rem;
        border: 2px solid crimson;
        border-radius: 50px;
        font-size: 1.8rem;
        color: crimson;
        position: relative;

        &::before {
            position: absolute;
            left: -100%;
            top: 0;
            width: 100%;
            height: inherit;
            background-color: black;
        }

        &:hover:before {

        }
    `;

    const PlanPrice = styled.h3`
        font-size: 1.9rem;
        font-weight: 100;
        color: black;
        
        span {
            font-size: 3.5rem;
            font-weight: 700;
        }
    `;

    

    const JoinButton = styled(Button)`
        height: 4rem;
        width: 13rem;
        font-size:1.6rem;

    `

    return (
        <>
            <Card className='d-flex' >
                <PlanPrice>$ <span>{props.planPrice}</span> /month </PlanPrice>
                <Plan>{props.plan}</Plan>
                <PriceDetails>Lorem, ipsum dolor.</PriceDetails>
                <PriceDetails>Lorem, ipsum</PriceDetails>
                <PriceDetails>60+ ipsum dolor.</PriceDetails>
                <PriceDetails>Loremnk ipsum </PriceDetails>
                <JoinButton bg='#5a01c0'>Join Now</JoinButton>
            </Card>
        </>
    )
}

export default PriceCard