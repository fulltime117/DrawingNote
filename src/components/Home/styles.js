import styled, { css } from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-left: 25px;

  .general-content table tr, td{
    border: none;
    padding: 5px;
    padding-left: 10px;
  }

  
#keyInput {
  position: fixed;
  top: 25px;
  right: 20%;
}


#console-input {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 50px;
  opacity: 0.2;
  outline: none !important;
}

`
