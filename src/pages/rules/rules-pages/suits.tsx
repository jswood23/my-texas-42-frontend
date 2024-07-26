
import { Typography } from '@mui/material'
import * as React from 'react'

const SuitsPage = () => {
  return (
    <>
      <ul><Typography className="second-header">
        <li>Suits</li>
      </Typography></ul>
      <Typography className="paragraph">
        It is essential to understand how suits work. There are seven basic suits, <Typography
        className="six-para">sixes</Typography>, <Typography className="five-para">fives</Typography>, <Typography
        className="four-para">fours</Typography>, <Typography className="three-para">threes</Typography>, <Typography
        className="two-para">twos</Typography>, <Typography className="one-para">ones</Typography>, and blanks. The no
        suit call is “follow me”, and there is also a “doubles are a suit of their own” call.
        The suit of a domino/trick is set when the first domino is played. By default, the suit is the higher of the two
        numbers on the domino. So, a <Typography className="four-para">four</Typography>-<Typography
        className="two-para">two</Typography> would be a <Typography className="four-para">four</Typography>, and the
        suit of the trick is also a <Typography className="four-para">four</Typography>. So, for this trick, any domino
        with a <Typography className="four-para">four</Typography> on it <span>except trump</span> becomes a <Typography
        className="four-para">four</Typography>, no matter the other number on it.
        This is important for a few reasons. To win the trick, one must have the highest value domino on the table. The
        wrinkle is that one cannot necessarily play whatever they want. For starters, if one possesses a domino of the
        same suit as what was led, then they must play it.
        If one has multiples of the same suit as the lead domino, then they can choose which one they would like to play
        amongst those in suit. If one has nothing in-suit, then they can play whatever they choose, but the domino is
        worthless to win the trick it is played in.
        This is where one would want to play count if their partner led or withhold it otherwise. The hierarchy of
        dominoes in a suit is by the numerical value of the secondary set of dots EXCEPT FOR THE DOUBLE. The double is
        the highest in every suit.
        Otherwise, the higher the secondary number, the higher the domino’s value in the suit. The exception to all of
        this is trumps.
      </Typography>
      <Typography className="paragraph">
        For example, if the suit in a trick is <Typography className="five-para">fives</Typography>, no players play
        trump, one player plays the <Typography className="five-para">5</Typography>-<Typography
        className="six-para">6</Typography>, and another plays the <Typography
        className="five-para">5</Typography>-<Typography className="five-para">5</Typography>, the player that played
        the <Typography className="five-para">5</Typography>-<Typography className="five-para">5</Typography> will win
        the trick because the <Typography className="five-para">5</Typography>-<Typography
        className="five-para">5</Typography> is the double of the <Typography className="five-para">5s</Typography>.
        Despite the <Typography className="five-para">5</Typography>-<Typography
        className="five-para">5</Typography> being numerically being less than the <Typography
        className="five-para">5</Typography>-<Typography className="six-para">6</Typography>, the <Typography
        className="five-para">5</Typography>-<Typography className="five-para">5</Typography> still wins because it is a
        double and the suit is <Typography className="five-para">fives</Typography>.
      </Typography>
    </>
  )
}

export default SuitsPage
