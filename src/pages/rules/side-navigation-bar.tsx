import { type RulesPageType } from '../../types'
import styled from 'styled-components'
import { Link } from '@mui/material'
import { RULES_PAGES } from '../../constants'

interface Props {
  rulesPage: RulesPageType
  setRulesPage: (rulesPage: RulesPageType) => void
}

const StyledRoot = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  alignItems: 'start',
  '.rules-link': {
    fontSize: theme.spacing(2),
    color: theme.palette.text.link,
    cursor: 'pointer',
    marginTop: theme.spacing(1.5),
    textAlign: 'left',
    textDecoration: 'none',
    lineHeight: '1',
    '&:hover': {
      color: theme.palette.text.linkHover
    }
  },
  '.one-indent': {
    paddingLeft: theme.spacing(2),
    marginTop: theme.spacing(1)
  },
  '.two-indent': {
    paddingLeft: theme.spacing(4),
    marginTop: theme.spacing(1)
  },
  '.three-indent': {
    paddingLeft: theme.spacing(6),
    marginTop: theme.spacing(1)
  }
}))

const SideNavigationBar = ({ rulesPage, setRulesPage }: Props) => {
  return (
    <StyledRoot>
      <Link
        component="button"
        className="rules-link"
        onClick={() => { setRulesPage(RULES_PAGES.about) }}
      >
        About
      </Link>
      <Link
        component="button"
        className="rules-link"
        onClick={() => { setRulesPage(RULES_PAGES.terminology) }}
      >
        Terminology
      </Link>
      <Link
        component="button"
        className="rules-link"
        onClick={() => { setRulesPage(RULES_PAGES.setup) }}
      >
        Setup
      </Link>
      <Link
        component="button"
        className="rules-link"
        onClick={() => { setRulesPage(RULES_PAGES.suits) }}
      >
        Suits
      </Link>
      <Link
        component="button"
        className="rules-link"
        onClick={() => { setRulesPage(RULES_PAGES.trumps) }}
      >
        Trumps
      </Link>
      <Link
        component="button"
        className="rules-link"
        onClick={() => { setRulesPage(RULES_PAGES.scoring) }}
      >
        Scoring
      </Link>
      <Link
        component="button"
        className="rules-link"
        onClick={() => { setRulesPage(RULES_PAGES.bidding) }}
      >
        Bidding
      </Link>
      <Link
        component="button"
        className="rules-link"
        onClick={() => { setRulesPage(RULES_PAGES.normalRules) }}
      >
        Normal Rules
      </Link>
      <Link
        component="button"
        className="rules-link one-indent"
        onClick={() => { setRulesPage(RULES_PAGES.exampleRound) }}
      >
        Example Round
      </Link>
      <Link
        component="button"
        className="rules-link"
        onClick={() => { setRulesPage(RULES_PAGES.variants) }}
      >
        Variants
      </Link>
      <Link
        component="button"
        className="rules-link one-indent"
        onClick={() => { setRulesPage(RULES_PAGES.forcedBid) }}
      >
        Forced Bids
      </Link>
      <Link
        component="button"
        className="rules-link two-indent"
        onClick={() => { setRulesPage(RULES_PAGES.oneMark) }}
      >
        One Mark Forced Bids
      </Link>
      <Link
        component="button"
        className="rules-link one-indent"
        onClick={() => { setRulesPage(RULES_PAGES.twoMark) }}
      >
        Two Mark Bids
      </Link>
      <Link
        component="button"
        className="rules-link two-indent"
        onClick={() => { setRulesPage(RULES_PAGES.nil) }}
      >
        Nil
      </Link>
      <Link
        component="button"
        className="rules-link three-indent"
        onClick={() => { setRulesPage(RULES_PAGES.nilDoublesHigh) }}
      >
        Doubles High
      </Link>
      <Link
        component="button"
        className="rules-link three-indent"
        onClick={() => { setRulesPage(RULES_PAGES.nilDoublesLow) }}
      >
        Doubles Low
      </Link>
      <Link
        component="button"
        className="rules-link three-indent"
        onClick={() => { setRulesPage(RULES_PAGES.nilDoublesOwnSuit) }}
      >
        Doubles As A Suit Of Their Own
      </Link>
      <Link
        component="button"
        className="rules-link two-indent"
        onClick={() => { setRulesPage(RULES_PAGES.splash) }}
      >
        Splash
      </Link>
      <Link
        component="button"
        className="rules-link two-indent"
        onClick={() => { setRulesPage(RULES_PAGES.plunge) }}
      >
        Plunge
      </Link>
      <Link
        component="button"
        className="rules-link two-indent"
        onClick={() => { setRulesPage(RULES_PAGES.sevens) }}
      >
        Sevens
      </Link>
      <Link
        component="button"
        className="rules-link one-indent"
        onClick={() => { setRulesPage(RULES_PAGES.delve) }}
      >
        Delve
      </Link>
      <Link
        component="button"
        className="rules-link"
        onClick={() => { setRulesPage(RULES_PAGES.acknowledgements) }}
      >
        Acknowledgements
      </Link>
    </StyledRoot>
  )
}

export default SideNavigationBar
