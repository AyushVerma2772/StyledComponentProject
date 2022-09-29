import React from 'react'
import styled from 'styled-components'

export default function Vdo3() {

    const paraColor = "navy";

    const Button = styled.button`
        padding: 10px;
        height: 40px;
        font-size: 18px;
        color: white;
        background-color: rgba(13, 2, 90, 0.904);
        border: 0;
        border-radius: 5px;
        cursor: pointer;
        position: relative;

        /* Nesting: is used for pseudo elements and classes*/
        /* & refer to the current element */
        &:hover {
            background-color: rgba(2, 0, 14, 0.904);
        }

        span {
            color: red;
        }


        &::after {
            content: "";
            width: 80%;
            height: 3px;
            position: absolute;
            bottom: 10%;
            left: 10%;
            background-color: white;
        }
    `;



    const Para = styled.p`
        width: 300px;
        height: 250px;
        border: 2px solid red;
        color: ${paraColor};
        text-align: center;
        
        /* Getting props */
        font-size: ${(fontSize) => fontSize};
        background-color: ${(props) => props.bg};


        /* Nesting */
        b {
            color: brown;
        }

        &:hover {
            border-color: #985d0e;
        }

        span {
            color: green;

            b {
                color: red;

                &:hover {
                background-color: aqua;
            }
            }
        }
    `

    const BigButton = styled(Button)`
        font-size: 35px;

        &::after {
            content: "";
        }
    `
    return (
        <>
            <Button>Click <span>me</span></Button>

            {/* passing props */}
            <Para bg="pink" fontSize="18px">Lorem ipsum dolor, sit amet <span>consectetur Lorem <b>adipisicing hjjdg sjjhd</b> ipsum dolor. elit</span>. Dicta voluptates laboriosam nemo <b>perspiciatis</b> dolorem culpa officiis aperiam, provident atque nobis eveniet sapiente ex pariatur illum.</Para>


            {/* passing props */}
            <Para bg="yellow" fontSize="16px">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In cumque unde dignissimos dolor quos, molestiae veritatis aliquid at temporibus eligendi natus voluptas maxime voluptate eum saepe quis quibusdam possimus delectus tempora! Accusantium, qui officiis doloremque impedit perferendis ut doloribus, ratione culpa repudiandae deserunt aut placeat architecto neque. Voluptatum, culpa? Sapiente.
            </Para>

            <BigButton>Click me</BigButton>
        </>
    )
}
