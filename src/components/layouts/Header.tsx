import React, { useState } from "react"
import { useRouter } from "next/router"
import { makeStyles, useTheme, Theme } from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import {
  Grid,
  AppBar,
  Toolbar,
  Typography,
  List,
  ListItem,
  ListItemText,
  SwipeableDrawer,
  IconButton,
} from "@material-ui/core"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"
import MenuIcon from "@material-ui/icons/Menu"
import { routes } from "../../data/routes"
import { Link, animateScroll as scroll } from "react-scroll";
import Image from 'next/image'


interface ElevationScrollProps {
  children: React.ReactElement
}

function ElevationScroll(props: ElevationScrollProps) {
  const { children } = props

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  })
}

const useStyles = makeStyles((theme: Theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    [theme.breakpoints.down("md")]: {
    },
    [theme.breakpoints.down("xs")]: {
    }
  },
  drawerIconContainer: {
    marginLeft: "auto",
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  drawerIcon: {
    height: "50px",
    width: "50px",
    color: "inherit",
    [theme.breakpoints.down("xs")]: {
      height: "40px",
      width: "40px"
    }
  },
  drawer: {
    backgroundColor: theme.palette.secondary.main,
    padding: "0 6em"
  },
  link: {
    "&:hover": {
        opacity: 0.7,
    }
  }
}))

const Header = () => {
  const classes = useStyles()
  const theme = useTheme()
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)
  const matches = useMediaQuery(theme.breakpoints.down("sm"))

  const [openDrawer, setOpenDrawer] = useState(false)

  const router = useRouter()
  const path = routes

  const tabs = (
    <>
      <Grid container justify="flex-end" spacing={4}>
        {path.map(({ name, link }) => (
          <Grid item key={link}>
            <Link
              className="cursor-pointer hover:text-green-700"
              activeClass="active"
              to={link}
              spy={true}
              smooth={true}
              offset={-70}
              duration= {800}
            >
              <Typography
                style={{
                  color: "inherit",
                  fontWeight: "bold",
                  borderBottom: router.pathname.match(link) && "1px solid #757ce8",
                  marginRight: 30,
                }}
                className={classes.link}
              >
                {name}
              </Typography>
            </Link>
          </Grid>
        ))}
      </Grid>
    </>
  )

  const drawer = (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
        anchor="right"
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          {path.map(({ name, link }) => (
            <ListItem
              key={link}
              divider
              button
              onClick={() => {
                setOpenDrawer(false)
              }}
            >
              <ListItemText disableTypography>
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration= {800}
                onClick={() => {
                  setOpenDrawer(false)
                }}
              >
                  <Typography
                    className="cursor-pointer hover:text-green-700"
                    style={{
                      color:
                        router.pathname === link
                          ? "primary"
                          : "rgb(107 107 107)",
                      fontWeight: "bold"
                    }}
                  >
                    {name}
                  </Typography>
                </Link>
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
        className={classes.drawerIconContainer}
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </>
  )

  return (
    <>
      <ElevationScroll>
        <AppBar color="inherit">
          <Toolbar
            disableGutters
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              width: "100%",
              padding: "0 16px"
            }}
            >
            <Image
              src="/logo.png"
              height={80}
              width={80}
            />
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  )
}

export default Header
