
import { Typography } from '@mui/material'
import * as React from 'react'

const SetupPage = () => {
  return (
    <>
      <Typography className="main-header">Getting Started</Typography>
      <Typography className="paragraph">
        In a traditional environment, the players sit around a flat table with teammates sitting across from each other.
        Each player then flips a domino.
        The player that has the highest domino <span>based on its suit</span> shakes first. Once the dominoes are
        shaken, the two players on the opposing team of the shaker draw their dominoes first, then the shaker’s teammate
        draws,
        then the shaker takes the dominoes that are left. Each player takes 7 dominoes. They can be held in one’s hands
        or balanced on their sides, facing away from the other players.
        The other players are not allowed to know what dominoes you have, including your partner. Virtually, all of this
        is done automatically.
      </Typography>
    </>
  )
}

export default SetupPage
