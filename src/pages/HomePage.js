import img from "../img/ArianNajafi.png";
import './HomePage.css'

const HomePage = () => {
    return (
        <div className="homePage">
            <div className="img_div">
                <img src={img} alt="img" className="img_arian"></img>
            </div>
            <div className="caption">
                <h2 className="title_home">Hi i'm Arian Najafi</h2>
                <h3 className="aboutTitle_home">Develper</h3>
            </div>
        </div>
    );
}

export default HomePage;