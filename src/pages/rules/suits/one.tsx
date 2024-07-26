import { Typography } from '@mui/material'
import styled from 'styled-components'

const StyledOne = styled(Typography)(({ theme }) => ({
  color: theme.palette.domino.color1,
  fontWeight: 'bold',
  display: 'inline'
}))

const One = () => {
  return (
    <StyledOne>
      1
    </StyledOne>
  )
}

export default One
