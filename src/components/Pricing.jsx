import React from 'react'
import { Title, Container, Clip } from './CommonStyles'
import styled from 'styled-components'
import PriceCard from './PriceCard'
import { mobile } from './Responsive'

const Pricing = () => {
    const PricingContainer = styled(Container)`
        flex-direction: column;
        color: white;
        justify-content: space-evenly;
        ${mobile({height: '200rem', justifyContent: 'space-evenly'})}
    `

    const PricingTitle = styled(Title)`
        align-self: flex-end;
        font-size: 6rem;
        ${mobile({width: '65%', textAlign: 'center'})}

    `

    const PriceContainer = styled(Container)`
        height: 50rem;
        width: 90%;
        justify-content: space-evenly;
        ${mobile({height: '180rem', width: '90%', justifyContent: 'space-around'})}
        
    `
    return (
        <>
            <PricingContainer className='d-flex' id='price' >
                <PricingTitle>Our Membership Plans </PricingTitle>

                <PriceContainer className='d-flex' >
                    <PriceCard plan='Brozen Plan' planPrice='100'></PriceCard>
                    <PriceCard plan='Silver Plan' planPrice='200' ></PriceCard>
                    <PriceCard plan='Gold Plan' planPrice='250' ></PriceCard>
                </PriceContainer>

                <Clip polygon='polygon(100% 0, 32% 0, 55% 100%, 100% 100%)' bg='crimson'/>
            </PricingContainer>
        </>
    )
}

export default Pricing