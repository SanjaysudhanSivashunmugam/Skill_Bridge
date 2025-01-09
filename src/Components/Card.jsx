

const Card = () => {
    return(
        <div className="rounded-lg p-4  w-[290px] flex flex-col justify-center shadow-2xl border">
            <div className="w-64 h-48 bg-gray-400 rounded-lg flex justify-center items-center">
                <h1 className="font-bold text-3xl ">404</h1>
            </div>
            <div className="flex flex-col">
                <h3 className="text-lg font-semibold text-center py-4">Full Stack Development</h3>
                <button className="px-4 py-2 bg-blue-500 font-semibold text-white rounded-full ">Explore Programs</button>
            </div>
        </div>
    );
}

export default Card;