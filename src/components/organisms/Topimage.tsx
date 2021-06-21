import React from "react"
import Image from 'next/image'

const mainvisual = "/mainvisual.jpg"

const Topimage = () => {
    return (
        <div>
            <Image
                src={mainvisual}
                width={1200}
                height={680}
            />
        </div>
    )
}

export default Topimage
