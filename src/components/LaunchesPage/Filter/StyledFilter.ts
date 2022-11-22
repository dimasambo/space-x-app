import styled from "styled-components";

export const StyledFilter = styled.div`
  display: flex;
  flex-direction: column;
  
  .filterHeader {
    display: block;
    margin: 10px 10px 0;
    border-radius: 10px;
    padding: 10px;
    font-weight: bold;
    font-size: 23px;
    cursor: pointer;
  }
  
  .filtersWrapper {
    display: flex;
    flex-wrap: wrap;
  }
`

type FilterItemType = {
    item: string
    filterItem: string
}

export const StyledFilterItem = styled.div<FilterItemType>`
  margin: 0 10px 20px;
  border-radius: 10px;
  padding: 10px;
  font-weight: bold;
  font-size: 17px;
  cursor: pointer;
  box-shadow: 0 1px 9px 2px rgba(29, 29, 29, 0.31);
  transition: .2s;
  background: ${props => (props.item === props.filterItem) && 'lightgrey'};

  &:hover {
    box-shadow: 0 1px 9px 2px rgba(29, 29, 29, 0.51);
  }
`