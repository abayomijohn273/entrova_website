import MainWrapper from '@/components/layout/mainWrapper'
import HireAnywhereSection from './hireAnywhereSection'
import HowItWorksSection from './howItWorksSection'
// import IntegrationSection from './integrationSection'
import BenefitsSection from './benefitsSection'
import OnboardingSection from './onboardingSection'
import ProcedureSection from './procedureSection'
import SuccessSection from './successSection'
import TopSection from './topSection'
import WhySection from './whySection'

const AIStudio = () => {
  return (
    <MainWrapper>
        <TopSection />
        <HowItWorksSection />
        <OnboardingSection />
        <WhySection />
        <BenefitsSection />
        <HireAnywhereSection />
        <ProcedureSection />
        <SuccessSection />
        {/* <IntegrationSection /> */}
    </MainWrapper>
  )
}

export default AIStudio