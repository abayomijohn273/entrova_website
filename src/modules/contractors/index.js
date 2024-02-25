import MainWrapper from '@/components/layout/mainWrapper'
import BenefitsSection from './benefitsSection'
import ComplianceSection from './complianceSection'
import ProcedureSection from './procedureSection'
import TopSection from './topSection'
import WhySection from './whySection'

const Contractors = () => {
    return (
        <MainWrapper>
            <TopSection />
            <ProcedureSection />
            <BenefitsSection />
            <ComplianceSection />
            <WhySection />
        </MainWrapper>
    )
}

export default Contractors