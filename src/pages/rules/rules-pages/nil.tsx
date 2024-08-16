
import { Typography } from '@mui/material'
import * as React from 'react'

const NilPage = () => {
  return (
    <>
      <Typography className="second-header">
        Nil
      </Typography>
      <Typography className="paragraph">
        Nil, also known as nello or nillo, is the most one of the most complicated alternate game modes in 42. Nil has
        three important characteristics:
      </Typography>
      <ol>
        <Typography className="paragraph">
          <li>There are no trumps.</li>
        </Typography>
        <Typography className="paragraph">
          <li>The teammate of the bidder does not play.</li>
        </Typography>
        <Typography className="paragraph">
          <li>The bidder must <em>lose</em> every hand rather than <em>win</em> every hand.</li>
        </Typography>
      </ol>
      <Typography className="paragraph">
        Aside from these differences, the game is played as a normal mark hand. The bidder plays the first domino, and
        the winner of each trick leads the next trick.
        <br/><br/>
        If at the end of the round the bidder has not won a trick, then bidding team wins the marks. If at any time the
        bidder wins a trick, then the opposing team immediately wins the marks.
        <br/><br/>
        When nil is called by a player, they must declare whether doubles are high, low, or a suit of their own. This
        allows for more flexibility by the bidder and changes how good a player&apos;s hand is depending on what doubles
        they have.
      </Typography>
    </>
  )
}

export default NilPage
