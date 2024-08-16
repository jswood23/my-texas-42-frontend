
import { Typography } from '@mui/material'

const BiddingPage = () => {
  return (
    <>
      <Typography className="main-header">
        Bidding
      </Typography>
      <Typography className="paragraph">
        At the beginning of each round, once all players have drawn and looked at their seven dominoes, the bidding phase begins.
        Starting with the player to the left of the shaker, each player has exactly one opportunity to bid. There is no second
        round of bidding.
        <br/><br/>
        On their turn to bid, a player may either pass or bid a number of points. If a player chooses not to pass, then the minimum
        that they can bid is either 30 points or the current highest bid in the round plus one, whichever is higher. For example,
        if the current highest bid is 31 points, then the next player must either pass or bid at least 32 points.
        <br/><br/>
        A player may also bid 2 <b>marks</b>. This is a special bid that requires the player to win all 42 points in the round. If they
        do so, then their team receives 2 marks. Otherwise, the other time receives 2 marks. This also requires the next player to either
        pass or bid 3 marks, and so on.
        <br/><br/>
        At the end of the bidding phase, the player who made the highest bid wins the bid. They may then either declare the <b>trump</b> for
        the round or declare a <b>variant</b> for the round if the ruleset allows for it.
        <br/><br/>
        Once the winning bidder has declared the trump or variant, the round begins with the winning bidder playing a domino to start the
        first trick.
      </Typography>
    </>
  )
}

export default BiddingPage
