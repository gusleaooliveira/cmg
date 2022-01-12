import styled from 'styled-components'
import { IRadioItem } from './index.types'

export const Group = styled.div`
  display: flex;
  flex-direction: row;
  width: 200px;
  justify-content: space-between;
`;

export const RadioItem = styled.div<IRadioItem>`
  ${(props)=>{ 
    switch(props.checked){
      case true:
        return `
          cursor: pointer;
          background-color: #28C76F;
          color: #fff;
          padding: 8px 18px;
          border-radius: 24px;
        `
      case false:
        return `
          cursor: pointer;
          background-color: #F8F8F8;
          color: #6E6B7B;
          padding: 8px 18px;
          border-radius: 24px;
        `
    }
  }}
`;