import BannerImg from '../../assets/images/books.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200  max-h-[554px] p-12">
            <div className="hero-content flex-col lg:flex-row-reverse">

                <img
                    src={BannerImg}
                    className="max-w-sm rounded-lg shadow-2xl" />

                <div>
                    <h1 className="text-5xl font-bold mb-6">Books to freshen up your bookshelf</h1>

                    <button className="btn btn-success font-black text-white">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;