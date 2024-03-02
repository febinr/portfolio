import ContactUs from "../../components/contact-us/contact-us";
import Header from "../../components/header/header";
import MyStack from "../../components/my-stack/my-stack";
import MyTimeline from "../../components/my-timeline/my-timeline";
import Overview from "../../components/overview/overview";


const Home = () => {
    return (
        <>
            <Header />
            <Overview />
            <MyStack />
            <MyTimeline />
            <ContactUs />
        </>
    )
};


export default Home;