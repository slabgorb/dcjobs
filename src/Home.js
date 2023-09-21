import { Container } from "@mui/material";

function Section(props) {
    return (<div className="section">
        <h2>{props.title}</h2>
        <p>{props.body}</p>
    </div>);
}
function Home() {
    return (<Container>

        <Section title="Introducing Elite Talent Connect: Your Gateway to Premium Career Opportunities in the DMV Region" body="At Elite Talent Connect, we specialize in empowering professionals like you to discover exceptional career prospects in the dynamic DMV area.With a legacy of over 25 years, we have honed the art of seamlessly bridging the gap between top - tier employers and highly qualified candidates." />
        <Section title="Our Unparalleled Network of Opportunities" body="We have cultivated strong partnerships with a select group of esteemed DMV employers who exclusively rely on our services to identify and secure top - tier talent for their organizations.Our long - standing reputation assures them that we deliver the most qualified candidates for their critical job openings." />
        <Section title="Unearthing Unique Career Avenues" body="Elite Talent Connect goes beyond the ordinary.We specialize in connecting candidates with opportunities that often fly under the radar of traditional agencies.Whether you aspire to join the elite ranks of IT, cybersecurity, diesel tech, app development, or gaming professionals, we provide comprehensive support for a diverse range of roles, including:">
            <ul>
                <li>IT Specialists</li>
                <li>Cybersecurity Experts</li>
                <li>Diesel Technicians</li>
                <li>App Developers</li>
                <li>Gaming Industry Pioneers</li>
                <li>Warehouse Professionals</li>
                <li>Maintenance Specialists</li>
                <li>Restaurant and Hotel Personnel</li>
                <li>Customer Service Champions</li>
                <li>Skilled Drivers</li>
                <li>Construction Experts</li>
                <li>Entry - Level Office Professionals</li>
            </ul>
        </Section>


        <div>
            We understand that many individuals who are an ideal fit for these roles lack the insider knowledge and representation needed to excel in today's competitive job market. That's where Elite Talent Connect steps in.
        </div>


        <div>

            Our commitment is to empower you with the insights, connections, and support necessary to thrive in your chosen field.Welcome to a world of exclusive opportunities where your unique skills and expertise are truly valued.
        </div>



        <div>
            Unlock your potential with Elite Talent Connect.Discover your future in the DMV area today.;
        </div>

    </Container>);

}
export default Home;