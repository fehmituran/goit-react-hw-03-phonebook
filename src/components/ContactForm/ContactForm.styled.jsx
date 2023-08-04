import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  padding: 25px;

  background-color: #fff;
  border: 1px solid lightgrey;
  border-radius: 5px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.3);
`;

export const FormField = styled.div`
  padding-right: 20px;
  margin-bottom: 10px;
`;

export const Label = styled.label``;

export const Input = styled.input`
  width: 100%;
  font-size: 18px;

  border: 1px solid gray;
  border-radius: 5px;
  height: 35px;
  margin-top: 5px;
  padding: 5px;
`;

export const Span = styled.span`
  font-size: 20px;
`;

export const Button = styled.button`
  font-size: 18px;
  padding: 10px 20px;
  border-radius: 5px;
  color: #fff;
  background: #262c37;
  letter-spacing: 2px;

  &:hover {
    background-color: #fff;
    color: #262c37;
  }

  cursor: pointer;
`;

export const ButtonField = styled.div`
  display: flex;
  justify-content: flex-end;
`;
