import TargetAudience from "../TargetAudience/TargetAudience";
import Banner from "./Banner/Banner";

const Home = () => {
    return (
        <div className='max-w-6xl mx-auto'>
           <Banner></Banner>
           <TargetAudience></TargetAudience>
        </div>
    );
};

export default Home;