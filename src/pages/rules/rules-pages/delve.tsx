
import { Typography } from '@mui/material'
import * as React from 'react'

const DelvePage = () => {
  return (
    <>
      <Typography className="main-header">
        Delve
      </Typography>
      <Typography className="paragraph">
        Delving is a joke call, reserved for casual play and, especially, blowout games. To do this, a player must say
        &quot;delve&quot; on their turn to bid without having seen their own hand. This brings the bid up to 7 marks,
        which may still be outbid by other players. Once the bidding phase is over, the delving player may look at their
        hand before calling a trump or variant.
        <br/><br/>
        This is the only time a player can bid multiple marks out of sequential order.
      </Typography>
    </>
  )
}

export default DelvePage
