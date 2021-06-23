import React from "react"

interface Titleprops {
    title: string;
}

const Title = (props: Titleprops) => {
    return (
        <div>
            <h1 className="text-lg sm:text-2xl  md:text-4xl text-center font-bold my-3 md:my-8"><span className="text-green-700">～</span>{props.title}<span className="text-green-700">～</span></h1>
        </div>
    )
}

export default Title