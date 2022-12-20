import {AFrameScene, RouteLeavingGuard} from './../../lib/aframe-components'
import {hologram4dsComponent, hologram4dsPrimitive} from './hologram-4ds'
import {FloatingBackButton} from '../../lib/material-ui-components'
import './index.css'

declare let React: any
declare let ReactRouterDOM: any

const {withRouter} = ReactRouterDOM

const Hologram = withRouter(() => {
  const [isGuardPortal, setIsGuardPortal] = React.useState(true)
  return (
    <>
      <RouteLeavingGuard when={isGuardPortal}/>
      <FloatingBackButton />
      <AFrameScene
      sceneHtml={require('./index.html')}
      components={[
        {name: 'holo4ds', val: hologram4dsComponent()},
      ]}
      primitives={[
        {name: 'hologram-4ds', val: hologram4dsPrimitive()},
      ]}
    />
    </>
  )
})

export {Hologram}