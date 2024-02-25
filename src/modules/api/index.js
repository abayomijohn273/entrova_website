import MainWrapper from '@/components/layout/mainWrapper'
import ProcedureSection from './procedureSection'
import TopSection from './topSection'
import WhySection from './whySection'

const API = () => {
    return (
        <MainWrapper>
            <TopSection />
            <WhySection />
            <ProcedureSection />
        </MainWrapper>
    )
}

export default API