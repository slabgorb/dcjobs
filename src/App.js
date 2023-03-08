import ChooseLanguage from "./ChooseLanguage";
import { useTranslation } from "react-i18next";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { Marker } from "react-leaflet/Marker";
import { Popup } from "react-leaflet/Popup";
import "@fontsource/raleway";
import {
  Card,
  CardHeader,
  CardContent,
  Container,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  ImageList,
  ImageListItem,
  CardMedia,
  Box,
} from "@mui/material";
import "./App.css";
import Review from "./Review";

function App() {
  const { t } = useTranslation();
  const maplink =
    "https://www.google.com/maps/dir//61+Pierce+St+NE,+Washington,+DC+20002/@38.9045632,-77.0776015,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x89b7b81fa06c4b53:0x4dab6afa751fb0a7!2m2!1d-77.0075618!2d38.9044505";
  const position = [38.904, -77.007];
  const imageSet = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];
  const image = imageSet[Math.floor(Math.random() * imageSet.length)];
  return (
    <Container maxwidth="md">
      <ChooseLanguage />
      <Card>
        <Box sx={{ position: "relative" }}>
          <CardMedia
            component="img"
            image={image}
            sx={{
              height: 500,
              display: "center",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              bgcolor: "rgba(0, 0, 0, 0.54)",
              color: "white",
              padding: "10px",
            }}
          >
            <Typography variant="h2" sx={{ textTransform: "uppercase" }}>
              DC Jobs Referral Service
            </Typography>
          </Box>
        </Box>
      </Card>
      <h1>{t("title")}</h1>
      <h2>{t("subheader")}</h2>
      <Button variant="text">
        <a href="tel:+12403804680">{t("connect")}</a>
      </Button>
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
      <Accordion>
        <AccordionSummary>{t("question1")}</AccordionSummary>
        <AccordionDetails>
          <Typography>{t("answer1")}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>{t("question2")}</AccordionSummary>
        <AccordionDetails>
          <Typography>{t("answer2")}</Typography>
          <Typography>{t("answer2_1")}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>{t("why")}</AccordionSummary>
        <AccordionDetails>
          <Typography>{t("why1")}</Typography>
          <Typography>{t("why2")}</Typography>
          <Typography>{t("why3")}</Typography>
        </AccordionDetails>
      </Accordion>
      <Container>
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>DC Jobs Referral Service Location</Popup>
          </Marker>
        </MapContainer>
        <Typography>
          <h2>{t("reviews")}</h2>
        </Typography>
        <Review date="9/4/22" body={t("review1")} reviewer="Anonymous" />
        <Review date="9/11/22" body={t("review2")} reviewer="Anonymous" />
        <Review date="10/7/22" body={t("review3")} reviewer="Anonymous" />
      </Container>
    </Container>
  );
}

export default App;
