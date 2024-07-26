
import { Typography } from '@mui/material'
import * as React from 'react'

const TerminologyPage = () => {
  return (
    <>
      <Typography className="main-header">Terminology</Typography>
      <Typography className="paragraph">
        <ul>
          <li><b>Mark</b>: A point earned by winning a normal round. The first team to reach 7 marks wins the game.</li>
          <li><b>Trick</b>: A set of four dominoes, each played by a different player.</li>
          <li><b>Double</b>: A domino with the same number of dots on the top and bottom of the domino.</li>
          <li><b>Count</b>: A domino that has dots equal to a multiple of 5 on its surface. Count dominoes alter the
            amount of points a trick is worth.
          </li>
          <li><b>Suit</b>: A set of dots on either the upper or lower part of the domino. The highest suit on the first
            domino played in a trick is the “suit” for the round.
          </li>
          <li><b>Trump</b>: The suit that is set as the highest suit in the round.</li>
          <li><b>Hand</b>: The set of seven dominoes that is picked up by each player at the beginning of the round. Can
            also refer to a “round” of dominoes.
          </li>
          <li><b>Table Talk</b>: Communication about bidding or hands between teammates. Giving information about your
            hand to your teammate is illegal.
          </li>
          <li><b>Off</b>: A domino that is not guaranteed to win a trick.</li>
        </ul>
      </Typography>
    </>
  )
}

export default TerminologyPage
