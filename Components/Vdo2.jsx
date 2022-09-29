import React from 'react'
import styled from 'styled-components';

export default function Vdo2() {

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
        font-size: 18px;

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

        /* the above code is like in css
            span b {}
         */

        
    `
    return (
        <>
            <Button>Click <span>me</span></Button>

            <Para>Lorem ipsum dolor, sit amet <span>consectetur Lorem <b>adipisicing hjjdg sjjhd</b> ipsum dolor. elit</span>. Dicta voluptates laboriosam nemo <b>perspiciatis</b> dolorem culpa officiis aperiam, provident atque nobis eveniet sapiente ex pariatur illum.</Para>

        </>
    )
}
