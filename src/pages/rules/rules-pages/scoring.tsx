
import { Typography } from '@mui/material'
import * as React from 'react'

const ScoringPage = () => {
  return (
    <>
      <ul><Typography className="second-header">
        <li>Scoring</li>
      </Typography></ul>
      <Typography className="paragraph">
        Another important aspect to consider is count. Count dominos are identified as any domino whose total number of
        pips adds up to ten or five. The five count dominoes are the <Typography
        className="six-para">6</Typography>-<Typography className="four-para">4</Typography>, <Typography
        className="five-para">5</Typography>-<Typography className="five-para">5</Typography>, <Typography
        className="three-para">3</Typography>-<Typography className="two-para">2</Typography>, <Typography
        className="five-para">5</Typography>-0, and <Typography className="four-para">4</Typography>-<Typography
        className="one-para">1</Typography>. When a count domino is played in a trick the value of that trick is 1 plus
        the value of the count domino.
        So, a trick where the <Typography className="four-para">4</Typography>-<Typography
        className="four-para">4</Typography>, <Typography className="four-para">4</Typography>-<Typography
        className="six-para">6</Typography>, <Typography className="four-para">4</Typography>-0, and <Typography
        className="four-para">4</Typography>-<Typography className="one-para">1</Typography> are played is worth 1 + 10
        + 5, or 16 total points. Where the 1 point is the value of the whole trick, and the 10 and 5 are the values of
        each count domino added to that.
      </Typography>
    </>
  )
}

export default ScoringPage
