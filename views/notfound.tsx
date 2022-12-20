import {Page} from '../lib/material-ui-components'

declare let React: any
declare let ReactRouterDOM: any

const {withRouter} = ReactRouterDOM

const NotFound = withRouter(() => (
  <Page title='Not Found' top={true}>
    <h1><a target='_blank' href='8th.io/r76j2'>Back to the Project</a></h1>
  </Page>
))

export {NotFound}