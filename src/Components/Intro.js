import "../Styles/intro.css";

function Intro() {
    return (
        <>
            <div id="home" className="intro-container">
                <img src={require("../Media/1000_F_455442919_htGiuC6iDFoJwIbNm0WBGXbAGhm619ov.jpg")} className="background-image" />


                <div className="intro-text-container">
                    <div className="intro-text center">
                        <p className="intro-text">BTP Soul<br></br>Foods</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Intro;