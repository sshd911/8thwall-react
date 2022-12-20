declare let AFRAME: any
declare let React: any
declare let XR8: any
declare let location: any
declare let ReactRouterDOM: any

const registeredComponents = new Set()
const registerComponents = components => components.forEach(({name, val}) => {
  if (registeredComponents.has(name)) {
    return
  }
  registeredComponents.add(name)
  AFRAME.registerComponent(name, val)
})

const registeredPrimitives = new Set()
const registerPrimitives = primitives => primitives.forEach(({name, val}) => {
  if (registeredPrimitives.has(name)) {
    return
  }
  registeredPrimitives.add(name)
  AFRAME.registerPrimitive(name, val)
})

interface INamedObject {
  name: string
  val: object
}

interface IAFrameSceneProps {
  sceneHtml: string
  imageTargets?: string[]
  components?: INamedObject
  primitives?: INamedObject[]
}

function AFrameScene({sceneHtml, imageTargets, components, primitives}: IAFrameSceneProps) {
  React.useEffect(() => {
    if (imageTargets) {
      XR8.XrController.configure({imageTargets})
    }
    if (components) {
      registerComponents(components)
    }
    if (primitives) {
      registerPrimitives(primitives)
    }
    const html = document.getElementsByTagName('html')[0]
    const origHtmlClass = html.className
    document.body.insertAdjacentHTML('beforeend', sceneHtml)

    return () => {
      const ascene = document.getElementsByTagName('a-scene')[0]
      ascene.parentNode.removeChild(ascene)
      html.className = origHtmlClass
    }
  }, [])

  return (
    <React.Fragment></React.Fragment>
  )
}

const DISABLE_IMAGE_TARGETS = []

interface Props {
  when: boolean;
  shouldBlockNavigation?: (location: Location) => boolean;
}

const RouteLeavingGuard = ({
  when,
  shouldBlockNavigation = () => true,
}: Props) => {
  const history = ReactRouterDOM.useHistory()
  const [lastLocation, setLastLocation] = React.useState(null)
  const [confirmedNavigation, setConfirmedNavigation] = React.useState(false)

  const handleBlockedNavigation = () => {
    if (document.getElementById('pauseBtn')) {
      document.getElementById('pauseBtn').click()
    }
    if (document.getElementById('promptText')) {
      document.getElementById('promptText').remove()
    }
    return true
  }

  const handleConfirmNavigationClick = () => {
    setConfirmedNavigation(true)
  }

  React.useEffect(() => {
    if (confirmedNavigation && lastLocation) {
      history.push(lastLocation.pathname)
    }
  }, [confirmedNavigation, lastLocation])

  return <ReactRouterDOM.Prompt when={when} message={handleBlockedNavigation} />
}

export {AFrameScene, DISABLE_IMAGE_TARGETS, AFRAME, registerComponents, registerPrimitives, XR8, RouteLeavingGuard}