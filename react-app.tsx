import {MaterialUIApp, TopModal} from './lib/material-ui-components'
import {appBase} from './lib/routes'
import {Home} from './views/home'
import {NotFound} from './views/notfound'
import {Portal} from './views/portal/portal'
import {Flyer} from './views/flyer/flyer'
import {Hologram} from './views/hologram/hologram'

declare let React: any
declare let ReactDOM: any
declare let ReactRouterDOM: any

const {BrowserRouter, Route, Switch} = ReactRouterDOM
const base = appBase()

class App extends React.Component {
  render() {
    return (
      <>
        <TopModal />
        <BrowserRouter>
          <Switch>
            <Route exact path={`${base}/`} component={Home} />
            <Route exact path={`${base}/hologram`} component={Hologram} />
            <Route exact path={`${base}/portal`} component={Portal} />
            <Route exact path={`${base}/flyer`} component={Flyer} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </>
    )
  }
}

const render = () => {
  document.body.insertAdjacentHTML('beforeend', '<div id="root"></div>')
  ReactDOM.render(
    <MaterialUIApp>
      <App />
    </MaterialUIApp>,
    document.getElementById('root')
  )
}

export {render}