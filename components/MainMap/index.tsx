import { Container } from "./styles";
import ReactMapGL, { Marker } from "react-map-gl";
import { useAddress } from "../../context/Address";

const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`;

const SIZE = 20;

const MainMap: React.FC = () => {
  const { address } = useAddress();
  return (
    <Container>
      <ReactMapGL
        className="map-container"
        mapStyle={"mapbox://styles/mapbox/dark-v10"}
        mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_KEY}
        width={"100%"}
        height={"100%"}
        latitude={address.lat || 51.505}
        longitude={address.lon || -0.09}
        zoom={12}
      >
        <Marker
          latitude={address.lat || 51.505}
          longitude={address.lon || -0.09}
        >
          <svg
            height={SIZE}
            viewBox="0 0 24 24"
            style={{
              cursor: "pointer",
              fill: "#fefefe",
              stroke: "none",
              transform: `translate(${-SIZE / 2}px,${-SIZE}px)`,
            }}
          >
            <path d={ICON} />
          </svg>
        </Marker>
      </ReactMapGL>

      {/* <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        style={{ width: "100%", height: "100%" }}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer> */}
    </Container>
  );
};

export default MainMap;
