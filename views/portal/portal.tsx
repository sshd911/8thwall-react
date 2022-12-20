import {AFrameScene, DISABLE_IMAGE_TARGETS} from './../../lib/aframe-components'
import {AFRAME, RouteLeavingGuard} from './../../lib/aframe-components'
import {BasicSelect} from './../../lib/material-ui-components'
import {cubeEnvMapComponent} from './components/cubemap-static'
import {cubeMapRealtimeComponent} from './components/cubemap-realtime'
import {responsiveImmersiveComponent} from './components/responsive-immersive'
import {proximityTriggerComponent} from './components/proximity-trigger'
import {
  portalCameraComponent, tapToPlacePortalComponent,
  promptFlowComponent, spinComponent,
} from './components/portal-components'
import './index.css'

declare let React: any
declare let ReactRouterDOM: any

const {withRouter} = ReactRouterDOM
const Portal = withRouter(() => {
const [isGuard, setIsGuard] = React.useState(true)

  return (
    <>
      <RouteLeavingGuard when={isGuard}/>
      <BasicSelect />
      <AFrameScene
      sceneHtml={require('./index.html')}
      imageTargets={DISABLE_IMAGE_TARGETS}
      components={[
        {name: 'portal-camera', val: portalCameraComponent},
        {name: 'spin', val: spinComponent},
        {name: 'prompt-flow', val: promptFlowComponent},
        {name: 'tap-to-place-portal', val: tapToPlacePortalComponent},
        {name: 'cubemap-static', val: cubeEnvMapComponent},
        {name: 'cubemap-realtime', val: cubeMapRealtimeComponent},
        {name: 'responsive-immersive', val: responsiveImmersiveComponent},
        {name: 'proximity-trigger', val: proximityTriggerComponent},
        {
          name: 'auto-play-video',
          val: {
            schema: {video: {type: 'string'}},
            init() {
              const v = document.querySelector(this.data.video)
              v.play()
            },
          },
        },
      ]}
    />
    </>
  )
})

export {Portal}