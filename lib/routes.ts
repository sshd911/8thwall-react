const path = ({pathname}, rel: string) => {
  const full = `${pathname}/${rel}`
  const pathComponents =
    full.split('/').filter(pathComponent => pathComponent && pathComponent !== '.')
  const pathComponentStack = []
  pathComponents.forEach((pathComponent) => {
    if (pathComponent === '..') {
      if (!pathComponentStack.length) {
        throw new Error(`Invalid path ${rel} relative to ${pathname}`)
      }
      pathComponentStack.pop()
      return
    }
    pathComponentStack.push(pathComponent)
  })
  return `/${pathComponentStack.join('/')}`
}

const appBase = () => {
  const project : any = document.querySelector('meta[name="8thwall:project"]') || {content: ''}
  const projectPath = `/${project.content}`
  return location.pathname.startsWith(projectPath) ? projectPath : ''
}

export {path, appBase}