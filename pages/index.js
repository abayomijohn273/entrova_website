import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import * as Animate from "react-reveal";

import Logo from "../public/images/logo.svg"
import AppImage from "../public/images/app.webp"

const LogoSection = () => {
    return <nav>
        <Link href={"/"}>
            <a className='font-bold text-2xl text-default'>
                <Image src={Logo} alt="Entrova" />
            </a>
        </Link>
    </nav>
}

const Card = ({ title, content }) => {
    return <div className=''>
        <h3 className='text-2xl font-semibold text-default'>{title}</h3>
        <p className='text-sm-15 lg:text-base xl:text-lg mt-4 text-gray-500'>
            {content}
        </p>
    </div>
}

const Footer = () => {
    return <footer className='pb-12'>
        <div className='mt-24 lg:mt-28 flex flex-col lg:flex-row items-center'>
            <Animate.Fade bottom>
                <div className='flex flex-row justify-center lg:justify-start items-center space-x-6 lg:space-x-3'>
                    <a
                        href='https://www.instagram.com/entrovahq'
                        target={"_blank"}
                        rel="noopener noreferrer"
                    >
                        <svg className='w-5 h-5' viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 1H5C2.79086 1 1 2.79086 1 5V13C1 15.2091 2.79086 17 5 17H13C15.2091 17 17 15.2091 17 13V5C17 2.79086 15.2091 1 13 1Z" stroke="#CAB603" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12.1999 8.496C12.2986 9.16179 12.1849 9.84177 11.8749 10.4392C11.5649 11.0366 11.0744 11.5211 10.4732 11.8237C9.87195 12.1263 9.19062 12.2317 8.52609 12.1247C7.86156 12.0178 7.24767 11.7041 6.77173 11.2281C6.2958 10.7522 5.98205 10.1383 5.87512 9.47377C5.76819 8.80924 5.87352 8.12791 6.17612 7.5267C6.47873 6.92548 6.96321 6.43499 7.56065 6.12499C8.15809 5.81499 8.83807 5.70127 9.50386 5.8C10.183 5.9007 10.8117 6.21717 11.2972 6.70264C11.7827 7.18812 12.0992 7.81686 12.1999 8.496Z" stroke="#CAB603" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M13.3999 4.6001H13.4079" stroke="#CAB603" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                    </a>
                    <a
                        href='https://www.facebook.com/entrovahq'
                        target={"_blank"}
                        rel="noopener noreferrer"
                    >
                        <svg className='w-6 h-4' viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.7556 2.54999C13.9956 2.54987 13.2658 2.84811 12.7235 3.38056C12.1811 3.913 11.8695 4.63709 11.8556 5.39699L11.8276 6.97199C11.8259 7.05656 11.8064 7.13982 11.7704 7.21632C11.7343 7.29281 11.6824 7.36082 11.6182 7.41587C11.554 7.47092 11.4789 7.51178 11.3978 7.53575C11.3167 7.55973 11.2314 7.56629 11.1476 7.55499L9.58659 7.34299C7.53259 7.06299 5.56459 6.11699 3.67659 4.54399C3.07859 7.85399 4.24659 10.147 7.05959 11.916L8.80659 13.014C8.88959 13.0662 8.95855 13.1379 9.00743 13.2228C9.05631 13.3078 9.08363 13.4035 9.08698 13.5015C9.09034 13.5995 9.06963 13.6968 9.02668 13.7849C8.98372 13.873 8.91983 13.9493 8.84059 14.007L7.24859 15.17C8.19559 15.229 9.09459 15.187 9.84059 15.039C14.5586 14.097 17.6956 10.547 17.6956 4.69099C17.6956 4.21299 16.6836 2.54999 14.7556 2.54999ZM9.85559 5.35999C9.87304 4.39604 10.1745 3.45866 10.7221 2.66521C11.2698 1.87177 12.0394 1.25751 12.9345 0.899359C13.8296 0.541207 14.8105 0.455072 15.7543 0.65174C16.6982 0.848407 17.563 1.31914 18.2406 2.00499C18.9516 1.99999 19.5566 2.17999 20.9096 1.35999C20.5746 2.99999 20.4096 3.71199 19.6956 4.69099C19.6956 12.333 14.9986 16.049 10.2326 17C6.96459 17.652 2.21259 16.581 0.850586 15.159C1.54459 15.105 4.36459 14.802 5.99459 13.609C4.61559 12.7 -0.873414 9.46999 2.73359 0.785992C4.42659 2.76299 6.14359 4.10899 7.88359 4.82299C9.04159 5.29799 9.32559 5.28799 9.85659 5.36099L9.85559 5.35999Z" fill="#CAB603" />
                        </svg>

                    </a>

                    <a
                        href='https://www.linkedin.com/company/entrova/'
                        target={"_blank"}
                        rel="noopener noreferrer"
                    >
                        <svg className='w-5 h-4' viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.34766 6.55C10.2647 5.613 11.4587 5 12.8477 5C14.3063 5 15.7053 5.57946 16.7367 6.61091C17.7682 7.64236 18.3477 9.04131 18.3477 10.5V18H16.3477V10.5C16.3477 9.57174 15.9789 8.6815 15.3225 8.02513C14.6662 7.36875 13.7759 7 12.8477 7C11.9194 7 11.0292 7.36875 10.3728 8.02513C9.71641 8.6815 9.34766 9.57174 9.34766 10.5V18H7.34766V5.5H9.34766V6.55ZM2.34766 3.5C1.94983 3.5 1.5683 3.34196 1.287 3.06066C1.00569 2.77936 0.847656 2.39782 0.847656 2C0.847656 1.60218 1.00569 1.22064 1.287 0.93934C1.5683 0.658035 1.94983 0.5 2.34766 0.5C2.74548 0.5 3.12701 0.658035 3.40832 0.93934C3.68962 1.22064 3.84766 1.60218 3.84766 2C3.84766 2.39782 3.68962 2.77936 3.40832 3.06066C3.12701 3.34196 2.74548 3.5 2.34766 3.5ZM1.34766 5.5H3.34766V18H1.34766V5.5Z" fill="#CAB603" />
                        </svg>

                    </a>

                    <a
                        href='https://twitter.com/entrovahq'
                        target={"_blank"}
                        rel="noopener noreferrer"
                    >
                        <svg className='w-6 h-5' viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.4561 17.938C13.4733 17.6813 15.3172 16.6661 16.6129 15.0988C17.9085 13.5314 18.5588 11.5295 18.4314 9.49997C18.3041 7.47041 17.4087 5.56549 15.9273 4.17238C14.4459 2.77927 12.4896 2.00252 10.4561 2C8.42001 1.99848 6.46 2.77334 4.97539 4.16668C3.49078 5.56002 2.59329 7.46699 2.4658 9.49904C2.3383 11.5311 2.99039 13.5353 4.2892 15.1033C5.58801 16.6712 7.43579 17.685 9.45605 17.938V12H7.45605V10H9.45605V8.346C9.45605 7.009 9.59605 6.524 9.85605 6.035C10.1122 5.55119 10.508 5.15569 10.9921 4.9C11.3741 4.695 11.8491 4.572 12.6791 4.519C13.0081 4.498 13.4341 4.524 13.9571 4.599V6.499H13.4561C12.5391 6.499 12.1601 6.542 11.9341 6.663C11.7992 6.73236 11.6894 6.84215 11.6201 6.977C11.5001 7.203 11.4561 7.427 11.4561 8.345V10H13.9561L13.4561 12H11.4561V17.938ZM10.4561 20C4.93305 20 0.456055 15.523 0.456055 10C0.456055 4.477 4.93305 0 10.4561 0C15.9791 0 20.4561 4.477 20.4561 10C20.4561 15.523 15.9791 20 10.4561 20Z" fill="#CAB603" />
                        </svg>
                    </a>


                </div>
                <div className='mt-10 lg:mt-0 text-xs lg:text-sm text-white text-center lg:text-left ml-0 lg:ml-6 '>
                    <p>©{new Date().getFullYear()} Entrova. All Right Reserved.</p>
                </div>
            </Animate.Fade>
        </div>

        <p className='text-xs lg:text-sm text-yellow w-full mt-4 lg:text-left text-center'>
            91, 447 Broadway, 2nd Floor, New York, NY, New York, US, 10013
        </p>
    </footer>
}

const Home = () => {
    const [email, setEmail] = useState("");
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
        setSuccess(false)

        if (!email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email) || error) {
            setError("Invalid email address");
        } else {
            const payload = {
                email
            }

            setLoading(true)

            try {
                const resp = await axios.post("/api/join", payload, {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })

                if (resp?.data?.status === "success") {
                    setEmail("")
                    setSuccess(true)
                }
                setLoading(false)
            } catch (error) {
                setError("Failed! Try again.")
                setSuccess(false)
                setLoading(false)
            }
        }
    }
    return <main className='relative'>
        <div className='min-h-screen w-full relative landing-page-section'>
            <div className='container px-4 lg:px-6 mx-auto pt-16 flex flex-col justify-between'>
                <LogoSection />

                <div className='flex flex-row flex-wrap justify-between mt-24 lg:mt-16'>
                    <div className='w-full lg:w-6/12'>
                        <Animate.Fade bottom>
                            <h1 className='font-bold text-4xl md:text-4xl lg:text-5xl xl:text-6xl xl:leading-tight text-white'>
                            Excuse me! They are not dead <span className='text-green'>software</span> <span className='text-yellow'>products</span>
                            </h1>

                            <p className='mt-6 text-sm-15 md:text-base lg:text-lg leading-7 lg:leading-8 text-white'>
                              Entrova takes some of the best ‘but abandoned’ software products built by 
                              world-best engineers out there into products that enterprises are ready to buy
                            </p>

                            <div className='mt-12'>
                                <form onSubmit={handleSubmit} className='flex flex-col md:flex-row'>
                                    <input
                                        disabled={success}
                                        type={"email"}
                                        name="email"
                                        value={email}
                                        onChange={(e) => {
                                            setError("");
                                            setEmail(e.target.value)
                                        }}
                                        placeholder="Enter your email"
                                        className="w-full md:w-7/12 h-14 md:h-16 px-6  ring-0 focus:ring-0 outline-none focus:outline-none text-sm md:text-sm-15  form-control "
                                    />

                                    <button
                                        disabled={loading || success}
                                        type='submit'
                                        className='ml-0 md:ml-4 mt-4 md:mt-0 w-full md:w-auto h-14 md:h-16 px-8 text-sm md:text-sm-15 submit-btn'
                                    >
                                        {
                                            loading ? "Processing..." : "Let's talk"
                                        }
                                    </button>
                                </form>
                                {success && <p className='mt-3 text-yellow text-sm lg:text-sm-15'>🎉 Joined waitlist successfully!</p>}
                                {error && <p className='mt-3 text-red-700 text-sm lg:text-sm-15'>{error}</p>}
                            </div>
                        </Animate.Fade>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
        <div className='pt-20 md:pt-28 lg:pt-32 pb-32 lg:pb-40 bg-white brief-section'>
            <div className='container mx-auto px-4'>
                <h3 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl xl:leading-tight font-bold text-default'>The <span className='text-green'>$959</span> Billion Industry</h3>
                <div className='flex flex-row flex-wrap mt-10 lg:mt-14'>
                    <div className='w-full md:w-7/12 lg:w-6/12 xl:w-5/12 space-y-10'>
                        <Card
                            title={<>From the Best CTOs and Software Engineers</>}
                            content="We are an exclusive and invite-only platform that takes some of the best products out there from the best"
                        />
                        <Card
                            title={<>Our Products come from more than 30 countries</>}
                            content="We understand that there are billions of products from different parts of the world."
                        />
                        <Card
                            title={<>Product Transformation in 1 Months or Less</>}
                            content="Our engineering team take on your products and transform them for use."
                        />
                        <Card
                            title={<>Everything From Entrova Dashboard</>}
                            content="From Our dashboard, accept payment when an enterprise buys your product."
                        />
                    </div>

                    <div className='mx-auto w-10/12 lg:w-4/12 xl:5/12 mt-12 md:mt-0 relative lg:left-12 pb-24 md:pb-0'>
                        <div className=''>
                            <Image src={AppImage} alt="" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </main>

}

export default Home;
