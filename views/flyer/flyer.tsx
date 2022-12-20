import {AFrameScene, DISABLE_IMAGE_TARGETS} from '../../lib/aframe-components'
import {FloatingBackButton} from '../../lib/material-ui-components'
import './index.css'

declare let React: any
declare let ReactRouterDOM: any

const {withRouter} = ReactRouterDOM

const Flyer = withRouter(() => (
  <>
    <FloatingBackButton />
    <AFrameScene sceneHtml={require('./index.html')} />
  </>
))

export {Flyer}