import React from 'react'
import styled from 'styled-components'
import { mobile } from './Responsive'

const ResponsiveDemo = () => {

    const Wrapper = styled.div`
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 80%;
        height: 580px;
        background-color: cornflowerblue;
        margin: 80px auto;

        /* calling mobile function and passing props as a js object  */
        ${mobile({backgroundColor: "bisque", flexDirection: "column"})}

        /* ${mobile({"background-color": "bisque", "flex-direction": "column"})} */
        
    `

    const Box = styled.div`
        width: 40%;
        height: 80%;
        background-color: ${(props)=>props.bg};

        ${mobile({"width": "95%", "height": "40%"})}
    `;

    const Text = styled.h2`
        color: yellow;
        font-size: 8rem;
        
        /* passing as a string */
        ${mobile("color:pink;")}
    `

    return (
        <>
            <Wrapper>
                <Box bg="crimson">
                <Text>Aman is a good boy</Text>
                </Box>
                <Box bg="navy"><Text>Aman is a bad boy</Text></Box>
            </Wrapper>
        </>
    )
}

export default ResponsiveDemo