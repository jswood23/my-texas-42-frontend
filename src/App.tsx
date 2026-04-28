import { BrowserRouter } from 'react-router-dom'
import { StyleSheetManager } from 'styled-components'
import RouterElements from './router'
import React from 'react'
import config from './constants/config'

function App () {
  React.useEffect(() => {
    document.title = config.environment === 'production'
      ? 'MyTexas42'
      : config.environment === 'staging'
        ? 'Staging | MyTexas42'
        : 'Dev | MyTexas42'
  }, [])

  return (
    <BrowserRouter>
      <StyleSheetManager shouldForwardProp={() => true}>
        <RouterElements />
      </StyleSheetManager>
    </BrowserRouter>
  )
}

export default App
