import Banner from "../assets/hero.jpg";

const Hero = () => {
    return(
        <div
            className="container mx-auto px-20 herobg"
        >
            <div className="text-white text-center ">
                <h1 className="text-4xl font-bold pt-24 pb-10">Tech Career Programs</h1>
                <div className="flex justify-center">
                <ul className="list-disc list-inside justify-center text-justify">
                    <li>Mentors from Top Global Product companies.</li>
                    <li>A Portfolio of Real-world Projects.</li>
                    <li>Globally Recognized Certification.</li>
                </ul>
                </div>
                <h2 className="text-xl font-bold pt-10 pb-5">Live Classes available in English, தமிழ், हिंदी, తెలుగు</h2>
                <button className="px-4 py-2 bg-red-500 rounded-full ">Explore Programs</button>
            </div>
            
        </div>
    );
}

export default Hero;