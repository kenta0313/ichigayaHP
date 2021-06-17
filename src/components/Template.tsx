import React from "react"
import About from "./organisms/About"
import Access from "./organisms/Access"
import Facility from "./organisms/Facility"
import Openinghours from "./organisms/Openinghours"
import Seatfee from "./organisms/Seatfee"
import Topimage from "./organisms/Topimage"

const Template = () => {

    return (
        <div className="container max-w-screen-lg mx-auto">
            <Topimage />
            <About/>
            <Facility />
            <Seatfee />
            <Openinghours />
            <Access />
        </div>
    )
}

export default Template