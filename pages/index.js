import React from 'react';
import FeatureSection from '../components/home/components/featureSection';
import dynamic from 'next/dynamic';

const TopSection = dynamic(() => import('../components/home/components/topSection'), {
    ssr: false,
})

const Footer = dynamic(() => import('../components/layout/footer'), {
    ssr: false,
})

const Home = () => {
    return <main className='relative'>
        <TopSection />
        <FeatureSection />
        <Footer />
    </main>

}

export default Home;
