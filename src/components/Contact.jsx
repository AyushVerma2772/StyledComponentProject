import React from 'react'
import contactImage from '../Images/contactus.png'
import styled from 'styled-components'
import { Container, Para, Button, Clip } from './CommonStyles';
import { mobile } from './Responsive';


const ContactContainer = styled(Container)`
  
`;

const ContactTitle = styled.h2`
  width: 100%;
  font-size: 6rem;
  text-align: right;
  padding: 0 8rem;
  line-height: 1.2;
  `;

const Left = styled.div`
    height: 100%;
    width: 40%;
    align-items: flex-end;
    ${mobile({ height: '40%', width: '100%' })}

`;

const Right = styled.div`
  width: 60%;
  height: 100%;
  position: relative;
  flex-direction: column;
  justify-content: space-around;
  ${mobile({ height: '60%', width: '100%' })}
`;

const ContactImage = styled.img`
  width: 100%;
  ${mobile({ width: '65%' })}
`;

const Form = styled.form`
  width: 80%;
  height: 33rem;
  display: flex;
  ${mobile({ width: '90%' })}
`

const Input = styled.input`
  border: 1px solid gray;
  font-size: 1.6rem;
  padding: 1rem;
  width: 80%;
  &:focus {
    outline: 1px solid #3e93fa;
  }
`

const TextArea = styled.textarea`
  font-size: 1.6rem;
  padding: 1rem;
  width: 95%;
  
  &:focus {
    outline: none;
    border: 1px solid #3e93fa;
  }

  &::-webkit-scrollbar {
    width: 7px;
  }
  
  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    border: 1px solid white;
    background-color: #3e93fa;
  }
`

const Address = styled(Para)`
  margin: 0;
  padding: 0;
  text-align: center;
`;

const FormBox = styled.div`
  height: 100%;
  width: 50%;
  flex-direction: column;
  justify-content: space-evenly;
`



const Contact = () => {

  return (
    <>
      <>
        <ContactContainer className='d-flex'>

          <Left className='d-flex'>
            <ContactImage src={contactImage} ></ContactImage>
          </Left>

          <Right className='d-flex'>
            <ContactTitle>Question ? <br /> Lets's Get In Touch </ContactTitle>

            <Form>
              <FormBox className='d-flex' style={{ justifyContent: 'space-around' }} >
                <Input type='text' name='name' placeholder='Name' ></Input>
                <Input type='text' name='email' placeholder='Email' ></Input>
                <Input type='text' name='subject' placeholder='Subject' ></Input>
              </FormBox>

              <FormBox className='d-flex'>
                {/* <textarea name="" id="" cols="30" rows="9"></textarea> */}
                <TextArea name='message' placeholder='message' cols='35' rows='7' ></TextArea>
                <Button bg='#3e93fa' style={{ border: '2px solid white' }} >Send</Button>
              </FormBox>

            </Form>

            <Address> 👤 Sec-115, Sorkha, Noida<br />🏙️ 201301, UttarPradesh </Address>

            <Clip polygon='polygon(100% 0, 71% 0, 30% 100%, 100% 100%);' bg='#3e93fa'  ></Clip>
          </Right>
        </ContactContainer>
      </>
    </>
  )
}

export default Contact