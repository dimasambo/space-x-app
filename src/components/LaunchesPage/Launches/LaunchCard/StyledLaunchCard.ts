import styled from 'styled-components'

type LaunchCardType = {
    count: number
}

export const StyledLaunchCard = styled.div<LaunchCardType>`
  margin: 30px 10px 0;
  border-radius: 10px;
  box-shadow: 0 1px 9px 2px rgba(29, 29, 29, 0.31);
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  transition: .1s;
  cursor: pointer;
  grid-row-end: ${(props) => (props.count % 3 === 0) 
          ? 'span 14' 
          : ((props.count % 3 === 1) ? 'span 23' : 'span 19')};

  &:hover {
    box-shadow: 0 1px 9px 2px rgba(29, 29, 29, 0.51);
  }
  
  .pokemonCardImgBox {
    border-radius: 50%;

    img {
      width: 250px;
    }
  }

  .pokemonCardNameBox {
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    span {
      font-size: 130%;
    }
  }
`