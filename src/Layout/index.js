import React, {Children} from 'react';
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
    return (
        <>
            <Header />
                {Children}
            <Footer/>
        </>
    );
};

export default Layout;