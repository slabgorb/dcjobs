import { Button, ButtonGroup } from "@mui/material";
import { useTranslation } from "react-i18next";

function Nav(props) {
    const t = useTranslation();
    return (
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <Button onClick={props.onClick('Home')}>{t('home')}</Button>
            <Button onClick={props.onClick('About')}>{t('home')}</Button>
            <Button onClick={props.onClick('Start')}>{t('home')}</Button>
        </ButtonGroup>
    );
}

export default Nav;