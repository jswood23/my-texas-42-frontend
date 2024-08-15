import { Typography } from '@mui/material'
import styled from 'styled-components'

const StyledTwo = styled(Typography)(({ theme }) => ({
  color: theme.palette.domino.color2,
  fontWeight: 'bold',
  display: 'inline'
}))

const Two = () => {
  return (
    <StyledTwo>
      2
    </StyledTwo>
  )
}

export default Two
