import React from 'react';
import Header from '../Components/Header';
import Content from '../Components/Content';
import Sliders from '../Components/Sliders';
import Footer from '../Components/Footer';

function Home(props) {
    return (
        <div className="xl:w-[1120px] xs:w-auto xl:m-auto xs:mx-10">
            <Header />
            <Content />
            <Sliders />
            <Footer />
        </div>
    );
}

export default Home;
