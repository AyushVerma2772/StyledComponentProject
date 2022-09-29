import styled from "styled-components";
import { mobile } from "./Responsive";

export const Container = styled.div`
    width: 100%;
    height: 70rem;
    position: relative;
    ${mobile({ height: '130rem', flexDirection: 'column', justifyContent: 'space-around' })}
`;

export const Button = styled.button`
    font-size: 1.8rem;
    width: 17rem;
    height: 5rem;
    background-color: ${(props) => props.bg};
    color: white;
    border: 0;
    border-radius: 8px;
    cursor: pointer;
    text-align: center;
`

export const Title = styled.h1`
    width: 60%;
    font-size: 7.5rem;
    line-height: 1.1;
    text-align: left;
    b {
        color: #5a01c0;
    }

    ${mobile({ width: '75%', textAlign: 'center', lineHeight: '1.3' })}
`

export const Para = styled.p`
    width: 60%;
    font-size: 1.5rem;
    text-align: left;
    margin: 4rem 0;
    padding: 3rem;
    ${mobile({ width: '70%', textAlign: 'center', lineHeight: '1.3' })}
    
`

export const Clip = styled.div`
    clip-path: ${(props) => props.polygon};
    background-color: ${(props) => props.bg};
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    z-index: -1;
`;