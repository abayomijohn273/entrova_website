import React from 'react'
import Header from '../header'
import Footer from '../footer'

const MainWrapper = ({ children }) => {
    return (
        <main id="main" className='relative'>
            <Header />
            {children}
            <Footer />
        </main>
    )
}

export default MainWrapper