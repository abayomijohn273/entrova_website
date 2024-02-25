import CtaSection from '../ctaSection'
import Footer from '../footer'
import Header from '../header'

const MainWrapper = ({ children }) => {
    return (
        <main id="main" className='relative'>
            <Header />
            {children}
            <CtaSection />
            <Footer />
        </main>
    )
}

export default MainWrapper