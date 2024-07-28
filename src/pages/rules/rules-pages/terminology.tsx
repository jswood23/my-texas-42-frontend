
import { Typography } from '@mui/material'
import * as React from 'react'
import Blank from '../suits/blank'
import Six from '../suits/six'

const TerminologyPage = () => {
  return (
    <>
      <Typography className="main-header">Terminology</Typography>
      <Typography className="paragraph">
        <ul>
          <li><b>Mark</b>: A point earned by winning a normal round. The first team to reach 7 marks wins the game.</li>
          <li><b>Trick</b>: A set of four dominoes, each played by a different player. Each trick is worth one point
            within a round.
          </li>
          <li><b>Double</b>: A domino with the same number of dots on both sides.</li>
          <li><b>Count</b>: A domino whose dots sum up to a multiple of 5 on its surface. Each count domino is worth the
            sum of its dots in points within the round.
          </li>
          <li><b>Suit</b>: A set of dots on either the upper or lower part of the domino. Can be any number
            between <Blank/> and <Six/>.
          </li>
          <li><b>Trump</b>: The suit that is chosen as the highest suit at the beginning of each round. This suit is
            decided
            on by the winner of the bid.
          </li>
          <li><b>Starting Suit</b>: The suit that is led at the beginning of each trick. If the trump suit is present
            on the starting domino, then it is the starting suit. Otherwise, the higher suit on the domino is the
            starting suit.
          </li>
          <li><b>Hand</b>: The set of seven dominoes that is picked up by each player at the beginning of the round. Can
            also refer to a “round” of dominoes.
          </li>
          <li><b>Shake</b>: To randomly arrange the dominoes face-down on the table. This is done by a single player
            pushing
            the dominoes around on the table until they have been sufficiently randomized.
          </li>
          <li><b>Table Talk</b>: Communication about bidding or hands between teammates during a round. This behavior is
            strictly prohibited.
          </li>
          <li><b>Off</b>: A domino that will likely not win a trick.</li>
        </ul>
      </Typography>
    </>
  )
}

export default TerminologyPage
