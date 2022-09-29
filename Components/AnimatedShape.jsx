import React from 'react'
import styled from 'styled-components'

const AnimatedShape = () => {

    const Square = styled.div`
        width: 10rem;
        height: 10rem;
        background-color: #53dd0e;
        position: absolute;
        top: -10rem;
        left: -10rem;
        opacity: 0.6;
        z-index: -2;

        animation: square 10s linear alternate infinite ;

        @keyframes square {
            to {
                transform: translate(100vw, 100vh);
            }

            
        }
    `
    const Rect = styled.div`
        width: 10rem;
        height: 5rem;
        background-color: #f071df;
        position: absolute;
        top: 50%;
        left: 0;
        opacity: 0.7;
        z-index: -2;

        animation: rect 10s linear alternate infinite ;

        @keyframes rect {
            to {
                transform: translate(100vw, -80vh);
            }

        }
        
    `;

    const Circle = styled.div`
        width: 10rem;
        height: 10rem;
        border-radius: 50%;
        background-color: #1c30e6;
        position: absolute;
        top: 80%;
        left: -10rem;
        opacity: 0.5;
        z-index: -2;

        animation: circle 10s linear alternate infinite ;

        @keyframes circle {
            to {
                transform: translate(100vw, -50vh);
            }

        }
        
    `;


    return (
        <>
            <Square></Square>
            <Rect></Rect>
            <Circle></Circle>
        </>
    )
}

export default AnimatedShape