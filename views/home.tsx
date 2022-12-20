import {NavCard, OneColumnGrid, Page, TopModal} from '../lib/material-ui-components'
import {path} from '../lib/routes'

declare let React: any
declare let ReactRouterDOM: any
declare let model4DS: any

const {withRouter} = ReactRouterDOM

const Home = withRouter(({location}) => (
  <Page title='virtual ”NanBei”' top={true}>
    <OneColumnGrid>
      <NavCard
        title='説明'
        to={path(location, 'hologram')}
        text={'ガイドさんが待ってます...'}
        img={require('../assets/cards/guide.jpg')}
        svg={(
          <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-volume-up' viewBox='0 0 16 16'>
            <path d='M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z'/>
            <path d='M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z'/>
            <path d='M10.025 8a4.486 4.486 0 0 1-1.318 3.182L8 10.475A3.489 3.489 0 0 0 9.025 8c0-.966-.392-1.841-1.025-2.475l.707-.707A4.486 4.486 0 0 1 10.025 8zM7 4a.5.5 0 0 0-.812-.39L3.825 5.5H1.5A.5.5 0 0 0 1 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 7 12V4zM4.312 6.39 6 5.04v5.92L4.312 9.61A.5.5 0 0 0 4 9.5H2v-3h2a.5.5 0 0 0 .312-.11z'/>
          </svg>
        )}
      />
      <NavCard
        title='観光'
        to={path(location, 'portal')}
        text={'ポータルの先には...'}
        img={require('../assets/cards/portal.jpg')}
        svg={(
          <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-door-open' viewBox='0 0 16 16'>
            <path d='M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z'/>
            <path d='M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117zM11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5zM4 1.934V15h6V1.077l-6 .857z'/>
          </svg>
        )}
      />
      <NavCard
        title='鑑賞'
        to={path(location, 'flyer')}
        text={'ARマーカーを読み取ると...'}
        img={require('../assets/cards/flyer.jpg')}
        svg={(
          <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-play-btn' viewBox='0 0 16 16'>
            <path d='M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z'/>
            <path d='M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z'/>
          </svg>
        )}
      />
    </OneColumnGrid>
  </Page>
))

export {Home}