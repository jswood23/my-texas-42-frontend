
import { Typography } from '@mui/material'
import * as React from 'react'

const ForcedBidPage = () => {
  return (
    <>
      <Typography className="main-header">
        Forced Bids
      </Typography>
      <Typography className="paragraph">
        The forced bid rule is the most common 42 variant. The forced bid rule states that when the bid is passed
        by 3 players, the last person to bid must bid a minimum of a certain amount. Usually, this value is 30, but it
        is sometimes 31, as played by the Texas A&M Singing Cadets.
        <br/><br/>
        The forced bid rule is used to keep the game moving and to prevent players from passing indefinitely.
      </Typography>
    </>
  )
}

export default ForcedBidPage
