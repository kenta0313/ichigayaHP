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
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d210.4762178520526!2d139.73695560520622!3d35.6916775304059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c60b5d2c805%3A0x2a12a7bb6c4f5488!2z44CSMTAyLTAwNzMg5p2x5Lqs6YO95Y2D5Luj55Sw5Yy65Lmd5q615YyX77yU5LiB55uu77yS4oiS77yR77yVIOW4guODtuiwt-ODl-ODqeOCtg!5e0!3m2!1sja!2sjp!4v1623920470861!5m2!1sja!2sjp" width="300" height="300" loading="lazy"></iframe>
                </div>
            </div>
        </div>
    )
}

export default Access
