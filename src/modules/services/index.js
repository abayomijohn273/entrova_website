import MainWrapper from '@/components/layout/mainWrapper'
import HireAnywhereSection from './hireAnywhereSection'
import HowItWorksSection from './howItWorksSection'
import IntegrationSection from './integrationSection'
import OnboardingSection from './onboardingSection'
import ProcedureSection from './procedureSection'
import TopSection from './topSection'

const Employee = () => {
  return (
    <MainWrapper>
        <TopSection />
        <HowItWorksSection />
        <OnboardingSection />
        <HireAnywhereSection />
        <ProcedureSection />
        <IntegrationSection />
    </MainWrapper>
  )
}

export default Employee