import { Container } from "./styles";
import ReactMapGL from "react-map-gl";
import { useAddress } from "../../context/Address";

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
      />

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
