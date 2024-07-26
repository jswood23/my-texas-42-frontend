import { Typography } from '@mui/material'
import PageContainer from '../../shared/page-container'
import type { GlobalObj, RulesPageType } from '../../types'
import styled from 'styled-components'
import * as React from 'react'
import { RULES_PAGES } from '../../constants'
import AboutPage from './rules-pages/about'
import AcknowledgementsPage from './rules-pages/acknowledgements'
import TerminologyPage from './rules-pages/terminology'
import SplashPage from './rules-pages/splash'
import SetupPage from './rules-pages/setup'
import BiddingPage from './rules-pages/bidding'
import CountPage from './rules-pages/count'
import DelvePage from './rules-pages/delve'
import NilDoublesLowPage from './rules-pages/nil-doubles-low'
import NilDoublesHighPage from './rules-pages/nil-doubles-high'
import NilDoublesOwnSuitPage from './rules-pages/nil-doubles-own-suit'
import NormalRulesPage from './rules-pages/normal-rules'
import OneMarkPage from './rules-pages/one-mark'
import PlungePage from './rules-pages/plunge'
import SevensPage from './rules-pages/sevens'
import SuitsPage from './rules-pages/suits'
import TrumpsPage from './rules-pages/trumps'
import VariantsPage from './rules-pages/variants'
import TwoMarkPage from './rules-pages/two-mark'
import ForcedBidPage from './rules-pages/forced-bid'
import ExampleRoundPage from './rules-pages/example-round'
import NilPage from './rules-pages/nil'
import SideNavigationBar from './side-navigation-bar'

interface Props {
  globals: GlobalObj
}

const StyledRoot = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  '.left-side': {
    flexBasis: '30%',
    width: '100%',
    padding: theme.spacing(2)
  },
  '.right-side': {
    flexBasis: '70%',
    width: '100%',
    padding: theme.spacing(2)
  },
  '.main-header': {
    color: theme.palette.text.main,
    fontSize: theme.spacing(4),
    marginBottom: theme.spacing(2)
  },
  '.paragraph': {
    color: theme.palette.text.main,
    fontSize: theme.spacing(2)
  },
  '.second-header': {
    color: theme.palette.text.main,
    fontSize: theme.spacing(3),
    marginTop: theme.spacing(1)
  },
  '.rules-image': {
    width: theme.spacing(30)
  },
  '.rules-image-container': {
    padding: theme.spacing(4),
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  '.rules-image-description': {
    color: theme.palette.text.light,
    fontSize: theme.spacing(1.25)
  },
  '.one-para': {
    fontSize: theme.spacing(2),
    color: theme.palette.domino.color1,
    display: 'inline-block'
  },
  '.two-para': {
    fontSize: theme.spacing(2),
    color: theme.palette.domino.color2,
    display: 'inline-block'
  },
  '.three-para': {
    fontSize: theme.spacing(2),
    color: theme.palette.domino.color3,
    display: 'inline-block'
  },
  '.four-para': {
    fontSize: theme.spacing(2),
    color: theme.palette.domino.color4,
    display: 'inline-block'
  },
  '.five-para': {
    fontSize: theme.spacing(2),
    color: theme.palette.domino.color5,
    display: 'inline-block'
  },
  '.six-para': {
    fontSize: theme.spacing(2),
    color: theme.palette.domino.color6,
    display: 'inline-block'
  }
}))

const RulesPage = ({ globals }: Props) => {
  const defaultRulesPage: RulesPageType = RULES_PAGES.about
  const [rulesPage, setRulesPage] = React.useState(defaultRulesPage)

  const pageToDisplay = React.useMemo(() => {
    switch (rulesPage) {
      case RULES_PAGES.about:
        return <AboutPage />
      case RULES_PAGES.acknowledgements:
        return <AcknowledgementsPage />
      case RULES_PAGES.bidding:
        return <BiddingPage />
      case RULES_PAGES.count:
        return <CountPage />
      case RULES_PAGES.delve:
        return <DelvePage />
      case RULES_PAGES.exampleRound:
        return <ExampleRoundPage />
      case RULES_PAGES.forcedBid:
        return <ForcedBidPage />
      case RULES_PAGES.nil:
        return <NilPage />
      case RULES_PAGES.nilDoublesHigh:
        return <NilDoublesHighPage />
      case RULES_PAGES.nilDoublesLow:
        return <NilDoublesLowPage />
      case RULES_PAGES.nilDoublesOwnSuit:
        return <NilDoublesOwnSuitPage />
      case RULES_PAGES.normalRules:
        return <NormalRulesPage />
      case RULES_PAGES.oneMark:
        return <OneMarkPage />
      case RULES_PAGES.plunge:
        return <PlungePage />
      case RULES_PAGES.sevens:
        return <SevensPage />
      case RULES_PAGES.setup:
        return <SetupPage />
      case RULES_PAGES.splash:
        return <SplashPage />
      case RULES_PAGES.suits:
        return <SuitsPage />
      case RULES_PAGES.terminology:
        return <TerminologyPage />
      case RULES_PAGES.trumps:
        return <TrumpsPage />
      case RULES_PAGES.variants:
        return <VariantsPage />
      case RULES_PAGES.twoMark:
        return <TwoMarkPage />
      default:
        return <Typography>Page not found</Typography>
    }
  }, [rulesPage])

  return (
    <PageContainer globals={globals} title="Rules">
      <StyledRoot>
        <div className='left-side'>
          <SideNavigationBar
            rulesPage={rulesPage}
            setRulesPage={setRulesPage}
          />
        </div>
        <div className='right-side'>
          {pageToDisplay}
        </div>
      </StyledRoot>
    </PageContainer>
  )
}

export default RulesPage
