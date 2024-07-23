import { BrowserRouter } from 'react-router-dom'
import { StyleSheetManager } from 'styled-components'
import RouterElements from './router'

function App () {
  return (
    <BrowserRouter>
      <StyleSheetManager shouldForwardProp={() => true}>
        <RouterElements />
      </StyleSheetManager>
    </BrowserRouter>
  )
}

export default App
