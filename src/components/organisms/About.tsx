import React from "react"
import Title from "../atoms/Title"

const About = () => {
    return (
        <div id="about">
            <Title title="市ヶ谷コワーキングカフェとは？"/>
            <div className="mx-8 md:mx-28 text-md sm:text-lg md:text-xl">
              <p className="mb-4">JR、都営新宿線の市ヶ谷駅から徒歩1分、公園側の快適な環境で仕事が出来るスペースが誕生しました。</p>
              <p>働き方改革でテレワークが推奨される中、なかなか自宅の環境では集中できないという方に最適な場所です。（テレビ会議可）<br />
              個室タイプの席が9席、テーブル席（2名）が6席、会議室（4名）あります。<br />
              時間制の料金になっており、高品質なコーヒー等、飲み放題でご利用いただけます。<br />
              市ヶ谷周辺でテレワーク作業が必要なビジネスマンの方、是非ご来店ください。
              </p>
            </div>

        </div>
    )
}

export default About