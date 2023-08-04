import styled from 'styled-components';


export const List = styled.ul`
padding: 0;
margin-top:30px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border: 1px solid lightgrey;
  border-radius: 10px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.3);
  padding: 5px 10px;
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: bold;
  width: 400px;
`;

export const Name = styled.span``;

export const Number = styled.span`
  color: FireBrick;
  margin-left: 20px;
`;

export const Button = styled.button`
width: 40px;
height: 40px
color: red;
background-color: transparent;
border: none;
cursor:pointer;
color: crimson;

&:hover {
    color: gray;
  }

`;
