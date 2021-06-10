import React from "react"

interface Titleprops {
    title: string;
}

const Title = (props: Titleprops) => {
    return (
        <div>
            <h1 className="text-xl md:text-3xl text-center	font-medium my-5">~{props.title}~</h1>
        </div>
    )
}

export default Title