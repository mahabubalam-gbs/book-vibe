

// handling Mark As Read to Local Storage

const getStoredReadList = () => {
    const storedListStr = localStorage.getItem('read-list');
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr)
        return storedList;
    } else {
        return [];
    }
}

const addToStoreReadList = (id) => {
    const storedList = getStoredReadList();
    if (storedList.includes(id)) {
        console.log(id, 'Already exits in the read list');
    } else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListStr);
        // toast('Already added to your read list')
    }
}


// handling Add To Wishlist to Local Storage

const getStoredWishlist = () => {
    const storedListStr = localStorage.getItem('wish-list');
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    } else {
        return [];
    }
}

const addToStoredWishlist = (id) => {
    const storedList = getStoredWishlist();
    if (storedList.includes(id)) {
        console.log(id, 'Already exits in the wishlist')
    } else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('wish-list', storedListStr)
        // toast('Already added to your wishlist')
    }
}

export { getStoredReadList, getStoredWishlist, addToStoreReadList, addToStoredWishlist }