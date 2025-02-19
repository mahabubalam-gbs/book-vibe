import PropTypes from 'prop-types';
import { CiLocationOn } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { ImFilePdf } from "react-icons/im";
import { useNavigate } from "react-router-dom";



const SelectedBookLists = ({ list }) => {
    const { bookId, author, bookName, image, category, publisher, rating, tags, yearOfPublishing, totalPages } = list;
    const navigate = useNavigate()

    const handleViewDetails = () => {
        navigate(`/books/${bookId}`)
    }

    return (
        <div className='py-4 flex justify-center items-center w-full md:w-fit'>
            <div className="card card-side p-4 border border-gray-200 flex flex-col md:flex-row">
                <figure className='bg-gray-200 px-9 py-4 rounded-md'>
                    <img className='h-[172px] w-[130px]'
                        src={image}
                        alt={bookName} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl">{bookName}</h2>
                    <p className='grow-0'>By : {author}</p>
                    <div>
                        <p className='grow-0 flex items-center'><span className="font-bold mr-10 ">Tag</span>{
                            tags.map((tag, index) => <button className="btn btn-xs rounded-xl bg-green-50 mr-4 text-green-500" key={index}>#{`${tag}`}</button>)} <span className='text-gray-500 flex items-center'><CiLocationOn className='mr-1' /> Year of Publishing: {yearOfPublishing}</span>

                        </p>
                    </div>
                    <div >
                        <p className='flex items-center gap-4'>
                            <span className='flex items-center text-gray-500'><IoPersonOutline className='mr-2' /> Publisher: {publisher}</span>
                            <span className='flex items-center text-gray-500'><ImFilePdf className='mr-2' /> Page: {totalPages}</span>
                        </p>
                    </div>
                    <div className="border border-b border-gray-100 my-2"></div>
                    <div className="card-actions justify-start">
                        <span className='px-5 py-2 rounded-2xl text-blue-500 bg-blue-100 mr-1'>Category: {category}</span>
                        <span className='px-5 py-2 rounded-2xl text-orange-400 bg-orange-50 mr-1'>Rating: {rating}</span>
                        <button className="btn bg-green-500 rounded-2xl text-white" onClick={handleViewDetails}>View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

SelectedBookLists.propTypes = {
    list: PropTypes.object,
}


export default SelectedBookLists;