import { useLoaderData, useParams } from "react-router";
import ExpectedBook from "./ExpectedBook/ExpectedBook";


const BookDetails = () => {

    const { BookId } = useParams();

    const books = useLoaderData();
  

    const expectedBook = books.find(book => book.bookId == BookId)
   
   
    return (
        <div>
           <ExpectedBook expectedBook={expectedBook}></ExpectedBook>
        </div>
    );
};

export default BookDetails;