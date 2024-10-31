import open_brewery from '../assets/open_brewery.png'

const About = () => {
    return (
        <div className="about-card">
            <p>Open Brewery DB is a free dataset and API with public information on breweries, cideries, brewpubs, and bottleshops.</p>
            <p>This project aims to keep an up-to-date, community-driven, and publicly available database of breweries for the betterment of the beer community and the joy of web developers and data analysts.</p>
            <img src={open_brewery} alt="" />
        </div>
    );
};
export default About;