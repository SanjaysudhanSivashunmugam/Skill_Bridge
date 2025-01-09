import logImg from "../assets/logimg.webp"
import googleimg from "../assets/google-logo.png"
import facebookimg from "../assets/facebook.jpeg"
import mailimg from "../assets/mailimg.jpeg"
import passkeyimg from "../assets/passkey-logo.png"
function Login() {
    return (
        <div className="bg-cyan-100 w-full flex justify-center">
            <div className="w-1/2">
                <img src={logImg} alt="img_1" />
            </div>
            <div className="bg-white w-1/2 m-16 rounded-md">
                <div className="px-10">
                    <h2 className="text-2xl  pt-8 font-semibold">Welcome Back</h2>
                    <h1 className="text-3xl text-blue-700 font-extrabold  pt-2">Skill Bridge</h1>
                    <form className="">
                        <div className="flex justify-center">
                            <div className="mt-4 py-3 flex justify-center  w-2/3 rounded-lg border shadow">
                                <img className="h-7" src={googleimg} />
                                <h5 className="pl-3">Login with google</h5>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="mt-4 py-3 flex justify-center  w-2/3 rounded-lg border shadow">
                                <img className="h-7" src={facebookimg} />
                                <h5 className="pl-3">Login with facebook</h5>
                            </div>
                        </div>
                        <hr class="h-px my-6 bg-gray-200 border-0 dark:bg-gray-700"/>
                        <div className="flex justify-center">
                            <div className=" py-3 flex justify-center bg-slate-100 w-2/3 rounded-lg border shadow">
                                <input className="bg-inherit h-full" placeholder="Enter Your Mail"/>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="mt-4 py-3 flex justify-center bg-slate-100 w-2/3 rounded-lg border shadow">
                                <input className="bg-inherit" placeholder="Enter Your Password"/>
                            </div>
                        </div>
                        <div className="flex justify-between px-24 py-5">
                            <p>Remember me</p>
                            <p className="text-blue-500">Forgot Password?</p>
                        </div>
                        <div className="flex justify-center h-16 ">
                            <div className="mt-4  flex justify-center bg-blue-500 w-2/3 rounded-lg border shadow text-white">
                                <button>Login</button>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </div>

    );
}
export default Login