
import { Typography } from '@mui/material'
import * as React from 'react'

const NilDoublesOwnSuitPage = () => {
  return (
    <>
      <Typography className="second-header">
        Doubles Are a Suit of Their Own
      </Typography>
      <Typography className="paragraph">
        “Doubles are a suit of their own” is said during nil, as well as in normal mark bids, when the bidder
        desires doubles to be their own suit. Like “doubles are low”, the doubles in each suit cease to be the
        highest in their suit.
        However, instead of becoming the lowest in their suit, doubles are REMOVED from their respective suits and
        become their OWN suit. The number on the double determines its order in the hierarchy, similar to other
        suits. In this call, the <Typography className="three-para">3</Typography>-<Typography
        className="three-para">3</Typography> is no longer a <Typography className="three-para">3</Typography> at
        all. It is a double. It cannot be played in suit if the suit is <Typography
        className="three-para">threes</Typography>.
      </Typography>
    </>
  )
}

export default NilDoublesOwnSuitPage
