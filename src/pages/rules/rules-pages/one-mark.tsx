import StyledRoot from '.'
import { Typography } from '@mui/material'
import * as React from 'react'

const OneMarkPage = () => {
  return (
    <StyledRoot>
      <Typography className="second-header">
        One Mark
      </Typography>
      <Typography className="paragraph">
        The One Mark variant allows for one-mark bids to be made if and only if the bidder is being forced to bid.
        One-mark calls are similar to two-mark calls in that the bidding team must win every trick in the hand.
        Special variants such as nil and splash can be played with one-mark bids.
      </Typography>
    </StyledRoot>
  )
}

export default OneMarkPage
