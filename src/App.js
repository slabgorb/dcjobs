import ChooseLanguage from "./ChooseLanguage";
import { useTranslation } from "react-i18next";
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
} from "@mui/material";
import "./App.css";
import Review from "./Review";

function App() {
  const { t } = useTranslation();
  return (
    <Container maxwidth="md">
      <ChooseLanguage />
      <Typography>
        <h1 style={{ letterSpacing: "3px", textTransform: "uppercase" }}>
          DC Jobs Referral Service
        </h1>
      </Typography>

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
      <ImageList>
        <ImageListItem>
          <img src="1.jpg" alt="cleaning" />
        </ImageListItem>
        <ImageListItem>
          <img src="2.jpg" alt="hands" />
        </ImageListItem>
        <ImageListItem>
          <img src="3.jpg" alt="construction" />
        </ImageListItem>
        <ImageListItem>
          <img src="4.jpg" alt="construction" />
        </ImageListItem>
        <ImageListItem>
          <img src="5.jpg" alt="construction" />
        </ImageListItem>
        <ImageListItem>
          <img src="6.jpg" alt="construction" />
        </ImageListItem>
      </ImageList>
      <Container>
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
