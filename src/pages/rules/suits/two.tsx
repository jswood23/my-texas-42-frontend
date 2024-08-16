import { Typography } from '@mui/material'
import styled from 'styled-components'

const StyledTwo = styled.div(({ theme }) => ({
  color: theme.palette.domino.color2
}))

const Two = () => {
  return (
    <StyledTwo className="suit-text">
      2
    </StyledTwo>
  )
}

export default Two
