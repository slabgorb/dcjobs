import "@fontsource/raleway";
import { useTranslation } from "react-i18next";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import "./App.css";
import Home from "./Home";
import About from "./About";
import Start from "./Start";
import ChooseLanguage from "./ChooseLanguage";

import {
    Card,
    Container,
    Button,
    Typography,
    ButtonGroup,
    Box,
} from "@mui/material";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

function App() {
    const { t } = useTranslation();
    let currentPage = "About";
    return (
        <ThemeProvider theme={darkTheme}>
            <ChooseLanguage />

            <Card>
                <Box sx={{ position: "relative" }}>
                    <Typography variant="h2" sx={{ textTransform: "uppercase" }}>
                        Elite Talent Connect
                    </Typography>
                </Box>
            </Card>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button onClick={
                    () => currentPage = "Home"
                }>{t('home')}</Button>
                <Button onClick={
                    () => currentPage = "About"
                }>{t('about')}</Button>
                <Button onClick={
                    () => currentPage = "Start"
                }>{t('start')}</Button>
            </ButtonGroup>
            {(currentPage == "Home") ?
                <Container>
                    <Home />
                </Container> : null}
            {(currentPage == "About") ?
                <Container>
                    <About />
                </Container> : null}
            {(currentPage == "Start") ?
                <Container>
                    <Start />
                </Container> : null}
            <br />
            <br />
            <br />
            <br />
            <br />
        </ThemeProvider>
    );
}

export default App;
