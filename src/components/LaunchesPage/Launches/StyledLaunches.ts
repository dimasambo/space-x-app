import styled from 'styled-components'

export const StyledLaunches = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(300px,1fr));
  grid-auto-rows: 10px;
`

export const StyledModalLaunch = styled.div`
  position: fixed;
  width: 70vw;
  height: 80vh;
  top: 10vh;
  left: 15vw;
  border-radius: 10px;
  box-shadow: 0 1px 9px 2px rgba(29, 29, 29, 0.31);
  padding: 30px;
  background: whitesmoke;
  
  .closeModal {
    position: fixed;
    top: 11vh;
    right: 15vw;
    cursor: pointer;
    padding: 10px;
    font-size: 17px;
    font-weight: bold;
  }
  
  .launchDetails {
    .detailLaunch {
      margin: 10px 0;
      font-size: 17px;
      
      span {
        font-weight: bold;
      }
    }
  }
`
