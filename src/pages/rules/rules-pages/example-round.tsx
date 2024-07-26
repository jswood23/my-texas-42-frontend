
import { Typography } from '@mui/material'
import * as React from 'react'

const ExampleRoundPage = () => {
  return (
    <>
      <Typography className="main-header">Example Hand</Typography>
      <Typography className="paragraph">
        Let’s say that Josh wins a 31 bid and calls <Typography className="four-para">fours</Typography> as the trump.
        Because he won his bid, he plays first, and he decides to play the <Typography
        className="four-para">4</Typography>-<Typography className="four-para">4</Typography>. The other players must
        play dominoes with <Typography className="four-para">fours</Typography> on it because the first domino is
        a <Typography className="four-para">four</Typography>. The other players play (beginning with the player to
        Josh’s left and moving clockwise, ending at the player at Josh’s right) a <Typography
        className="four-para">4</Typography>-<Typography className="one-para">1</Typography>, <Typography
        className="four-para">4</Typography>-<Typography className="five-para">5</Typography>, and a <Typography
        className="four-para">4</Typography>-<Typography className="three-para">3</Typography> respectively. Josh wins
        the bid because he played the double <Typography className="four-para">4</Typography>, the highest domino in the
        suit.
        By winning this trick, Josh earned 6 points towards making his bid. He earned one point because he won the
        trick, and an additional 5 points because of the <Typography className="four-para">4</Typography>-<Typography
        className="one-para">1</Typography>, which is count.
      </Typography>
      <Typography className="paragraph">
        Next, Josh plays the <Typography className="six-para">6</Typography>-<Typography
        className="four-para">4</Typography>. If <Typography className="four-para">fours</Typography> were not the
        trump, the suit for the trick would be <Typography className="six-para">sixes</Typography>. However,
        because <Typography className="four-para">fours</Typography> are the trump, the <Typography
        className="six-para">6</Typography>-<Typography className="four-para">4</Typography> is a <Typography
        className="four-para">four</Typography>, NOT a <Typography className="six-para">six</Typography>. Therefore, the
        suit is <Typography className="four-para">four</Typography> and every player must play a <Typography
        className="four-para">four</Typography> if they have it. Josh’s partner, Owen, has the <Typography
        className="three-para">3</Typography>-<Typography className="two-para">2</Typography> domino, which is a
        5-count.
        Owen wants to give Josh count, however Owen has to play in suit. So he plays the <Typography
        className="four-para">4</Typography>-0. Aidan plays the <Typography
        className="two-para">2</Typography>-<Typography className="one-para">1</Typography>, and Roman plays
        the <Typography className="one-para">1</Typography>-0. Aidan and Roman do not have to play in suit because they
        do not have a four, so they can play whatever they want. Because Josh played the highest <Typography
        className="four-para">4</Typography>, he wins the trick worth 11 points due to the <Typography
        className="six-para">6</Typography>-<Typography className="four-para">4</Typography> being a 10-count.
        This brings the total amount of points that Owen and Josh have won to 11+6 = 17 points.
      </Typography>
      <Typography className="paragraph">
        Josh decides to play the <Typography className="five-para">5</Typography>-0 next. Because <Typography
        className="five-para">5</Typography> is the highest suit on the domino, the suit is <Typography
        className="five-para">fives</Typography>. Roman sees a chance to take the trick and plays the <Typography
        className="five-para">5</Typography>-<Typography className="five-para">5</Typography> domino. Owen plays
        the <Typography className="four-para">4</Typography>-<Typography className="two-para">2</Typography>, and Aidan
        plays the <Typography className="three-para">3</Typography>-0.
        The <Typography className="five-para">5</Typography>-<Typography className="five-para">5</Typography> is the
        highest <Typography className="five-para">5</Typography>, so if no trumps were played Roman would have won the
        trick, however Owen played the <Typography className="four-para">4</Typography>-<Typography
        className="two-para">2</Typography>, which is a trump. If Owen had a <Typography
        className="five-para">five</Typography>, he would be forced to play it, however because he doesn’t have
        a <Typography className="five-para">five</Typography> he can play whatever he wants, and uses this opportunity
        to secure the trick for his team.
        Owen wins the trick, which is worth 1+5+10= 16 points. This brings Owen’s team points up to 17+16 = 33 points.
        Because Josh bid 31 points and his team has secured 33 points, Josh and Owen have made their bid and win the
        mark.
      </Typography>
    </>
  )
}

export default ExampleRoundPage
