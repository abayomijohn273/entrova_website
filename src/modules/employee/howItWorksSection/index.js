const Card = ({ icon, title, description }) => {
    return <div className="bg-white rounded-[32px] pt-16 pb-7 px-6 lg:px-8">
        <div className="">
            {icon}

        </div>
        <div className="mt-16">
            <h5 className="text-lg font-bold text-primary">
                {title}
            </h5>
            <p className="mt-3 text-base text-black">
                {description}

            </p>
        </div>
    </div>
}


const HowItWorksSection = () => {
    return (
        <section id="about" className={`relative bg-[#EFF6FF] pt-[7.5rem]`}>
            <div className='container px-4 lg:px-0 xl:px-8 2xl:px-0 mx-auto pb-[5rem] lg:pb-[8.938rem]'>
                <p className='text-base font-medium text-[#84CC16]'>
                    HOW IT WORKS
                </p>

                <p className='w-full md:w-8/12 lg:w-6/12 xl:w-5/12 text-primary font-bold text-[28px] leading-[38px]'>
                    We manage intricacies; you concentrate on expansion
                </p>

                <p className="w-full md:w-8/12 lg:w-6/12 xl:w-5/12 mt-4 text-[#1E1E1E] text-base">
                    Hiring internationally often involves complex entity
                    setup, HR, and payroll tasks. Our Employer of Record
                    solution simplifies this by seamlessly integrating
                    employees into your team on your behalf
                </p>

                <div className="mt-[40px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card
                        icon={<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24 28V32C20.8174 32 17.7652 33.2643 15.5147 35.5147C13.2643 37.7652 12 40.8174 12 44H8C8 39.7565 9.68571 35.6869 12.6863 32.6863C15.6869 29.6857 19.7565 28 24 28ZM24 26C17.37 26 12 20.63 12 14C12 7.37 17.37 2 24 2C30.63 2 36 7.37 36 14C36 20.63 30.63 26 24 26ZM24 22C28.42 22 32 18.42 32 14C32 9.58 28.42 6 24 6C19.58 6 16 9.58 16 14C16 18.42 19.58 22 24 22ZM36 43L30.122 46.09L31.244 39.546L26.49 34.91L33.062 33.954L36 28L38.94 33.954L45.51 34.91L40.756 39.546L41.876 46.09L36 43Z" fill="#012A36" />
                        </svg>}
                        title={"Diversify your talent pool "}
                        description={`Leverage legal entities in 100+ nations and receive
                    professional visa support to onboard employees
                    globally, no matter their location.`}
                    />
                    <Card
                        icon={<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M28 40V44H4V40H28ZM29.172 1.37201L44.728 16.928L41.9 19.76L39.78 19.052L34.826 24L46.14 35.314L43.312 38.142L32 26.828L27.192 31.636L27.758 33.9L24.928 36.728L9.372 21.172L12.202 18.344L14.462 18.908L27.05 6.32201L26.344 4.20201L29.172 1.37201ZM30.586 8.44401L16.444 22.584L23.514 29.656L37.656 15.516L30.586 8.44401Z" fill="#012A36" />
                        </svg>}
                        title={"Leave compliance to us"}
                        description={`We manage it all, ensuring your adherence to local laws 
                        regarding contracts, minimum wage, terminations, and more.`}
                    />
                     <Card
                        icon={<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.764 11.936C15.9515 9.38213 19.9156 7.99349 24 8C28.25 8 32.156 9.472 35.236 11.936L38.142 9.03L40.97 11.858L38.064 14.764C40.1794 17.4123 41.5041 20.6041 41.8856 23.972C42.2671 27.3399 41.69 30.7471 40.2206 33.8015C38.7512 36.8559 36.4492 39.4333 33.5796 41.2372C30.7101 43.041 27.3895 43.9981 24 43.9981C20.6106 43.9981 17.29 43.041 14.4204 41.2372C11.5508 39.4333 9.24887 36.8559 7.77945 33.8015C6.31004 30.7471 5.73288 27.3399 6.1144 23.972C6.49592 20.6041 7.8206 17.4123 9.93601 14.764L7.03001 11.86L9.85801 9.032L12.764 11.938V11.936ZM24 40C25.8385 40 27.659 39.6379 29.3576 38.9343C31.0561 38.2307 32.5995 37.1995 33.8995 35.8995C35.1995 34.5995 36.2308 33.0561 36.9343 31.3576C37.6379 29.659 38 27.8385 38 26C38 24.1615 37.6379 22.341 36.9343 20.6424C36.2308 18.9439 35.1995 17.4005 33.8995 16.1005C32.5995 14.8005 31.0561 13.7693 29.3576 13.0657C27.659 12.3621 25.8385 12 24 12C20.287 12 16.726 13.475 14.1005 16.1005C11.475 18.726 10 22.287 10 26C10 29.713 11.475 33.274 14.1005 35.8995C16.726 38.525 20.287 40 24 40ZM26 24H32L22 37V28H16L26 14.99V24ZM16 2H32V6H16V2Z" fill="#012A36"/>
                        </svg>}
                        title={"Reduce payroll time"}
                        description={`Make a single bulk payment, and we'll oversee complex tasks such as tax 
                        deductions, pensions, benefits, and government fees.`}
                    />
                </div>
            </div>
        </section>
    )
}

export default HowItWorksSection