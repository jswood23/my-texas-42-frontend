import StyledRoot from '.'
import { Typography } from '@mui/material'
import * as React from 'react'

const TrumpsPage = () => {
  return (
    <StyledRoot>
      <ul><Typography className="second-header">
        <li>Trumps</li>
      </Typography></ul>
      <Typography className="paragraph">
        The game gets more interesting when trumps are considered. As said earlier, trumps are a special dominant suit.
        Trump can be any of the seven suits, and the trump can also be doubles if the bidder makes a call called
        “doubles are a suit of their own”.
        Designating the trump has two effects on the suit chosen. First, any domino with the chosen number on it is
        always that suit, no matter what is led. So, for example, if <Typography
        className="two-para">twos</Typography> are trumps and someone leads with the <Typography
        className="four-para">4</Typography>-<Typography className="four-para">4</Typography> and Jordan has
        the <Typography className="two-para">2</Typography>-<Typography className="four-para">4</Typography>, Jordan
        wouldn’t be required to play it because even if it were his only domino with a <Typography
        className="four-para">four</Typography> on it, it is not a <Typography className="four-para">four</Typography>,
        it is a <Typography className="two-para">two</Typography>.
        Second, unlike any other dominos, when played out of suit, a trump becomes the highest domino in the trick. This
        is referred to as “trumping in”. Ideally you should only trump in when you know you will get count. It is often
        advantageous to intentionally lose a trick you might have been able to trump into if all you’d lose is one
        point.
        Otherwise trumps work like any other suit. If a trump is led, other players must play a trump. If multiple
        players play a trump, the highest trump will win the trick.
      </Typography>
    </StyledRoot>
  )
}

export default TrumpsPage
