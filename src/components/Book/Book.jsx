import PropTypes from 'prop-types';
import { IoIosStarOutline } from "react-icons/io";
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const { bookId, image, bookName, author, tags, category, rating } = book;
    return (
        <Link to={`/books/${bookId}`}>
            <div className="card bg-base-100 w-96 shadow-sm p-6">
                <figure className='bg-gray-200 py-8 rounded-2xl'>
                    <img className='h-[166px]'
                        src={image}
                        alt={bookName} />
                </figure>
                <div className="card-body">
                    <div className='flex justify-around'>
                        {
                            tags.map((tag, index) => <button key={index} className="btn bg-green-50  text-green-500 rounded-lg btn-xs"> {tag}</button>)
                        }
                    </div>
                    <h2 className="card-title">
                        {bookName}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>By: {author}</p>
                    <div className="border border-dashed border-gray-200 my-2"></div>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline">{category}</div>
                        <div className="badge badge-outline">{rating}<IoIosStarOutline /></div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

Book.propTypes = {
    book: PropTypes.object.isRequired,
}

export default Book;