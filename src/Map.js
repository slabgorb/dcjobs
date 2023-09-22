import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { Marker } from "react-leaflet/Marker";
import { Popup } from "react-leaflet/Popup";

import { Card, CardContent, CardHeader, Container, Button } from "@mui/material";

import { useTranslation } from "react-i18next";
function Map(props) {
    const { t } = useTranslation();
    return (
        <Container>

            <Card>
                <CardContent>
                    <address>
                        61 Pierce Street Northeast Washington, District of Columbia 20002
                        <Button href={props.maplink} target="_blank" rel="noreferrer">
                            {t("get_directions")}
                        </Button>
                    </address>
                    <a href="tel:+12403804680">(240) 380-4680</a>
                </CardContent>
            </Card>
            <MapContainer center={props.position} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={props.position}>
                    <Popup>Elite Talent Connect Location</Popup>
                </Marker>
            </MapContainer>
        </Container>
    );
}

export default Map;