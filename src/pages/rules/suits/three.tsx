import { Typography } from '@mui/material'
import styled from 'styled-components'

const StyledThree = styled(Typography)(({ theme }) => ({
  color: theme.palette.domino.color1,
  fontWeight: 'bold',
  display: 'inline'
}))

const Three = () => {
  return (
    <StyledThree>
      3
    </StyledThree>
  )
}

export default Three
