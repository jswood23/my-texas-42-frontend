
import { Typography } from '@mui/material'
import * as React from 'react'

const NormalRulesPage = () => {
  return (
    <>
      <Typography className="main-header">Normal Rules</Typography>
      <Typography className="paragraph">
        If a player wins a bid, the next step is for the winner to decide what the trump is and start the first trick of
        the round. The “trump” is a special dominant suit in the round and is decided by whoever wins the bid.
        Once the trump is declared, the first domino is laid on the table from the player who won the bid. Some variants
        allow for no trump to be declared, which is declared by the bidder saying “follow me”.
        The goal of the team that won the bid is to earn the number of points required to make their bid. For example,
        if a player bids 32, they must earn 32 out of the 42 possible points one can win in a bid. The goal of the
        opposing team is to prevent the bid-winning team from making their bid.
        Each “trick”, or set of four dominoes played by each player, is worth 1 point plus the amount of count.
        Whichever player places the highest domino wins the trick.
        Players place their dominoes in clockwise order, and after the first trick the player that won the previous
        trick plays first. If a team “makes their bid” or earns greater than or equal to the points they bid, there is
        no need to continue the mark.
        In this case the bidding team earns one mark, and the dominoes are shaken by the player to the left of the
        previous player who shook. Similarly, if the opposing team earns enough points to make it impossible for the
        bidding team to make their bid, the opposing team earns the mark.
        Tricks are won by playing the highest domino, but bids are won by winning count. More details about how to play
        a regular mark hand follow below.
      </Typography>
    </>
  )
}

export default NormalRulesPage
