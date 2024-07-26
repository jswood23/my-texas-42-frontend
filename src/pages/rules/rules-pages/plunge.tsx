import StyledRoot from '.'
import { Typography } from '@mui/material'
import * as React from 'react'

const PlungePage = () => {
  return (
    <StyledRoot>
      <Typography className="second-header">
        Plunge
      </Typography>
      <Typography className="paragraph">
        Plunge operates the same as Splash, except for two important distinctions:
      </Typography>
      <ol>
        <Typography className="paragraph">
          <li>A player must have at least four doubles to make a plunge call.</li>
        </Typography>
        <Typography className="paragraph">
          <li>The number of marks bid raises by one.</li>
        </Typography>
      </ol>
      <Typography className="paragraph">
        For example, if one bids two mark and calls plunge, the bid raises to three-mark. Other than these two
        distinctions, plunge operates the same as splash.
      </Typography>
    </StyledRoot>
  )
}

export default PlungePage
