import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="mb-10">
            <div className="hero min-h-[600px]" style={{ backgroundImage: 'url(https://casengine.app/wp-content/uploads/2021/11/MicrosoftTeams-image-1-1200x675.png)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                      
                        <p className="mb-5 font-semibold text-xl">"Seize the day with your to-do list! Each task completed is a step toward your goals. Keep it simple, stay focused, and make progress. You've got this!"</p>
                        <Link to={'/login'}>
                        <button className="btn bg-green-600 text-white border-none hover:bg-green-800">Let’s Explore</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;