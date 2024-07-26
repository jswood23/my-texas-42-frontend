
import { Typography } from '@mui/material'
import * as React from 'react'

const NilDoublesLowPage = () => {
  return (
    <>
      <Typography className="second-header">
        Doubles are low
      </Typography>
      <Typography className="paragraph">
        “Doubles are low” is a call that is made only in nil hands. When this call is made, doubles become the
        LOWEST dominoes in their suit rather than the highest in their suit, as they normally are. For example,
        the hierarchy from lowest to highest of the <Typography className="five-para">5s</Typography> suit when
        doubles are low is: <Typography className="five-para">5</Typography>-<Typography
        className="five-para">5</Typography>, <Typography className="five-para">5</Typography>-0, <Typography
        className="five-para">5</Typography>-1, <Typography className="five-para">5</Typography>-<Typography
        className="two-para">2</Typography>, <Typography className="five-para">5</Typography>-<Typography
        className="three-para">3</Typography>, <Typography className="five-para">5</Typography>-4, <Typography
        className="five-para">5</Typography>-<Typography className="six-para">6</Typography>.
      </Typography>
    </>
  )
}

export default NilDoublesLowPage
