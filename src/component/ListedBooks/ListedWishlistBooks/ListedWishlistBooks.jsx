/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { BookContext } from "../../../routes/Context/BookProviderContext";

const ListedWishlistBooks = () => {

    const { wishlist } = useContext(BookContext);
    return (
        <div>
            Listed Wishlist Books 
        </div>
    );
};

export default ListedWishlistBooks;