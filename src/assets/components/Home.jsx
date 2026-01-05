import AboutUs from "./AboutUs.jsx";
import QuickLinks from "./QuickLinks.jsx";
const Home = () => {
    return (
        <>
        <div className="h-full">
            <header className="h-[90vh] hero">
                <div className="hero-content">
                    <h1 className="">MUHAMMAD IRFAN SHAHZAD</h1>
                    <h2> Lecturer Computer Science</h2>
                    <p>Shaping the future with quality education and innovation.</p>
                    <button className="cta-btn"><a href="./Downloads.jsx">DOWNLOADS</a></button>
                </div>
            </header>
        </div>
        <AboutUs />
        <QuickLinks />
        </>
    )
}
export default Home