import React from 'react'
import styled from 'styled-components'

export default function Vdo1() {

    const Button = styled.button`
        padding: 10px;
        height: 40px;
        font-size: 18px;
        color: white;
        background-color: rgba(13, 2, 90, 0.904);
        border: 0;
        border-radius: 5px;
        cursor: pointer;
    `;

    const Para = styled.p`
        width: 300px;
        height: 250px;
        border: 2px solid red;
        color: blue;
        text-align: center;
        display: flex;
        align-items: center;
    `

    const Wrapper = styled.div`
        .btn {
            width: 150px;
            padding: 10px;
            font-size: 18px;
            color: white;
            background-color: rgba(24, 206, 151, 0.904);
            border: 0;
            border-radius: 5px;
            cursor: pointer;
        }

        .btn:hover {
            background-color: rgba(8, 68, 50, 0.904);
        }

        .para {
            width: 300px;
            height: 250px;
            border: 2px solid blue;
            color: #ff1100;
            text-align: center;
            display: flex;
            align-items: center;
        }
    `




    return (
        <>
            {/* Without wrapper */}
            <Button>Click me</Button>
            <Para>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta voluptates laboriosam nemo perspiciatis dolorem culpa officiis aperiam, provident atque nobis eveniet sapiente ex pariatur illum.</Para>


            {/* with wrapper */}
            <Wrapper>
                <button className="btn">Wrapper btn</button>
                <p className='para' >Wrapper para  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat quis cupiditate cum, magni quaerat quod?</p>
            </Wrapper>
        </>
    )
}
