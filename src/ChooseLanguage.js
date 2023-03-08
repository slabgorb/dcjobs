import { useTranslation } from "react-i18next";
import { Button, ButtonGroup } from "@mui/material";
import i18n from "i18next";
import LanguageIcon from "@mui/icons-material/Language";

function changeLanguage(lang) {
  i18n.changeLanguage(lang);
}

function ChooseLanguage() {
  const { t, i18n } = useTranslation();
  return (
    <ButtonGroup>
      {i18n.language === "es" ? (
        <Button
          startIcon={<LanguageIcon />}
          onClick={() => {
            changeLanguage("en");
          }}
          variant="contained"
        >
          EN
        </Button>
      ) : (
        <Button
          startIcon={<LanguageIcon />}
          onClick={() => {
            changeLanguage("es");
          }}
          variant="contained"
        >
          ES
        </Button>
      )}
    </ButtonGroup>
  );
}

export default ChooseLanguage;
