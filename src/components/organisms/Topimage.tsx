import React from "react"
import Image from 'next/image'

const topvisual = '/mainvisual.jpg'

const Topimage = () => {
    return (
        <div>
            <Image
            src={topvisual}
            width={1200}
            height={800}
            />
        </div>
    )
}

export default Topimage