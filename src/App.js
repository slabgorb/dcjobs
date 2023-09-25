import "@fontsource/raleway";
import { useTranslation } from "react-i18next";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import "./App.css";
import Home from "./Home";
import About from "./About";
import Start from "./Start";
import Nav from "./Nav";
import ChooseLanguage from "./ChooseLanguage";

import {
    Card,
    Container,
    Typography,
    Box,
} from "@mui/material";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

function App(props) {
    const { t } = useTranslation();
    var currentPage = "About";
    return (
        <ThemeProvider theme={darkTheme}>
            <Container>
                <ChooseLanguage />
                <Card>
                    <Box sx={{ position: "relative" }}>
                        <Typography variant="h2" sx={{ textTransform: "uppercase" }}>
                            Elite Talent Connect
                        </Typography>
                    </Box>
                </Card>
                <Start style={currentPage === "Start" ? 'display:none' : 'display:block'} />

                <Home style={currentPage === "Home" ? 'display:none' : 'display:block'} />
                <About style={currentPage === "About" ? 'display:none' : 'display:block'} />
            </Container>
        </ThemeProvider>
    );
}

export default App;
