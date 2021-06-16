import React from "react"
import About from "./organisms/About"
import Access from "./organisms/Access"
import Openinghours from "./organisms/Openinghours"
import Seatfee from "./organisms/Seatfee"
import Topimage from "./organisms/Topimage"

const Template = () => {

    return (
        <div className="container max-w-screen-lg mx-auto">
            <Topimage />
            <About/>
            <Seatfee />
            <Openinghours />
            <Access />
        </div>
    )
}

export default Template