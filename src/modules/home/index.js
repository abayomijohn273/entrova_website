import MainWrapper from '@/components/layout/mainWrapper'
import AboutSection from './aboutSection'
import TopSection from './topSection'
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