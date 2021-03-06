import styled from 'styled-components';

const DefaultButton =  styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: ${props => props.padding || "20px 0"};
    background: #6C9AD0;
    border-radius: 5px;
    color: white;
    text-transform: capitalize;
    width: ${props => props.width || "210px"};
  `;

export default DefaultButton;