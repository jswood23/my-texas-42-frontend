
import { Typography } from '@mui/material'
import * as React from 'react'

const VariantsPage = () => {
  return (
    <>
      <Typography className="main-header">Variants</Typography>
      <Typography className="paragraph">
        There are many different variant rules used by different communities. Here are some of the most common ones:
        <ul>
          <li>Forced Bids</li>
          <li>Nil</li>
          <li>Splash</li>
          <li>Plunge</li>
          <li>Sevens</li>
          <li>Delve</li>
        </ul>
      </Typography>
    </>
  )
}

export default VariantsPage
