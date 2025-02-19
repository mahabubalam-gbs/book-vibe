import { Outlet, useNavigation } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from '../Footer/Footer';
import { ColorRing } from 'react-loader-spinner';


const Root = () => {
    const navigation = useNavigation();
    return (
        <div className="max-w-6xl mx-auto">
            <NavBar></NavBar>
            <div className="justify-center items-center flex">{
                navigation.state === "loading" ? <ColorRing
                    visible={true}
                    height="40"
                    width="40"
                    ariaLabel="color-ring-loading"
                    wrapperStyle={{}}
                    wrapperClass="color-ring-wrapper"
                    colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                /> : <Outlet></Outlet>
            }
            </div>
            <Footer></Footer>

        </div>
    );
};

export default Root;