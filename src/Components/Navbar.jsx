import DP from '../assets/dp.jpg'

const Navbar = () => {
    return(
        <div className="container mx-auto px-20 py-2 flex justify-between items-center">
            <h1 className="text-3xl font-bold">Skill<span className="text-blue-500">Bridge</span></h1>
            <a href="" ><img src={DP} alt="" className='w-16 h-16' /></a>
        </div>
    );
}

export default Navbar;