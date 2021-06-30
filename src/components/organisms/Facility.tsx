import React from "react"
import Title from "../atoms/Title"

const icon_images = [
    {
        name: 'Wi-Fi完備',
        image: '/wifi.png'
    },
    {
        name: '電源完備',
        image: '/power.png'
    },
    {
        name: 'ドリンク飲み放題',
        image: '/drink.png'
    },
    {
        name: '持込自由',
        image: '/eating.png'
    },
    {
        name: '私語OK',
        image: '/talk.png'
    },
    {
        name: '備品無料貸出',
        image: '/rental.png'
    },
    {
        name: 'パーソナル個室',
        image: '/personal.png'
    },
    {
        name: '会議室あり',
        image: '/meeting.png'
    },
    {
        name: '安心セキュリティ',
        image: '/security.png'
    },
]

const Facility = () => {
    return (
        <div id="facility">
            <Title title="設備"/>
            <div className="grid grid-cols-3 md:grid-cols-5 w-auto content-center md:mx-24">
                {icon_images.map((icon_image,id) =>
                    <div key={id} className="w-100 text-center my-5 inline-block m-auto">
                        <img
                            src={icon_image.image}
                            width={100}
                            height={100}
                            loading={"eager"}
                        />
                        <p>{icon_image.name}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Facility