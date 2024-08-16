
import { Typography } from '@mui/material'
import * as React from 'react'

const SplashPage = () => {
  return (
    <>
      <Typography className="main-header">
        Splash
      </Typography>
      <Typography className="paragraph">
        Splash calls can only be made by the bidder if they have at least three doubles in their hand. When a splash
        call is made, the bidder&apos;s partner must decide the trump and lead the first trick.
        <br/><br/>
        If the sevens or nil variants are allowed by the ruleset, then the bidder&apos;s partner may choose to call one
        of those variants instead of a trump.
      </Typography>
    </>
  )
}

export default SplashPage
