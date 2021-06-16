import { Card, CardContent, CardHeader, CardMedia, Typography } from "@material-ui/core"
import React from "react"
import Title from "../atoms/Title"
import { makeStyles, Theme } from "@material-ui/core/styles"


const useStyles = makeStyles((theme: Theme) => ({
    title: {
        textAlign: "center",
    }
}))

const Seatfee = () => {
    const classes = useStyles()

    return (
        <div id="seatfee">
            <Title title="席＆料金"/>
            <div className="md:flex px-16">
                <Card className="md:flex-1">
                    <CardHeader
                        title="個室タイプ"
                        className={classes.title}
                        titleTypographyProps={{variant:'h2'}}
                        fontWeight={500}
                    />
                    <CardMedia
                        image="../public/sample.png"
                        title="privatetype"
                    />
                    <CardContent className="text-center">
                        <Typography>
                            <div className="text-3xl md:text-4xl">30分/300円</div>
                            <div className="text-3xl md:text-4xl mt-5">1日利用：2500円</div>
                        </Typography>
                    </CardContent>
                </Card>
                <Card className="mt-10 md:mt-0 md:flex-1 md:ml-10">
                    <CardHeader
                        title="テーブルタイプ"
                        className={classes.title}
                        titleTypographyProps={{variant:'h2'}}
                    />
                    <CardMedia
                        image="../public/sample.png"
                        title="privatetype"
                    />
                    <CardContent className="text-center">
                        <Typography>
                            <div className="text-3xl md:text-4xl">1名様利用<br />30分/300円</div>
                            <div className="text-3xl md:text-4xl mt-5">1名様利用<br />30分/300円</div>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default Seatfee