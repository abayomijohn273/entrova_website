import MainWrapper from '@/components/layout/mainWrapper'
import React from 'react'
import TopSection from './topSection'
import AboutSection from './aboutSection'
import WorkforceSection from './workforceSection'

const Home = () => {
    return (
        <MainWrapper>
            <TopSection />
            <AboutSection />
            <WorkforceSection />
        </MainWrapper>
    )
}

export default Home