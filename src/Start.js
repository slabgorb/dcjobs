import { Container, Button } from "@mui/material";
import { useTranslation } from "react-i18next";

function Start(props) {
    const { t } = useTranslation();
    return (
        <Container>
            <Button variant="text">
                <a href="tel:+12403804680">{t("connect")}</a>
            </Button>
            < Button variant="text">
                <a href="mailto:">{t("email")}</a>
            </Button>
        </Container>
    );
}

export default Start;
