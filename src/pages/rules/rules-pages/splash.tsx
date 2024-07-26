import StyledRoot from '.'
import { Typography } from '@mui/material'
import * as React from 'react'

const SplashPage = () => {
  return (
    <StyledRoot>
      <Typography className="second-header">
        Splash
      </Typography>
      <Typography className="paragraph">
        Splash calls are played the same as a normal mark hand, with the exception that the bidder’s partner decides
        what the trump is. To make a “splash” call, the bidder must have at least three doubles in their hand. In a
        way, splash and plunge calls are a legal method of table talk. Some house rules allow for the bidder’s partner
        to call sevens or nil.
      </Typography>
    </StyledRoot>
  )
}

export default SplashPage
