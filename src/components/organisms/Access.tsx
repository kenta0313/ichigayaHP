import React from "react"
import Title from "../atoms/Title"
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
    width: "350px",
    height: "350px",
  };

  const center = {
    lat: 35.69172716720563,
    lng: 139.73693608178093,
  };
const Access = () => {
    return (
        <div id="access">
            <Title title="アクセス"/>
            <div className="text-center md:flex">
                <div className="flex-1 text-2xl md:text-3xl">
                <p>◇最寄り駅</p>
                <p>市ヶ谷駅から徒歩2分</p>
                <p className="mt-6">◇住所</p>
                <p>〒102-0073<br/>東京都千代田区九段北<br/>４丁目２−１５</p>
                </div>
                <div className="flex-1 mt-9 md:mt-0">
                    <LoadScript googleMapsApiKey="AIzaSyDGg6oapyj_z75grt0uYLfj24flJhTNAHU">
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={18}
                    >
                    <Marker position={center} label={"市ヶ谷コワーキングカフェ"} />
                    </GoogleMap>
                    </LoadScript>
                </div>

            </div>
        </div>
    )
}

export default Access
