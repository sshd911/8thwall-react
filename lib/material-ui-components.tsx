import {path} from '../lib/routes'

declare let XR8: any
declare let MaterialUI: any
declare let React: any
declare let ReactRouterDOM: any
declare let componentHandler: any
declare let THREE: any
declare let location: any

const {
  AppBar,
  Button,
  Box,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  CardActionArea,
  CardActions,
  CardMedia,
  CardContent,
  Chip,
  Container,
  CssBaseline,
  Fab,
  Grid,
  IconButton,
  SvgIcon,
  Stack,
  ThemeProvider,
  Toolbar,
  Typography,
  colors,
  createMuiTheme,
  makeStyles,
  Modal,
  useScrollTrigger,
  Fade,
  Backdrop,
  FormControl,
  MenuItem,
  InputLabel,
  Select,
  ListSubheader,
} = MaterialUI

// Modal
const modalStyles = makeStyles({
  bg: {
    position: 'absolute' as 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'inherit',
    transition: 'all 0.5s ease-in-out',
    backgroundColor: 'rgba(0,0,30,0.4)',
    backdropFilter: 'blur(4px)',
    outline: 'none',
    zIndex: 1,
  },
  content: {
    position: 'absolute',
    top: '45%',
    left: '10%',
    width: '80%',
    height: '25%',
    backgroundColor: '#ffffff',
    color: '#202124',
    zIndex: 10,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'spaceAround',
  },
  text: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'spaceAround',
    paddingTop: 10,
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignContent: 'center',
    alignItems: 'flexStart',
    justifyContent: 'center',
    paddingBottom: 10,
  },
  yes: {
    '&:hover': {
      background: 'rgb(0,0,0, 0.1)',
      transition: 'all 0.5s ease-in-out',
      borderWidth: 1,
    },
  },
})

const TopModal = () => {
  const [open, setOpen] = React.useState(true)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const classes = modalStyles()
  return (
    <>
      <Modal
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box className={classes.bg}>
            <Box className={classes.content}>
              <Box className={classes.text}>
                <Typography id='modal-modal-title' variant='h6' component='h2' align='center'>
                  Vamos fazer uma viagem !
                </Typography>
                <Typography id='modal-modal-description' sx={{mt: 2}} align='center'>
                  旅に出ましょう！
                </Typography>
              </Box>
              <Box className={classes.button}>
                <Button variant='outlined' disabled>
                  いいえ
                </Button>
                <Button variant='outlined' onClick={() => handleClose()} className={classes.yes}>
                  はい
                </Button>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </>
  )
}

// select box
const {withRouter, Link} = ReactRouterDOM

const BasicSelect = withRouter((props) => {
  const {title, text, to, img, history} = props
  const [various, setVarious] = React.useState('airport')
  const changeImage = (e) => {
    switch (e) {
      case 'station':
        setTimeout(() => {document.querySelector('a-sky').setAttribute('src', '#station-img')}, 0)
        break
      case 'beach':
        setTimeout(() => {document.querySelector('a-sky').setAttribute('src', '#beach-img')}, 0)
        break
      case 'waterfall':
        setTimeout(() => {document.querySelector('a-sky').setAttribute('src', '#waterfall-img')}, 0)
        break
      case 'machupichu':
        setTimeout(() => {document.querySelector('a-sky').setAttribute('src', '#machupichu-img')}, 0)
        break
      case 'art':
        setTimeout(() => {document.querySelector('a-sky').setAttribute('src', '#art-img')}, 0)
        break
      case 'lencois':
        setTimeout(() => {document.querySelector('a-sky').setAttribute('src', '#lencois-img')}, 0)
        break
      case 'airport':
        setTimeout(() => {document.querySelector('a-sky').setAttribute('src', '#airport-img')}, 0)
        break
      case 'waka':
        setTimeout(() => {document.querySelector('a-sky').setAttribute('src', '#waka-img')}, 0)
        break
      case 'armas':
        setTimeout(() => {document.querySelector('a-sky').setAttribute('src', '#armas-img')}, 0)
        break
      case 'kirisuto':
        setTimeout(() => {document.querySelector('a-sky').setAttribute('src', '#kirisuto-img')}, 0)
        break
      case 'sun':
        setTimeout(() => {document.querySelector('a-sky').setAttribute('src', '#sun-img')}, 0)
        break
      case 'temple':
        setTimeout(() => {document.querySelector('a-sky').setAttribute('src', '#temple-img')}, 0)
        break
      case 'mayoru':
        setTimeout(() => {document.querySelector('a-sky').setAttribute('src', '#mayoru-img')}, 0)
        break
      case 'moon':
        setTimeout(() => {document.querySelector('a-sky').setAttribute('src', '#moon-img')}, 0)
        break
      default:
        history.push(path(location, '..'))
        break
    }
  }

  const handleChange = (event) => {
    setVarious(event.target.value as string)
    changeImage(event.target.value)
  }

  const styles = makeStyles(theme => ({
    select: {
      position: 'absolute',
      top: theme.spacing(1),
      left: theme.spacing(1),
      zIndex: 1000,
    },
  }))

  const classes = styles()

  return (
    <Box className={classes.select}>
      <FormControl fullWidth>
        <InputLabel id='various-label'>Location</InputLabel>
        <Select
          labelId='various-label'
          id='various'
          value={various}
          label='various'
          onChange={handleChange}
        >
          <ListSubheader>Brazil</ListSubheader>
          <MenuItem value={'airport'}>サンパウロ・グアルーリョス国際空港</MenuItem>
          <MenuItem value={'station'}>リベルダーデ・ジャパオ駅</MenuItem>
          <MenuItem value={'lencois'}>レンソイス・マラニャンセス国立公園</MenuItem>
          <MenuItem value={'kirisuto'}>コルコバードのキリスト像</MenuItem>
          <MenuItem value={'beach'}>コパカバーナビーチ</MenuItem>
          <MenuItem value={'waterfall'}>イグアスの滝</MenuItem>
          <MenuItem value={'art'}>イニョチン</MenuItem>
          <ListSubheader>Peru</ListSubheader>
          <MenuItem value={'machupichu'}>マチュピチュ遺跡</MenuItem>
          <MenuItem value={'moon'}>月の神殿</MenuItem>
          <MenuItem value={'waka'}>ワカ・プクヤーナ遺跡</MenuItem>
          <MenuItem value={'armas'}>アルマス広場</MenuItem>
          <MenuItem value={'sun'}>太陽の島</MenuItem>
          <MenuItem value={'temple'}>アウカイパタ広場</MenuItem>
          <MenuItem value={'mayoru'}>マヨール広場</MenuItem>
          <ListSubheader>Flight</ListSubheader>
          <MenuItem value={''}>帰国便</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
})

// Card
const cardStyles = makeStyles({
  'card': {
    'height': '100%',
    'maxWidth': '100%',
    'borderRadius': 16,
    'boxShadow': 3,
    '&:hover': {
      opacity: '95%',
    },
  },
  'subtitle': {
    display: 'inline-block',
    fontSize: 16,
    marginLeft: 8,
    marginRight: 6,
    padding: 0,
  },
  'description': {
    display: 'inline',
    fontSize: 10,
  },
  'media': {
    'height': 189,
    'boxShadow': 3,
    '&:hover': {
      opacity: '95%',
    },
  },
  'svg': {
    display: 'inline',
  },
})

const NavCard = withRouter((props) => {
  const {title, text, to, img, history, svg} = props
  const classes = cardStyles()

  return (
    <Card className={classes.card}>
      <CardActionArea onClick={() => {
        XR8.removeCameraPipelineModule('cubemap-process')  // use camera process
        XR8.removeCameraPipelineModule('responsiveImmersive')  // uses motion tracking
        history.push(to)
      }}>
        <CardMedia
          className={classes.media}
          image={img}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom>
            <div>
              <div className={classes.svg}>{svg}</div>
              <div className={classes.subtitle}>{title}</div>
              <div className={classes.description}>{text}</div>
            </div>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
})

const ArrowBackIcon = props => (
  <SvgIcon {...props}>
    <path d='M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z' />
  </SvgIcon>
)

const fabStyles = makeStyles(theme => ({
  fab: {
    position: 'absolute',
    top: theme.spacing(2),
    left: theme.spacing(2),
    zIndex: 1000,
    backgroundColor: '#11ffee00',
  },
}))

const FloatingBackButton = withRouter(({history}) => {
  const classes = fabStyles()
  return (
    <Fab
      className={classes.fab}
      onClick={() => {
        XR8.removeCameraPipelineModule('cubemap-process')
        XR8.removeCameraPipelineModule('responsiveImmersive')
        history.push(path(location, '..'))
      }}
    >
      <ArrowBackIcon fontSize='inherit'/>
    </Fab>
  )
})

const gridStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}))

const OneColumnGrid = (props) => {
  const classes = gridStyles()
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {props.children.map((c, i) => (
          <Grid item xs={12} key={i}>
            {c}
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

const ElevationScroll = (props) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  return React.cloneElement(props.children, {
    elevation: trigger ? 4 : 0,
  })
}

const pageStyles = makeStyles(theme => ({
  'menuButton': {
    'marginRight': theme.spacing(2),
  },
  'title': {
    'flexGrow': 1,
  },
}))

const Page = withRouter((props) => {
  const classes = pageStyles()
  const {history} = props

  return (
    <>
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar>
            {!props.top ? (
              <>
                <IconButton
                  edge='start'
                  className={classes.menuButton}
                  color='inherit'
                  aria-label='back'
                  onClick={() => history.push(path(location, '..'))}
                >
                  <ArrowBackIcon />
                </IconButton>
                <Typography variant='h6' className={classes.title} onClick={() => history.push(path(location, '..'))}>
                  {props.title}
                </Typography>
              </>
            ) : (
              <Typography variant='h6' className={classes.title}>
                {props.title}
              </Typography>
            )}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <Container>
        {props.children}
      </Container>
    </>
  )
})

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#202124',
    },
    secondary: {
      main: '#202124',
    },
    error: {
      main: colors.red.A400,
    },
    background: {
      default: '#202124',
    },
  },
  typography: {
    fontFamily: [
      'Nunito',
      'Roboto',
      'Arial',
      'sans-serif',
    ].join(','),
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
})

const MaterialUIApp = props => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {props.children}
  </ThemeProvider>
)

export {FloatingBackButton, NavCard, MaterialUIApp, OneColumnGrid, Page, TopModal, BasicSelect}