import MainWrapper from '@/components/layout/mainWrapper'
import BenefitsSection from './benefitsSection'
import GlobalSection from './globalSection'
import HowSection from './howSection'
import OurUniqueSection from './ourUniqueSection'
import SolutionSection from './solutionSection'
import TopSection from './topSection'
import WhySection from './whySection'

const Home = () => {
    return (
        <MainWrapper>
            <TopSection />
            <BenefitsSection />
            <OurUniqueSection />
            <WhySection />
            <HowSection />
       
            <GlobalSection />
            <SolutionSection />
            {/* <SuccessStorySection /> */}
        </MainWrapper>
    )
}

export default Home