
import { Typography } from '@mui/material'
import * as React from 'react'
import Blank from '../suits/blank'
import Six from '../suits/six'
import Three from '../suits/three'

const NilDoublesOwnSuitPage = () => {
  return (
    <>
      <Typography className="main-header">
        Doubles as a Suit of Their Own
      </Typography>
      <Typography className="paragraph">
        When a player declares nil with doubles as a suit of their own, the doubles are no longer part of their
        respective suits. Instead, they form an additional suit to make a total of 8 suits. The doubles are ordered
        according to their number, with the <Blank/>-<Blank/> being the lowest domino in the suit and
        the <Six/>-<Six/> being the highest in the suit. For example, the <Three/>-<Three/> is no longer a <Three/>, but
        is instead a part of the <b>doubles</b> suit.
      </Typography>
    </>
  )
}

export default NilDoublesOwnSuitPage
