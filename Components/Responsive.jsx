import {css} from "styled-components";

// mobile ek function hai jo media query wali css return karta hai.
// jab is function ko call karte hain to ye props leta hai.
// isme props vo css hoti ha jo media query m lagi jani hai.
// agar ek property hoti hai to usse as a "string" pass kar do
// agr ek se jayada property hain to use as a js object pass karo
export const mobile = (props) => {

    return css`
        @media only screen and (max-width:480px){
            ${props}
        }
    `;
};

// We can create such more functions for different break points
// Like this

export const mobile2 = (props)=>{
    return css`
    @media only screen and (max-width:620px){
        ${props}
    }
    `;
};
export const mobile3 = (props)=>{
    return css`
    @media only screen and (max-width:420px){
        ${props}
    }
    `;
};
export const mobile4 = (props)=>{
    return css`
    @media only screen and (max-width:391px){
        ${props}
    }
    `;
};
export const mobile5 = (props)=>{
    return css`
    @media only screen and (max-width:361px){
        ${props}
    }
    `;
};
export const mobile6= (props)=>{
    return css`
    @media only screen and (max-width:768px){
        ${props}
    }
    `;

};
export const mobile7 = (props)=>{
    return css`
    @media only screen and (max-width:620px){
        ${props}
    }
    `;
};
export const mobile8 = (props)=>{
    return css`
    @media only screen and (max-width:591px){
        ${props}
    }
    `;
};

export const mobile9 = (props)=>{
    return css`
    @media only screen and (max-width:672px){
        ${props}
    }
    `;
};
export const mobile10 = (props)=>{
    return css`
    @media only screen and (max-width:1000){
        ${props}
    }
    `;
};


export const mobile11 = (props)=>{
    return css`
    @media only screen and (max-width:370){
        ${props}
    }
    `;
};


