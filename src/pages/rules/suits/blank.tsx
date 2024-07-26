import { Typography } from '@mui/material'
import styled from 'styled-components'

const StyledBlank = styled(Typography)(({ theme }) => ({
  color: theme.palette.domino.color0,
  fontWeight: 'bold',
  display: 'inline'
}))

const Blank = () => {
  return (
    <StyledBlank>
      Blank
    </StyledBlank>
  )
}

export default Blank
