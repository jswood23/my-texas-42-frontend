
import { Box, Typography } from '@mui/material'
import * as React from 'react'
import HoldingDominoesInHand from '../../../images/holding-dominoes-in-hand.jpg'

const SetupPage = () => {
  return (
    <>
      <Typography className="main-header">Setup</Typography>
      <Typography className="paragraph">
        In a traditional environment, the players sit around a flat table with teammates sitting across from each other.
        <br/><br/>
        Before the first round, the dominoes are shaken on the table and each player flips a domino.
        The player with the highest side on their domino shakes first. If two players tie, the highest second side on
        the domino decides who shakes first.
        <br/><br/>
        After the first round, the role of the shaker rotates clockwise around the table each round.
        <br/><br/>
        Once the dominoes are shaken, each player draws 7 dominoes. The two players on the opposing team of the shaker
        draw their dominoes first, followed by the shaker&apos;s teammate. The shaker takes the remaining dominoes.

        <div className="rules-image-container">
          <Box
            className="rules-image"
            component="img"
            src={HoldingDominoesInHand}
            alt="Holding dominoes in hand"
          />
          <Typography className="rules-image-description">
            Holding four dominoes in one hand
          </Typography>
        </div>

        Dominoes can be held in one’s hands or balanced on their sides, facing away from the other players.
        Players may not see the faces of other players&apos; dominoes.
      </Typography>
    </>
  )
}

export default SetupPage
