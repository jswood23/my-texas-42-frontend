
import { Typography } from '@mui/material'
import * as React from 'react'

const ForcedBidPage = () => {
  return (
    <>
      <Typography className="second-header">
        Forced Bids
      </Typography>
      <Typography className="paragraph">
        The most common 42 variant rule is the forced bid rule. The forced bid rule states that when the bid is passed
        by everyone at the table, the person who shakes (i.e., the person who bids last) must bid a minimum of a
        certain amount. Generally, this value is 30, however in some variants, such as the one played by the Texas A&M
        Singing Cadets, the minimum bid is 31.
      </Typography>
    </>
  )
}

export default ForcedBidPage
