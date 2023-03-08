import { useTranslation } from "react-i18next";
import { Button, AppBar, Container } from "@mui/material";
import i18n from "i18next";
import LanguageIcon from "@mui/icons-material/Language";

function changeLanguage(lang) {
  i18n.changeLanguage(lang);
}

function LanguageButton(props) {
  const { t, i18n } = useTranslation();
  return (
    <Button
      edge="start"
      sx={{ mr: 2 }}
      startIcon={<LanguageIcon />}
      onClick={() => {
        changeLanguage(props.lang);
      }}
      variant="contained"
    >
      {props.lang}
    </Button>
  );
}

function ChooseLanguage() {
  const { t, i18n } = useTranslation();
  return (
    <AppBar position="static" color="background">
      <Container>
        {i18n.language === "es" ? (
          <LanguageButton lang="en" />
        ) : (
          <LanguageButton lang="es" />
        )}
      </Container>
    </AppBar>
  );
}

export default ChooseLanguage;
