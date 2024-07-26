import styled from 'styled-components'

const StyledRoot = styled.div(({ theme }) => ({
  '.main-header': {
    fontSize: theme.spacing(4),
    marginTop: theme.spacing(2)
  },
  '.paragraph': {
    fontSize: theme.spacing(2)
  },
  '.second-header': {
    fontSize: theme.spacing(3),
    marginTop: theme.spacing(1)
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

export default StyledRoot
