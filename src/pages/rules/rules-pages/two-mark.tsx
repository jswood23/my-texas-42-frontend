
import { Typography } from '@mui/material'
import * as React from 'react'

const TwoMarkPage = () => {
  return (
    <>
      <Typography className="second-header">
        Two Mark Bids
      </Typography>
      <Typography className="paragraph">
        Many variants can only be called when the bid is at least 2 marks. These variants are called two-mark variants.
        They include:
        <ul>
          <li>Nil</li>
          <li>Splash</li>
          <li>Plunge</li>
          <li>Sevens</li>
        </ul>
        In all 2-mark hands, the dominoes are stacked along the middle of the table instead of moved to the side of the
        table. This makes the game more interesting as it requires players to remember which dominoes have already been
        played.
      </Typography>
    </>
  )
}

export default TwoMarkPage
