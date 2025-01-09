import Card from "./Card";

const LiveClass = () => {
    return(
        <div className="container mx-auto px-20 pb-14 ">
            <h1 className="text-2xl font-bold text-center py-10">Explore Live Classes with Placement Guidance</h1>
            <div className="flex flex-nowrap justify-between">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <div className="flex flex-nowrap justify-between mt-9">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
}

export default LiveClass;