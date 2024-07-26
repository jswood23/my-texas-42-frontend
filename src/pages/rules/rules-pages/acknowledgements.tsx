import StyledRoot from '.'
import { Typography } from '@mui/material'

const AcknowledgementsPage = () => {
  return (
    <StyledRoot>
      <Typography className="main-header">Acknowledgements</Typography>
      <Typography className="paragraph">
        Contributors:
      </Typography>
      <ul>
        <li><Typography className="paragraph">Aidan Hill &apos;23 - Writer</Typography></li>
        <li><Typography className="paragraph">Owen Dunston &apos;23 - Writer</Typography></li>
        <li><Typography className="paragraph">Joshua Wood &apos;23 - Writer, Styling/Illustrations</Typography></li>
      </ul>
    </StyledRoot>
  )
}

export default AcknowledgementsPage
