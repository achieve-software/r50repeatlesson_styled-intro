import styled from "styled-components"

export const Button=styled.button`

/* background-color: hotpink;
color: white; */
background-color: ${(props)=>(props.ab ? "white" : "hotpink")};
color: ${({ab})=>(ab ? "hotpink" : "white")};
width: 8rem;
padding: 1rem 2rem;
border-radius: 1rem;
border: 2px solid hotpink;
font-size: 1.1rem;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

&:hover{
    transform: scale(0.98);
    cursor: pointer;
}

`

export const FS13Button =styled(Button)`
background-color: ${({react})=> (react ? "red" :"white")};
color: ${({react})=> (react ? "white" :"red")};
border-color: ${({react})=> (react || "red")};
`