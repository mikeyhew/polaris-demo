import React from 'react'
import {Page, Layout, Card, Button} from '@shopify/polaris'
import {EmbeddedApp} from '@shopify/polaris/embedded'
import {BrowserRouter, Route, Link, Redirect} from 'react-router-dom'

const {apiKey, shopOrigin, debug} = appConfig

const Home = () => (
  <Page title='Home'>
    <Layout>
      <Layout.Section>
        <Card title='My App' sectioned>
          Welcome to my app!
          <Link to='/orders'>View Orders</Link>
        </Card>
      </Layout.Section>
    </Layout>
  </Page>
)

const OrdersPage = () => (
  <Page title='Orders'>
    <Layout>
      <Card sectioned>
        Order 1
      </Card>
    </Layout>
  </Page>
)

const App = () => (
  <EmbeddedApp
    apiKey={apiKey}
    shopOrigin={shopOrigin}
    forceRedirect={true}
    debug={debug}
  >
    <BrowserRouter basename="/embedded">
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/orders" component={OrdersPage} />
        <Route path="/embedded">
          <Redirect to="/" />
        </Route>
      </div>
    </BrowserRouter>
  </EmbeddedApp>
)

export {App}
