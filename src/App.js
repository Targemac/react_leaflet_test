import "./App.css";
import { MapContainer, Popup, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon, divIcon, point } from "leaflet";
import icon from "./images/send-svgrepo-com.svg";
import icon2 from "./images/news-svgrepo-com.svg";
import MarkerClusterGroup from "react-leaflet-cluster";
import TestCard from "./Components/TestCard";
import { Avatar, Badge } from "antd";

const position = [9.0701824, 7.4776576];

function App() {
  // replace thw below with component containing votter xtics
  const makers = [
    {
      geocode: [9.0, 7.4],
      Popup: "Hello, ia am popup 1",
      category: 1,
    },
    {
      geocode: [9.1, 7.5],
      Popup: "Hello, ia am popup 2",
      category: 2,
    },
    {
      geocode: [9.1, 7.4],
      Popup: "Hello, ia am popup 3",
      category: 1,
    },
  ];

  const customeIcon = new Icon({
    iconUrl: icon,
    iconSize: [38, 38],
  });

  const customeIcon2 = new Icon({
    iconUrl: icon2,
    iconSize: [38, 38],
  });

  const customeClusterIcon = (cluster) => {
    return divIcon({
      html: `<div className="customeClusterIcon">${cluster.getChildCount()}</div>`,
      className: "customeClusterIcon",
      iconSize: point(33, 33, true),
    });
  };

  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <MarkerClusterGroup
        chunkedLoading
        iconCreateFunction={customeClusterIcon}
      >
        {makers.map((marker) => (
          <Marker
            position={marker.geocode}
            icon={marker.category === 2 ? customeIcon : customeIcon2}
            // icon={customeIcon2}
            key={marker.Popup}
            title={marker.Popup}
            autoPanOnFocus
            // interactive
            riseOnHover={true}
          >
            <Popup>
              {/* <TestCard data={marker.Popup} /> */}
              <Badge count={marker.geocode}>
                <Avatar shape="square" size="large" />
              </Badge>
            </Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
}

export default App;
