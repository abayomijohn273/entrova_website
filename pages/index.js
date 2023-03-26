import React from 'react';
import FeatureSection from '../components/home/components/featureSection';
import TopSection from '../components/home/components/topSection';
import Footer from '../components/layout/footer';

const Home = () => {
    return <main className='relative'>
        <TopSection />
        <FeatureSection />
        <Footer />
    </main>

}

export default Home;
