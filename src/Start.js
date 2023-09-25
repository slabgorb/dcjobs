import { Container, Button } from "@mui/material";
import { useTranslation } from "react-i18next";

function Start(props) {
    const { t } = useTranslation();
    return (
        <Container>
            <h1>Contact Us</h1>
            <Button variant="text">
                <a href="tel:+12403804680">{t("connect")}</a>
            </Button>
            <a href="mailto:">Email us</a>
        </Container>
    );
}

export default Start;
