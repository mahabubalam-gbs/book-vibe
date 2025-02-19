import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList, getStoredWishlist } from "../../Utility/addToDb";
import SelectedBookLists from "../SelectedBookLists/SelectedBookLists";
import { Helmet } from "react-helmet-async";



const ListedBooks = () => {

    const [readLists, setReadLists] = useState([]);
    const [wishLists, setWishLists] = useState([]);
    const allBooks = useLoaderData();

    useEffect(() => {
        // storing mark as read to a state
        const storedReadList = getStoredReadList();
        const storedReadListInt = storedReadList.map(id => parseInt(id));

        const readBookLists = allBooks.filter(book => storedReadListInt.includes(book.bookId));

        setReadLists(readBookLists);

        // storing wishlist to a state
        const storedWishList = getStoredWishlist();
        const storedWishListInt = storedWishList.map(id => parseInt(id));

        const wishListBooks = allBooks.filter(book => storedWishListInt.includes(book.bookId));

        setWishLists(wishListBooks)
    }, []);

    const handleBookListSort = (sortType) => {
        if (sortType === 'rating') {
            const readListSort = [...readLists].sort((a, b) => a.rating - b.rating);
            const wishListSort = [...wishLists].sort((a, b) => a.rating - b.rating);
            setReadLists(readListSort);
            setWishLists(wishListSort);
        }
        if (sortType === 'number of pages') {
            const readListSort = [...readLists].sort((a, b) => a.totalPages - b.totalPages);
            const wishListSort = [...wishLists].sort((a, b) => a.totalPages - b.totalPages);
            setReadLists(readListSort);
            setWishLists(wishListSort);
        }
        if (sortType === 'publisher year') {
            const readListSort = [...readLists].sort((a, b) => a.yearOfPublishing - b.yearOfPublishing);
            const wishListSort = [...wishLists].sort((a, b) => a.yearOfPublishing - b.yearOfPublishing);
            setReadLists(readListSort);
            setWishLists(wishListSort);
        }
    }


    return (
        <div className="mb-28 w-full">
            <Helmet>
                <title>Listed Books</title>
            </Helmet>
            <div className="text-center py-16">
                <button className="btn btn-success text-white" popoverTarget="popover-1" style={{ anchorName: "--anchor-1" }}>
                    Sort By <IoIosArrowDown />
                </button>
            </div>

            <ul className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
                popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" }}>
                <li onClick={() => handleBookListSort('rating')}><a>Ratings</a></li>
                <li onClick={() => handleBookListSort('number of pages')}><a>Number of pages</a></li>
                <li onClick={() => handleBookListSort('publisher year')}><a>Publisher year</a></li>
            </ul>

            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>

                <TabPanel>
                    <div>
                        {
                            readLists.map(readList => <SelectedBookLists key={readList.bookId} list={readList}></SelectedBookLists>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div>
                        {
                            wishLists.map(wishList => <SelectedBookLists key={wishList.bookId} list={wishList}></SelectedBookLists>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;