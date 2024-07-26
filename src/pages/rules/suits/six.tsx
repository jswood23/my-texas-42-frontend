import { Typography } from '@mui/material'
import styled from 'styled-components'

const StyledSix = styled(Typography)(({ theme }) => ({
  color: theme.palette.domino.color1,
  fontWeight: 'bold',
  display: 'inline'
}))

const Six = () => {
  return (
    <StyledSix>
      6
    </StyledSix>
  )
}

export default Six
