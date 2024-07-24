import { Tooltip, Typography } from '@mui/material'
import type { UserStatsAPIModel } from '../../../types/api-models'
import styled from 'styled-components'

const StyledRoot = styled.div(({ theme }) => ({
  border: '1px solid #A0A0A0',
  borderRadius: '5px',
  boxShadow: '0 2px 5px 3px #E0E0E0',
  marginBottom: theme.spacing(2),
  marginTop: theme.spacing(1),
  padding: theme.spacing(1),
  width: theme.isMobile ? '100%' : '75%',
  '.stats-entries': {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingBottom: theme.spacing(1)
  },
  '.stats-title': {
    borderBottom: '1px solid #A0A0A0',
    fontSize: theme.spacing(2.5),
    fontStyle: 'italic',
    fontWeight: 'bold',
    textAlign: 'center',
    width: '100%'
  }
}))

const StatsEntry = styled(Typography)(({ theme }) => ({
  color: theme.palette.light.main,
  flexBasis: theme.isMobile ? '50%' : '25%',
  fontSize: theme.spacing(1),
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1),
  paddingTop: theme.spacing(2),
  textAlign: 'center'
}))

interface Props {
  userStats: UserStatsAPIModel
}

const ProfileStats = ({ userStats }: Props) => {
  const getRatio = (numerator: number, denominator: number, perc = false) => {
    if (denominator === 0) return '0.0'
    let ratio = numerator / denominator
    if (perc) ratio *= 100
    return ratio.toFixed(1).toString()
  }

  const getPercentage = (numerator: number, denominator: number) => {
    const perc = getRatio(numerator, denominator, true)
    if (perc === '0.0') return '0.0%'
    return `${perc}%`
  }

  const gameWinRate = getPercentage(userStats.gameswon, userStats.gamesplayed)
  const roundWinRate = getPercentage(userStats.roundswon, userStats.roundsplayed)
  const bidderPPR = getRatio(userStats.totalpointsasbidder, userStats.totalroundsasbidder)
  const supportPPR = getRatio(userStats.totalpointsassupport, userStats.totalroundsassupport)
  const counterPPR = getRatio(userStats.totalpointsascounter, userStats.totalroundsascounter)

  return (
    <StyledRoot>
      <Typography className="stats-title">Game Stats</Typography>
      <div className="stats-entries">
        <Tooltip
          title={`${userStats.gameswon} games won, ${userStats.gamesplayed} games played`}
        >
          <StatsEntry>Game win rate: {gameWinRate}</StatsEntry>
        </Tooltip>
        <Tooltip
          title={`${userStats.roundswon} rounds won, ${userStats.roundsplayed} rounds played`}
        >
          <StatsEntry>Round win rate: {roundWinRate}</StatsEntry>
        </Tooltip>
        <Tooltip title="Average points per round as bidding player.">
          <StatsEntry>Bidder PPR: {bidderPPR}</StatsEntry>
        </Tooltip>
        <Tooltip title="Average points per round as support player.">
          <StatsEntry>Support PPR: {supportPPR}</StatsEntry>
        </Tooltip>
        <Tooltip title="Average points per round as counter player (playing against bidder).">
          <StatsEntry>Counter PPR: {counterPPR}</StatsEntry>
        </Tooltip>
      </div>
    </StyledRoot>
  )
}

export default ProfileStats
