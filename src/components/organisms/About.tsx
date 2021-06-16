import React from "react"
import Title from "../atoms/Title"

const description = "集中したい時に、移動のスキマ時間に、\nプレゼン前の資料の仕上げに、大切なMTGの時に。\n多忙を極めるビジネスパーソンに短時間で仕事がハカドル場所を提供したい。\nそんな想いから、ハカドリたい人のためのコワーキング×カフェ「HAKADORU」は誕生しました。\nコワーキングスペースの快適さとカフェの気軽さを兼ね備えた、まさに“２つのサービスのいいとこ取り”。\nすべてのハカドリたい人にとって最高のハカドル環境を追求し続けていきます。";
const About = () => {
    return (
        <div id="about">
            <Title title="市ヶ谷コワーキングカフェとは？"/>
            <p className="mx-16 md:mx-28 text-xl md:text-2xl">{description}</p>
        </div>
    )
}

export default About