import styled from 'styled-components'

const StyledFive = styled.div(({ theme }) => ({
  color: theme.palette.domino.color5
}))

const Five = () => {
  return (
    <StyledFive className="suit-text">
      5
    </StyledFive>
  )
}

export default Five
