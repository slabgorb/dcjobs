import { Container } from "@mui/material";
import { t } from "i18next";

function Section(props) {
    return (<div className="section">
        <h2>{props.title}</h2>
        <p>{props.body}</p>
    </div>);
}
function Home() {
    return (<Container>

        <Section title={t("home_title1")} body={t("home_body1")} />
        <Section title={t("home_title2")} body={t("home_body2")} />
        <Section title={t("home_title3")} body={t("home_body3")} />
        <Container>
            <ul>
                <li>{t("career_1")}</li>
                <li>{t("career_2")}</li>
                <li>{t("career_3")}</li>
                <li>{t("career_4")}</li>
                <li>{t("career_5")}</li>
                <li>{t("career_6")}</li>
                <li>{t("career_7")}</li>
                <li>{t("career_8")}</li>
                <li>{t("career_9")}</li>
                <li>{t("career_10")}</li>
                <li>{t("career_11")}</li>
                <li>{t("career_12")}</li>
            </ul>
        </Container>


        <div>{t("home_body4")}</div>
    </Container >);

}
export default Home;