import styled from 'styled-components'

const StyledFour = styled.div(({ theme }) => ({
  color: theme.palette.domino.color4
}))

const Four = () => {
  return (
    <StyledFour className="suit-text">
      4
    </StyledFour>
  )
}

export default Four
