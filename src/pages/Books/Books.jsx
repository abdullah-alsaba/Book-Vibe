import { useContext } from "react";
import "../../index.css"
import { BookContext } from "../../routes/Context/BookProviderContext";

const Books = () => {

    const { storedBooks, wishlist } = useContext(BookContext);
    

    return (
        <div>
            Books
        </div>
    );
};

export default Books;