
import { Typography } from '@mui/material'
import * as React from 'react'

const SevensPage = () => {
  return (
    <>
      <Typography className="main-header">
        Sevens
      </Typography>
      <Typography className="paragraph">
        When sevens is called by the bidder, all players must show all of their dominoes. Then, each player must play
        their domino whose sum of the two sides is closest to 7. The bidder takes the trick if they or their partner
        have the closest to 7 or are tied for closest to 7. If they do not, then the opposing team immediately wins the
        marks for the round.
      </Typography>
    </>
  )
}

export default SevensPage
