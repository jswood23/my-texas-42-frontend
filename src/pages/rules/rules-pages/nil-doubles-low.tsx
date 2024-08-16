
import { Typography } from '@mui/material'
import * as React from 'react'

const NilDoublesLowPage = () => {
  return (
    <>
      <Typography className="main-header">
        Doubles are Low
      </Typography>
      <Typography className="paragraph">
        “Doubles are low” is a call that is made only in nil hands. When this call is made, doubles become
        the <em>lowest</em> in their suit rather than the highest in their suit. This is often called when the
        nil-bidding player has one or more doubles in their hand.
      </Typography>
    </>
  )
}

export default NilDoublesLowPage
