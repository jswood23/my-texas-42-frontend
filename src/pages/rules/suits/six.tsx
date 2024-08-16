import { Typography } from '@mui/material'
import styled from 'styled-components'

const StyledSix = styled.div(({ theme }) => ({
  color: theme.palette.domino.color6
}))

const Six = () => {
  return (
    <StyledSix className="suit-text">
      6
    </StyledSix>
  )
}

export default Six
