import { Typography } from '@mui/material'
import styled from 'styled-components'

const StyledBlank = styled.div(({ theme }) => ({
  color: theme.palette.domino.color0
}))

const Blank = () => {
  return (
    <StyledBlank className="suit-text">
      Blank
    </StyledBlank>
  )
}

export default Blank
