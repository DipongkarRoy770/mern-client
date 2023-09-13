import About from "../components/About";
import Banner from "../components/Banner";
import ContactPage from "../components/ContactPage";
import Service from "../components/Service";


const Home = () => {
    return (
        <>
            <Banner></Banner>
            <About></About>
            <Service></Service>
            <ContactPage></ContactPage>
        </>
    );
};

export default Home;