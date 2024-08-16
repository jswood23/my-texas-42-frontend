
import { Typography } from '@mui/material'
import * as React from 'react'

const PlungePage = () => {
  return (
    <>
      <Typography className="main-header">
        Plunge
      </Typography>
      <Typography className="paragraph">
        A plunge round operates in the same way as a splash round except for two important distinctions:
      </Typography>
      <ol>
        <Typography className="paragraph">
          <li>The bidder must have at least four doubles to make a plunge call.</li>
        </Typography>
        <Typography className="paragraph">
          <li>The ante of the round is raised by 1. For instance, if the bidder bid 2 marks and called plunge, then the
            round is now worth 3 marks.</li>
        </Typography>
      </ol>
    </>
  )
}

export default PlungePage
