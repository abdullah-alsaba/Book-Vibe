
import "../../index.css"


import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ListedReadBooks from "../../component/ListedBooks/ListedReadBooks/ListedReadBooks";
import ListedWishlistBooks from "../../component/ListedBooks/ListedWishlistBooks/ListedWishlistBooks";

const Books = () => {

   
    

    return (
        <div className="max-w-7xl mx-auto px-6">
            <div>
                <h1 className="font-bold text-3xl text-center px-10 py-5 bg-base-300 rounded-2xl mb-6">Books</h1>
            </div>
            <div>
                
            </div>
        <div>
          <Tabs>
            <TabList>
              <Tab>Read Books</Tab>
              <Tab>Wishlist Books</Tab>
            </TabList>

            <TabPanel>
              <h2><ListedReadBooks></ListedReadBooks></h2>
            </TabPanel>
            <TabPanel>
              <h2><ListedWishlistBooks></ListedWishlistBooks></h2>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    );
};

export default Books;