import { Helmet } from "react-helmet-async";

const SignInForm = () => {
    const handleSignInSubmit = (e) => {
        e.preventDefault();

    }
    return (
        <div className="flex justify-center flex-col items-center py-24 w-full bg-base-100 shadow-xl">
            <Helmet>
                <title>Book Vibe - log in or sign up</title>
            </Helmet>
            <h2 className="text-5xl font-bold text-gray-600 mb-10 ">Sign in</h2>
            <form onSubmit={handleSignInSubmit} className="flex justify-center flex-col items-center w-[540px]">
                <label className="input validator mb-4 text-[16px] text-gray-800 font-[500]">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
                    <input type="email" placeholder="mail@site.com" required />
                </label>
                <label className="input validator mb-4 text-[16px] text-gray-800 font-[500]">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle></g></svg>
                    <input type="password" required placeholder="Password" minlength="8" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must be more than 8 characters, including number, lowercase letter, uppercase letter" />
                </label>
                <p className="validator-hint hidden mb-4">
                    Must be more than 8 characters, including
                    <br />At least one number
                    <br />At least one lowercase letter
                    <br />At least one uppercase letter
                </p>
                <input type="submit" className="btn btn-success bg-green-400 hover:bg-green-500 font-bold text-white text-lg outline-0 border-0 w-[320px]" value="Sign In" />
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


export default SignInForm;