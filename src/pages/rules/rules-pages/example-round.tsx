
import { Box, Typography } from '@mui/material'
import * as React from 'react'
import ExampleHand1 from '../../../images/example-game-1.png'
import ExampleHand2 from '../../../images/example-game-2.png'
import ExampleHand3 from '../../../images/example-game-3.png'
import ExampleHand4 from '../../../images/example-game-4.png'
import ExampleHand5 from '../../../images/example-game-5.png'
import ExampleHand6 from '../../../images/example-game-6.png'
import ExampleHand7 from '../../../images/example-game-7.png'
import ExampleHand8 from '../../../images/example-game-8.png'
import Blank from '../suits/blank'
import One from '../suits/one'
import Two from '../suits/two'
import Three from '../suits/three'
import Four from '../suits/four'
import Five from '../suits/five'
import Six from '../suits/six'

const ExampleRoundPage = () => {
  return (
    <>
      <Typography className="main-header">Example Round</Typography>
      <Typography className="paragraph">
        In the following example round, Player 1 and Player 2 are on one team, and Player 3 and Player 4 are on the
        opposing team.
        Player 1 has just won the bid for 31 points. Player 1 is now looking for a suit to call as trump.

        <div className="example-image-container">
          <Box
            className="example-image"
            component="img"
            src={ExampleHand1}
            alt="Example hand image 1"
          />
        </div>

        Since Player 1 has 3 <Four/>s (including the <Four/>-<Four/> and <Four/>-<Six/>), they decide to call <Four/> as
        the trump. Then, in the first trick, Player 1 leads the <Four/>-<Four/> because it is the highest <Four/> and is
        guaranteed to win. Player 3 plays the <Four/>-<Five/> so as not to play the <Four/>-<One/> because it would give
        5 points to Player 1. Player 2 plays the <Four/>-<Blank/> because it is their only <Four/>. Player 4 plays
        the <Four/>-<Three/> because it is their only <Four/>.

        <div className="example-image-container">
          <Box
            className="example-image"
            component="img"
            src={ExampleHand2}
            alt="Example hand image 2"
          />
        </div>

        Player 1 takes the trick with the <Four/>-<Four/>.
        There is no count in the above trick, so Player 1 takes 1 point for the trick. Then, Player 1 leads again
        because they won the trick. Player 1 leads the <Four/>-<Six/> because it is the highest <Four/> left. Player 3
        plays the <Four/>-<One/> because it is the only <Four/> they have left. Player 3 plays the <Five/>-<Five/>
        because it gives their team 10 points. Player 4 plays the <One/>-<Blank/> because they have no <Four/>s.

        <div className="example-image-container">
          <Box
            className="example-image"
            component="img"
            src={ExampleHand3}
            alt="Example hand image 3"
          />
        </div>

        Player 1 takes the trick with the <Four/>-<Six/>. The trick includes 10 points for Player
        2&apos;s <Five/>-<Five/>, 10 points for Player 1&apos;s <Four/>-<Six/>, 5 points for Player 3&apos;s <Four/>-
        <One/>, and 1 point for the trick. Player 1 takes 26 points for the trick, putting their team at 27
        total points for the round. Then, Player 1 plays the <Two/>-<Two/> because it is a double and is the highest in
        its suit. Player 3 plays the <Two/>-<One/>, Player 2 plays the <Two/>-<Blank/>, and Player 4 plays
        the <Five/>-<One/> because they have no <Two/>s.

        <div className="example-image-container">
          <Box
            className="example-image"
            component="img"
            src={ExampleHand4}
            alt="Example hand image 4"
          />
        </div>

        Player 1 takes the trick with the <Two/>-<Two/>. The trick has no count dominoes, so it is worth 1 point.
        Players 1 and 2 now have 28 points for the round. Player 1 leads the <One/>-<One/> because it is Player 1&apos;s
        last remaining double. Note that Player 1 still has one remaining <Four/>, but they are waiting to use that
        domino until later in the round. Player 3 plays the <Five/>-<Two/> because they have no <One/>s. Player 2 plays
        the <One/>-<Three/> because it is their only <One/>. Player 4 plays the <One/>-<Six/> because it is their
        only <One/>.

        <div className="example-image-container">
          <Box
            className="example-image"
            component="img"
            src={ExampleHand5}
            alt="Example hand image 5"
          />
        </div>

        Player 1 takes the trick with the <One/>-<One/>. The trick once again has no count dominoes, so it is worth 1
        point. Players 1 and 2 now have 29 points for the round. Player 1 leads the <Six/>-<Blank/> as an effort to give
        their partner the lead. Player 3 plays the <Six/>-<Six/> because it is the highest <Six/> and will likely win
        the round. Player 2 plays the <Six/>-<Three/>. Player 4 plays the <Five/>-<Blank/> to give their partner their
        remaining count.

        <div className="example-image-container">
          <Box
            className="example-image"
            component="img"
            src={ExampleHand6}
            alt="Example hand image 6"
          />
        </div>

        Player 3 takes the trick with the <Six/>-<Six/>. The trick includes 5 points for Player
        4&apos;s <Five/>-<Blank/>
        and 1 point for the trick. Players 3 and 4 now have 6 points for the round. Player 3 leads the <Blank/>-<Blank/>
        because it is a double. Player 2 plays the <Blank/>-<Three/> because it is their only <Blank/>. Player 4 plays
        the <Five/>-<Three/>, and Player 1 plays the <Four/>-<Two/>, using their trump to win the trick.

        <div className="example-image-container">
          <Box
            className="example-image"
            component="img"
            src={ExampleHand7}
            alt="Example hand image 7"
          />
        </div>

        Player 1 takes the trick with the <Four/>-<Two/>. The trick has no count dominoes, so it is worth 1 point.
        Players 1 and 2 now have 30 points for the round. Player 1 leads the <Three/>-<Two/>, Player 3 plays the
        <Six/>-<Two/>, Player 2 plays the <Six/>-<Five/>, and Player 4 plays the <Three/>-<Three/>.

        <div className="example-image-container">
          <Box
            className="example-image"
            component="img"
            src={ExampleHand8}
            alt="Example hand image 8"
          />
        </div>

        Player 4 takes the trick with the <Three/>-<Three/> because the starting suit was <Three/>s. The trick includes
        5 points for Player 1&apos;s <Three/>-<Two/> and 1 point for the trick. Players 3 and 4 now have 12 points for
        the round. Players 1 and 2 have 30 points for the round, which is 1 short of their 31 bid. Thus, Players 3 and 4
        win the mark for the round.
      </Typography>
    </>
  )
}

export default ExampleRoundPage
