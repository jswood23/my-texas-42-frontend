import { Typography } from '@mui/material'
import * as React from 'react'
import Blank from '../suits/blank'
import One from '../suits/one'
import Two from '../suits/two'
import Three from '../suits/three'
import Four from '../suits/four'
import Five from '../suits/five'
import Six from '../suits/six'

const SuitsPage = () => {
  return (
    <>
      <Typography className="main-header">
        Suits
      </Typography>
      <Typography className="paragraph">
        There are seven basic <b>suits</b> in the game:
        <ul>
          <li><Blank/></li>
          <li><One/></li>
          <li><Two/></li>
          <li><Three/></li>
          <li><Four/></li>
          <li><Five/></li>
          <li><Six/></li>
        </ul>
        The highest domino in each suit is the <b>double</b> of that suit. For example, the <Five/>-<Five/> is the highest domino
        in the <Five/> suit, higher than the <Five/>-<Six/>.
        <br/><br/>
        The player who wins the bid may in some instances declare that doubles are a suit of their own. In this case, there are
        now eight suits in the game, with doubles being their own suit and not a part of their normal suits.
        <br/><br/>
        The <b>starting suit</b> of a trick is set when the first domino is played. By default, the suit is the higher of
        the two numbers on the domino. So, when a <Four/>-<Two/> is led, the starting suit of the trick is <Four/>.
        <br/><br/>
        The exception to this is when a <b>trump</b> domino is led. In this case, the trump suit is the starting suit regardless of
        the other suit on the domino. For example, if a <One/>-<Six/> is led and <One/> is the trump suit, then the starting suit
        of the trick is <One/>.
        <br/><br/>
        If a player has one or more dominoes of the same suit as the starting suit, then they <em>must</em> play in suit. If they have nothing
        in suit, then they can play whatever domino they choose.
        <br/><br/>
        The winning domino of each trick is the highest domino in the <em>starting suit</em>. The exception to this is when a trump
        domino is played. In this case, the highest domino in the <em>trump suit</em> wins the trick.
      </Typography>
    </>
  )
}

export default SuitsPage
