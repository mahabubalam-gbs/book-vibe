import { Helmet } from "react-helmet-async";


const SignUpForm = () => {

    const handleSignUpSubmit = (e) => {
        e.preventDefault();

    }
    return (
        <div className="flex justify-center flex-col items-center py-24 w-full bg-base-100 shadow-xl">
            <Helmet>
                <title>Book Vibe - log in or sign up</title>
            </Helmet>
            <h2 className="text-5xl font-bold text-gray-600 mb-10 ">Sign up</h2>
            <form onSubmit={handleSignUpSubmit} className="flex justify-center flex-col items-center w-[540px]">
                <input type="text" placeholder="First Name" className="input input-md text-[16px] text-gray-800 font-[500] mb-4" required />
                <input type="text" placeholder="Last Name" className="input input-md mb-4 text-[16px] text-gray-800 font-[500]" required />
                <input type="email" placeholder="Email Address" className="input input-md mb-4 text-[16px] text-gray-800 font-[500]" required />
                <input type="date" className="input mb-4 text-[16px] text-gray-800 font-[500]" />
                <input type="password" placeholder="Password" className="input input-md mb-4 text-[16px] text-gray-800 font-[500]" required />
                <input type="password" placeholder="Re-enter Password" className="input input-md mb-4 text-[16px] text-gray-800 font-[500]" required />
                <input type="submit" className="btn btn-success bg-green-400 hover:bg-green-500 font-bold text-white text-lg outline-0 border-0 w-[320px]" value="Sign Up" />
            </form>

            <div>
                <div className="divider my-12 w-[320px] items-center">or</div>
            </div>
            <button className="btn bg-white text-black border-[#e5e5e5] w-[320px]">
                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                Login with Google
            </button>
        </div>
    );
};

export default SignUpForm;