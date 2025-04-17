import styled from 'styled-components'

const StyledThree = styled.div(({ theme }) => ({
  color: theme.palette.domino.color3
}))

const Three = () => {
  return (
    <StyledThree className="suit-text">
      3
    </StyledThree>
  )
}

export default Three
