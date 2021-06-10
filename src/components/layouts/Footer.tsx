import { useRouter } from "next/router"
import { makeStyles, Theme } from "@material-ui/core/styles"
import { Container, Grid, Typography } from "@material-ui/core"

const useStyles = makeStyles((theme: Theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    width: `100%`,
    position: "relative",
    overflow: "hidden",
    marginTop: "6em",
    padding: "2em 0 ",
    textAlign: "center"

  },
  copylight: {
    marginTop: "15px",
    color: "#fff",
    fontSize: "1em"
  }
}))

const Footer = () => {
  const classes = useStyles()

  return (
    <div className={classes.footer}>
      <Container maxWidth="lg">

        <Grid
          item
          container
          justify="center"
        >
          <Typography className={classes.copylight}>
            &copy;{new Date().getFullYear()} 市ヶ谷コワーキングカフェ
          </Typography>
        </Grid>
      </Container>
    </div>
  )
}

export default Footer