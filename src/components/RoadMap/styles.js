import styled from 'styled-components'

const RoadMapContainerStyled = styled.div`
  margin-top: 150px;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  object-fit: cover;
  background-position: center;
  min-height: 175px;
  z-index: 100;

  > img {
    width: 100%;
  }
`

export const RoadMapContainer = (props) => {
  const style = {}
  if (props.bgimage && !props.isClosed) {
    style.backgroundImage = `url(${props.bgimage})`
  } else {
    style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.bgimage})`
  }

  return (
    <RoadMapContainerStyled {...props} style={style}>
      {props.children}
    </RoadMapContainerStyled>
  )
}