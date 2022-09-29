import React from 'react'
import styled from 'styled-components'
import { Para } from './CommonStyles'

const Card = (props) => {
    const Card = styled.div`
        width: 15rem;
        height: 15rem;
        background-color: white;
        box-shadow: 1rem 1rem 1rem -0.3rem rgba(243,185,10,0.72);
        border-radius: 10px;
        flex-direction: column;
        justify-content: space-evenly;
        border: 0.5px solid #f3b90a;
    `;

    const CardPara = styled(Para)`
        margin: 0;
        text-align: center;
        font-size: 1.7rem;
        padding: 0;
    `
    return (
        <>
        <Card className='d-flex'>
            <CardPara>🔍</CardPara>
            <CardPara>{props.cardInfo}</CardPara>
        </Card>

        </>
    )
}

export default Card