import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredWishlist, addToStoreReadList, getStoredReadList, getStoredWishlist } from "../../Utility/addToDb";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";


const BookDetail = () => {
    const { bookId } = useParams()
    const id = parseInt(bookId);
    const data = useLoaderData();
    const book = data.find(book => book.bookId === id);
    const { author, bookName, image, category, publisher, rating, review, totalPages, yearOfPublishing, tags } = book;

    const handleMarkAsRead = (id) => {
        const storedReadList = getStoredReadList();
        {
            (storedReadList.includes(id)) &&
                toast('Already added to your read list')
        }
        addToStoreReadList(id);
    }

    const handleAddToWishlist = (id) => {
        const storedWishList = getStoredWishlist();
        {
            (storedWishList.includes(id)) &&
                toast('Already added to your wishlist')
        }
        addToStoredWishlist(id);
    }

    return (

        <div className="card lg:card-side shadow-lg p-12 flex justify-center items-center mx-auto">
            <Helmet>
                <title>{bookName} Details</title>
            </Helmet>
            <figure className="w-full justify-center md:w-fit lg:w-1/2 rounded-2xl">
                <img className="  lg:h-[564px] lg:w-[425px] rounded-xl"
                    src={image}
                    alt={bookName} />
            </figure>
            <div className="card-body w-full md:w-fit lg:w-1/2">
                <h2 className="card-title text-4xl font-bold">{bookName}</h2>
                <p className="text-xl grow-0">By: {author}</p>
                <div className="border border-b border-gray-100"></div>

                <p className="text-xl grow-0">{category}</p>
                <div className="border border-b border-gray-100"></div>

                <p className="grow-0"><span className="font-bold">Review: </span>{review}</p>

                <div>
                    <p className="my-4"><span className="font-bold mr-10 ">Tag</span>{
                        tags.map((tag, index) => <button className="btn btn-xs rounded-xl bg-green-50 mr-4 text-green-500" key={index}>#{`${tag}`}</button>)
                    }</p>
                </div>
                <div className="border border-b border-gray-100"></div>

                <div className="flex space-x-16 mt-4">

                    <div className="space-y-3">
                        <p>Number of Pages:</p>
                        <p>Publisher:</p>
                        <p>Year of Publishing:</p>
                        <p>Rating:</p>
                    </div>
                    <div className="font-bold space-y-3">
                        <p>{totalPages} </p>
                        <p> {publisher}</p>
                        <p>{yearOfPublishing} </p>
                        <p>{rating} </p>
                    </div>
                </div>

                <div className="card-actions justify-start mt-4">
                    <button className="btn font-bold" onClick={() => handleMarkAsRead(bookId)}>Mark As Read</button>
                    <button className="btn  btn-accent text-white" onClick={() => handleAddToWishlist(bookId)}>Add To Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetail;