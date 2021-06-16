import React from "react"
import Title from "../atoms/Title"

const Openinghours = () => {
    return (
        <div id="openinghours">
            <Title title="営業時間"/>
            <p className="text-4xl md:text-5xl text-center mb-28">平日<span className="text-4xl md:text-5xl">10:00~18:00</span></p>
        </div>
    )
}

export default Openinghours