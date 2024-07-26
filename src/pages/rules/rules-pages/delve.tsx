import StyledRoot from '.'
import { Typography } from '@mui/material'
import * as React from 'react'

const DelvePage = () => {
  return (
    <StyledRoot>
      <Typography className="second-header">
        Delve
      </Typography>
      <Typography className="paragraph">
        Delving is a joke call, reserved for casual play and, especially, blowout games. To delve, a player must bid
        seven marks without having looked at their hand. From there they can call whatever they wish. This is the only
        time a player can bid multiple marks out of sequential order.
      </Typography>
    </StyledRoot>
  )
}

export default DelvePage
