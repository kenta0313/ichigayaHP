import { Card, CardContent, Typography } from "@material-ui/core"
import React from "react"
import Title from "../atoms/Title"
import Image from 'next/image'

const private_img = '/private.jpg';
const table_img ='/table.jpg';

const Seatfee = () => {
    return (
        <div id="seatfee">
            <Title title="席＆料金"/>
            <div className="md:flex px-16">
                <Card className="md:flex-1">
                    <CardContent className="text-center">
                        <Typography>
                            <div className="text-xl sm:text-2xl md:text-4xl font-semibold">個室タイプ</div>
                        </Typography>
                    </CardContent>
                    <div className="text-center">
                        <Image
                            src={private_img}
                            width={400}
                            height={300}
                            loading={"eager"}
                        />
                    </div>
                    <CardContent className="text-center">
                        <Typography>
                            <div className="text-xl sm:text-2xl md:text-4xl">30分/300円</div>
                            <div className="text-xl sm:text-2xl md:text-4xl mt-1">1日利用:2500円</div>
                        </Typography>
                    </CardContent>
                </Card>
                <Card className="mt-10 md:mt-0 md:flex-1 md:ml-10">
                    <CardContent className="text-center">
                        <Typography>
                            <div className="text-xl sm:text-2xl md:text-4xl font-semibold">テーブルタイプ</div>
                        </Typography>
                    </CardContent>
                    <div className="text-center">
                        <Image
                            src={table_img}
                            width={400}
                            height={300}
                            loading={"eager"}
                        />
                    </div>
                    <CardContent className="text-center">
                        <Typography>
                            <div className="text-xl sm:text-2xl md:text-4xl ">1名様利用<br />30分/300円</div>
                            <div className="text-xl sm:text-2xl md:text-4xl mt-1">2名様利用<br />30分/400円</div>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default Seatfee