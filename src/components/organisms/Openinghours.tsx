import React from "react"
import Title from "../atoms/Title"

const Openinghours = () => {
    return (
        <div id="openinghours">
            <Title title="営業時間"/>
            <p className="text-2xl sm:text-4xl md:text-5xl text-center">平日10:00~18:00</p>
        </div>
    )
}

export default Openinghours