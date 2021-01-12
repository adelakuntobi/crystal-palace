import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background: #F7FAFF;
  border-radius: 8px;
`;

const Review = (props) => {
  const { name, picture } = props;
  return (
    <Container className="w-full grid grid-flow-col gap-4 items-center justify-start p-3 m-4">
      <img src={picture} alt="User" className="w-24 rounded" />
      <div className="">
        <h3 className="font-bold text-lg">{name}</h3>
        <p className="text-xs">A charming choice, this diamond infinity pendant makes a sweet
        statement of forever.</p>
      </div>
    </Container>
  )
}

export default Review
