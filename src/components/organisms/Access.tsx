import React from "react"
import Title from "../atoms/Title"

const Access = () => {
    return (
        <div id="access">
            <Title title="アクセス"/>
            <div className="text-center md:flex">
                <div className="flex-1 text-2xl md:text-3xl">
                    <p className="text-green-700 mb-3">◇最寄り駅</p>
                    <p>市ヶ谷駅から徒歩2分</p>
                    <p className="mt-6 text-green-700 mb-3">◇住所</p>
                    <p>〒102-0073<br/>東京都千代田区九段北<br/>４丁目２−１５</p>
                </div>
                <div className="flex-1 hidden md:inline-block">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1558.9963505725927!2d139.73531408186247!3d35.69170566722533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d5d084f00e9%3A0x3d42c026d39d5482!2z5biC44O26LC344Kz44Ov44O844Kt44Oz44Kw44Kr44OV44Kn!5e0!3m2!1sja!2sjp!4v1624423500428!5m2!1sja!2sjp" width="300" height="300" loading="eager"></iframe>
                </div>
            </div>
        </div>
    )
}

export default Access
