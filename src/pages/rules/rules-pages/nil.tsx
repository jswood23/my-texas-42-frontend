import StyledRoot from '.'
import { Typography } from '@mui/material'
import * as React from 'react'

const NilPage = () => {
  return (
    <StyledRoot>
      <Typography className="second-header">
        Nil
      </Typography>
      <Typography className="paragraph">
        Nil, also known as nello or nillo, is the most one of the most complicated alternate game modes in 42,
        however it is also one of the most common. Nil has three important characteristics:
      </Typography>
      <ol>
        <Typography className="paragraph">
          <li>There are no trumps.</li>
        </Typography>
        <Typography className="paragraph">
          <li>The teammate of the bidder does not play</li>
        </Typography>
        <Typography className="paragraph">
          <li>The bidder is trying to LOSE every hand rather than win every hand.</li>
        </Typography>
      </ol>
      <Typography className="paragraph">
        Besides these, the game is played as a normal mark hand. The bidder plays the first domino, dominoes are
        played clockwise, and the winner of the trick plays the next domino.
        Because it is a multi-mark bid, the dominoes stay in the middle of the table rather than be pulled to the
        side of whoever wins the trick. New dominoes are stacked on top of the old ones. If the bidding team loses
        every trick in the hand, they win the marks they bid.
        If the opposing team forces the bidder to win a trick, the opposing team wins the marks. The reason nil is
        so difficult to learn is because it requires players to invert their thinking.
        Good dominoes suddenly become trash dominoes that you want to get rid of as soon as possible, and bad
        dominoes become good. The game gets even more complicated when “Doubles Low” and “Doubles are a Suit” calls
        are made.
      </Typography>
    </StyledRoot>
  )
}

export default NilPage
