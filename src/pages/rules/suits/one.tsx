import styled from 'styled-components'

const StyledOne = styled.div(({ theme }) => ({
  color: theme.palette.domino.color1
}))

const One = () => {
  return (
    <StyledOne className="suit-text">
      1
    </StyledOne>
  )
}

export default One
