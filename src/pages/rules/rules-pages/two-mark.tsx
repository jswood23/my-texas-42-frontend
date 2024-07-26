import StyledRoot from '.'
import { Typography } from '@mui/material'
import * as React from 'react'

const TwoMarkPage = () => {
  return (
    <StyledRoot>
      <Typography className="second-header">
        Two Mark
      </Typography>
      <Typography className="paragraph">
        The two-mark bid is a bid that indicates the bidder wants to bid two marks on their hand. The catch is that
        the bidder must win every trick in the hand, and if they lose even one trick the opposing team wins two marks.
        A two-mark bid beats any one-mark bid below it <span>30, 31, 32, 42, etc.</span>. A player can also bid more
        than two marks ONLY if another player has bid a number of marks one below the marks you would like to bid. For
        example, if I bid two marks and you’re bidding after me, you are able to bid three marks. My teammate after
        you can bid four marks only if you decide to bid three marks.
      </Typography>
      <Typography className="paragraph">
        There are many unique game modes that require at least a two-mark bid to be able to do, however normal hands
        are possible with two-mark bids as well. The special game modes that you can play with multi-mark bids are
        outlined below.
      </Typography>
    </StyledRoot>
  )
}

export default TwoMarkPage
