import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";
import { getStoredWishlist } from "../../Utility/addToDb";


const PagesToRead = () => {
    const [wishlistData, setWishlistData] = useState([]);
    const allBooks = useLoaderData();

    useEffect(() => {
        const storedWishlist = getStoredWishlist();
        console.log(storedWishlist)
        const storedWishlistInt = storedWishlist.map(id => parseInt(id));

        const customWishlistData = allBooks.filter(book => storedWishlistInt.includes(book.bookId))
        console.log(customWishlistData)
        const rechartWishlistData = customWishlistData.map(book => {
            const obj = {
                name: book.bookName,
                pages: book.totalPages,
            }
            return obj
        })
        setWishlistData(rechartWishlistData);
    }, []);


    return (
        <div className="flex justify-center py-10 items-center w-full shadow-2xl border-gray-200">
            <Helmet>
                <title>Rechart Page</title>
            </Helmet>

            <BarChart width={800} height={400} data={wishlistData} >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" width={800} />
                <YAxis dataKey="pages" />
                <Tooltip />
                <Bar dataKey="pages" barSize={25} fill="#0180CC" />

            </BarChart>

        </div>
    );
};

export default PagesToRead;