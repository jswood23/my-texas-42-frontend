import { Typography } from '@mui/material'
import styled from 'styled-components'

const StyledFour = styled(Typography)(({ theme }) => ({
  color: theme.palette.domino.color4,
  fontWeight: 'bold',
  display: 'inline'
}))

const Four = () => {
  return (
    <StyledFour>
      4
    </StyledFour>
  )
}

export default Four
