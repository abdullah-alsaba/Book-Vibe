/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { BookContext } from "../../../routes/Context/BookProviderContext";
import ListedReadBookCard from "../ListedReadBooks/ListedReadBookCard/ListedReadBookCard";
import EmptyWishlist from "./Empty Wishlist/EmptyWishlist";

const ListedWishlistBooks = () => {

    const { wishlist } = useContext(BookContext);
    if (wishlist.length === 0) {
      return <EmptyWishlist></EmptyWishlist>;
    }
    return (
      <div>
        <div>
          {wishlist.map((book, ind) => (
            <ListedReadBookCard key={ind} book={book}></ListedReadBookCard>
          ))}
        </div>
      </div>
    );
};

export default ListedWishlistBooks;