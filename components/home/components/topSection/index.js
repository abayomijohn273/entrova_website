import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import * as Animate from "react-reveal";
import axios from 'axios';
import Logo from "../../../../public/images/logo.svg"
import AppImage from "../../../../public/images/app.webp"

const LogoSection = () => {
    return <nav>
        <Link href={"/"}>
            <a className='font-bold text-2xl text-default'>
                <Image src={Logo} alt="Entrova" />
            </a>
        </Link>
    </nav>
}


const TopSection = () => {
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

    return (
        <div className='w-full relative landing-page-section'>
            <div className='container px-4 lg:px-6 mx-auto pt-12 pb-36 md:pb-48 lg:pb-52 flex flex-col justify-between'>
                <LogoSection />

                <div className='flex flex-row flex-wrap justify-center mt-24 lg:mt-20'>
                    <div className='w-full md:w-8/12 lg:w-7/12 xl:w-6/12 text-center'>
                        <Animate.Fade bottom>
                            <h1 className='font-bold text-4xl md:text-4xl lg:text-5xl xl:text-6xl xl:leading-tight text-white'>
                                AI-powered Multi-tenant Product Lab
                            </h1>

                            <p className='px-4 mt-6 text-sm-15 md:text-base lg:text-lg leading-6 lg:leading-8 text-white'>
                                Entrova takes some of the best ‘but abandoned’ software products built by
                                world-best engineers out there into products that enterprises are ready to buy
                            </p>

                            <div className='mt-12 lg:mt-14'>
                                <form onSubmit={handleSubmit} className='flex flex-col md:flex-row justify-center'>
                                    <input
                                        disabled={success}
                                        type={"email"}
                                        name="email"
                                        value={email}
                                        onChange={(e) => {
                                            setError("");
                                            setEmail(e.target.value)
                                        }}
                                        placeholder="Enter your email address"
                                        className="w-full md:w-8/12 h-14 md:h-16 px-6 placeholder:text-white  ring-0 focus:ring-0 outline-none focus:outline-none text-sm md:text-sm-15  form-control "
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
            </div>
        </div>
    )
}

export default TopSection