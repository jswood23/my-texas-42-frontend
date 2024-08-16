import { Button, Divider, Typography } from '@mui/material'
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
import DelvePage from './rules-pages/delve'
import NilDoublesLowPage from './rules-pages/nil-doubles-low'
import NilDoublesHighPage from './rules-pages/nil-doubles-high'
import NilDoublesOwnSuitPage from './rules-pages/nil-doubles-own-suit'
import OneMarkPage from './rules-pages/one-mark'
import PlungePage from './rules-pages/plunge'
import ScoringPage from './rules-pages/scoring'
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
  flexDirection: theme.isMobile ? 'column' : 'row',
  width: '100%',
  padding: theme.spacing(1),
  '.left-side': {
    flexBasis: '30%',
    width: '100%',
    padding: theme.spacing(1)
  },
  '.right-side': {
    flexBasis: '70%',
    width: '100%',
    padding: theme.spacing(2)
  },
  '.top-side': {
    width: '100%',
    padding: theme.spacing(2)
  },
  '.bottom-side': {
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
    fontSize: theme.spacing(2),
    width: '100%'
  },
  '.nav-buttons-container': {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%'
  },
  '.nav-button': {
    backgroundColor: theme.palette.primary.alt,
    color: theme.palette.secondary.main,
    fontSize: theme.isMobile ? theme.spacing(2) : theme.spacing(1.5),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    '&:hover': {
      color: theme.palette.secondary.alt,
      backgroundColor: theme.palette.primary.main
    }
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
  '.example-image-container': {
    padding: theme.spacing(2),
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  '.example-image': {
    width: theme.isMobile ? theme.spacing(50) : theme.spacing(65)
  },
  '.rules-image-description': {
    color: theme.palette.text.light,
    fontSize: theme.spacing(1.25)
  },
  '.suit-text': {
    fontWeight: 'bold',
    fontSize: theme.spacing(2.25),
    display: 'inline'
  }
}))

const RulesPage = ({ globals }: Props) => {
  const defaultRulesPage: RulesPageType = RULES_PAGES.about
  const [rulesPage, setRulesPage] = React.useState(defaultRulesPage)
  const isMobile = globals.isMobile
  const [nextPage, setNextPage] = React.useState<string | null>(RULES_PAGES.terminology)
  const [prevPage, setPrevPage] = React.useState<string | null>(null)
  const topRef = React.useRef<HTMLDivElement>(null)

  const changePage = React.useCallback((page: RulesPageType) => {
    setRulesPage(page)

    const pagesInOrder = Object.values(RULES_PAGES)
    const index = pagesInOrder.indexOf(page)

    if (index > 0) {
      setPrevPage(pagesInOrder[index - 1])
    } else {
      setPrevPage(null)
    }

    if (index < pagesInOrder.length - 1) {
      setNextPage(pagesInOrder[index + 1])
    } else {
      setNextPage(null)
    }

    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [rulesPage, setRulesPage, setNextPage, setPrevPage])

  const pageToDisplay = React.useMemo(() => {
    switch (rulesPage) {
      case RULES_PAGES.about:
        return <AboutPage />
      case RULES_PAGES.terminology:
        return <TerminologyPage />
      case RULES_PAGES.setup:
        return <SetupPage />
      case RULES_PAGES.suits:
        return <SuitsPage />
      case RULES_PAGES.trumps:
        return <TrumpsPage />
      case RULES_PAGES.scoring:
        return <ScoringPage />
      case RULES_PAGES.bidding:
        return <BiddingPage />
      case RULES_PAGES.exampleRound:
        return <ExampleRoundPage />
      case RULES_PAGES.variants:
        return <VariantsPage />
      case RULES_PAGES.forcedBid:
        return <ForcedBidPage />
      case RULES_PAGES.oneMark:
        return <OneMarkPage />
      case RULES_PAGES.twoMark:
        return <TwoMarkPage />
      case RULES_PAGES.nil:
        return <NilPage />
      case RULES_PAGES.nilDoublesHigh:
        return <NilDoublesHighPage />
      case RULES_PAGES.nilDoublesLow:
        return <NilDoublesLowPage />
      case RULES_PAGES.nilDoublesOwnSuit:
        return <NilDoublesOwnSuitPage />
      case RULES_PAGES.splash:
        return <SplashPage />
      case RULES_PAGES.plunge:
        return <PlungePage />
      case RULES_PAGES.sevens:
        return <SevensPage />
      case RULES_PAGES.delve:
        return <DelvePage />
      case RULES_PAGES.acknowledgements:
        return <AcknowledgementsPage />
      default:
        return <Typography>Page not found</Typography>
    }
  }, [rulesPage, setNextPage, setPrevPage])

  const pageContent = (
      <div className="right-side">
        {pageToDisplay}
        <br/><br/>
        <div className="nav-buttons-container">
          {prevPage && (
            <Button
              className="nav-button"
              onClick={() => {
                changePage(prevPage)
              }}
            >
              Back
            </Button>
          )}
          <div style={{ flexGrow: 1 }}></div>
          {nextPage && (
            <Button
              className="nav-button"
              onClick={() => {
                changePage(nextPage)
              }}
            >
              Next
            </Button>
          )}
        </div>
      </div>

  )

  const pageComponentsInOrder = React.useMemo(() => {
    if (isMobile) {
      return (
        <>
          {pageContent}
          <div className="bottom-side">
            <Divider/>
            <br/>
            <Typography className="second-header">Contents</Typography>
            <SideNavigationBar
              rulesPage={rulesPage}
              setRulesPage={changePage}
            />
          </div>
        </>
      )
    }

    return (
      <>
        <div className="left-side">
          <SideNavigationBar
            rulesPage={rulesPage}
            setRulesPage={changePage}
          />
        </div>
        {pageContent}
      </>
    )
  }, [rulesPage, changePage])

  return (
    <>
      <div ref={topRef}></div>
      <PageContainer globals={globals} title="Rules">
        <StyledRoot>
          {pageComponentsInOrder}
        </StyledRoot>
      </PageContainer>
    </>
  )
}

export default RulesPage
