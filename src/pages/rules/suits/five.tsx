import { Typography } from '@mui/material'
import styled from 'styled-components'

const StyledFive = styled(Typography)(({ theme }) => ({
  color: theme.palette.domino.color1,
  fontWeight: 'bold',
  display: 'inline'
}))

const Five = () => {
  return (
    <StyledFive>
      5
    </StyledFive>
  )
}

export default Five
