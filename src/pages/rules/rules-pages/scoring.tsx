
import { Box, Typography } from '@mui/material'
import * as React from 'react'
import Four from '../suits/four'
import Six from '../suits/six'
import Blank from '../suits/blank'
import Five from '../suits/five'
import One from '../suits/one'
import Two from '../suits/two'
import Three from '../suits/three'
import CountDominoes from '../../../images/count-dominoes.png'

const ScoringPage = () => {
  return (
    <>
      <Typography className="main-header">
        Scoring
      </Typography>
      <Typography className="paragraph">
        There are 42 total points in each round. Each of the 7 tricks is worth 1 point. Additionally, there are
        5 <b>count</b> dominoes
        that are worth extra points when taken in a trick:

        <div className="rules-image-container">
          <Box
            className="rules-image"
            component="img"
            src={CountDominoes}
            alt="The 5 Count Dominoes"
          />
          <Typography className="rules-image-description">
            The 5 Count Dominoes
          </Typography>
        </div>

        Each of these dominoes&apos; sides add up to 5 or 10, and they are worth as many points as they have dots.
        For instance, the <Six/>-<Four/> is worth 10 points and the <Three/>-<Two/> is worth 5 points.
        <br/><br/>
        If a player wins the bid and their team takes <em>at least</em> as many points as their bid, then they win
        1 <b>mark</b>. If the
        opposing team takes enough points to keep the bidding team from making their bid, then they win 1 mark instead.
        <br/><br/>
        The first team to win 7 total marks wins the game.
      </Typography>
    </>
  )
}

export default ScoringPage
