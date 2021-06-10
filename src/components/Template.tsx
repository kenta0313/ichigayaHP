import React from "react"
import About from "./organisms/About"
import Access from "./organisms/Access"
import Openinghours from "./organisms/Openinghours"
import Seatfee from "./organisms/Seatfee"

const Template = () => {

    return (
        <div>
            <About />
            <Seatfee />
            <Openinghours />
            <Access />
        </div>
    )
}

export default Template