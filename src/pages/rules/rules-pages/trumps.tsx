
import { Typography } from '@mui/material'
import * as React from 'react'
import Six from '../suits/six'
import Blank from '../suits/blank'
import Four from '../suits/four'
import Five from '../suits/five'

const TrumpsPage = () => {
  return (
    <>
      <Typography className="main-header">
        Trumps
      </Typography>
      <Typography className="paragraph">
        At the end of the bidding phase of each round, the bidder chooses a suit to be the <b>trump</b>. The trump is a special suit that
        wins tricks <em>even when it is not the starting suit</em>.
        <br/><br/>
        The bidder has three main options for the trump:
        <ol>
          <li>They can choose any of the seven suits (<Blank/> through <Six/>) to be trump.</li>
          <li>They can call that doubles (as a suit of their own) are trump.</li>
          <li>They can call &quot;Follow me&quot;, indicating that there is no trump and that the starting suit of each hand is guaranteed to take that hand.</li>
        </ol>
        If the starting suit is a <em>non-trump</em> suit and a player has a domino that is in that suit but is also a trump, then that domino is not included
        in the dominoes that the player must play on their turn. For example, if the trump is <Four/> and the starting suit is <Five/>, then a player with
        the <Four/>-<Five/> would not be required to play it because that domino is considered a <b>trump</b> and not a <Five/>.
      </Typography>
    </>
  )
}

export default TrumpsPage
