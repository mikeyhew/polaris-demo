import React from 'react'
import {Page, Card} from '@shopify/polaris'
import {EmbeddedApp} from '@shopify/polaris/embedded'
import {BrowserRouter, Route} from 'react-router-dom'

const {apiKey, shopOrigin, debug} = appConfig

const Home = () => (
  <Page title='Home'>
    <Card title='My App'>Welcome to my app! (version 3)</Card>
  </Page>
)

const App = () => (
  <EmbeddedApp
    apiKey={apiKey}
    shopOrigin={shopOrigin}
    forceRedirect={true}
    debug={debug}
  >
    <BrowserRouter>
      <Route path="/" component={Home} />
    </BrowserRouter>
  </EmbeddedApp>
)

export {App}
