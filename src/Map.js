import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { Marker } from "react-leaflet/Marker";
import { Popup } from "react-leaflet/Popup";

import { useTranslation } from "react-i18next";
function About() {
    const { t } = useTranslation();
    return (
        <Container>
            <Card>
                <CardHeader title={t("about_title")} />
                <CardContent>
                    {t("about")}
                    <br />
                    <br />
                    {t("types")}
                    <address>
                        61 Pierce Street Northeast Washington, District of Columbia 20002
                        <Button href={maplink} target="_blank" rel="noreferrer">
                            {t("get_directions")}
                        </Button>
                    </address>
                    <a href="tel:+12403804680">(240) 380-4680</a>
                </CardContent>
            </Card>
            <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>DC Jobs Referral Service Location</Popup>
                </Marker>
            </MapContainer>
        </Container>
    );
}