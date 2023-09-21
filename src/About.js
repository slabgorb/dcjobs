import {
    Container,
    Button,
    Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";

function Section(props) {
    return (

        <Container>
            <h3>{props.title}</h3>

            <Typography>{props.details}</Typography>
        </Container>
    );
}

function About() {

    const { t } = useTranslation();
    const maplink =
        "https://www.google.com/maps/dir//61+Pierce+St+NE,+Washington,+DC+20002/@38.9045632,-77.0776015,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x89b7b81fa06c4b53:0x4dab6afa751fb0a7!2m2!1d-77.0075618!2d38.9044505";
    const position = [38.904, -77.007];
    return (
        <Container maxwidth="md" >

            <h1>{t("title")}</h1>
            <h2>{t("subheader")}</h2>
            <Button variant="text">
                <a href="tel:+12403804680">{t("connect")}</a>
            </Button>
            <Section title={t("about_title1")} details={t("about_body1")} />
            <Section title={t("about_title2")} details={t("about_body2")} />
            <Section title={t("about_title3")} details={t("about_body3")} />
            <Section title={t("about_title4")} details={t("about_body4")} />
            <Section title={t("about_title5")} details={t("about_body5")} />
            <Section title={t("about_title6")} details={t("about_body6")} />
            <Section title={t("about_title7")} details={t("about_body7")} />
            <Section title={t("about_title8")} details={t("about_body8")} />
            <Section title={t("about_title9")} details={t("about_body9")} />
            <Section title={t("about_title10")} details={t("about_body10")} />

        </Container>
    );
};

export default About;