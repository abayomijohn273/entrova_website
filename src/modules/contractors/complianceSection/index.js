const Card = ({ icon, title, description }) => {
    return <div className="bg-[#EFF6FF] rounded-[32px] pt-12 pb-7 px-6 lg:px-8">
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


const ComplianceSection = () => {
    return (
        <section id="about" className={`relative bg-white pt-[7.5rem]`}>
            <div className='container px-4 lg:px-0 xl:px-8 2xl:px-0 mx-auto pb-[5rem] lg:pb-[8.938rem]'>
                <div className="flex justify-start">
                    <p className="px-2.5 py-[0.625rem] bg-[#EFF6FF] rounded-[32px] text-[#012A36] text-xs font-medium leading-3 tracking-tight">
                        Compliance
                    </p>
                </div>

                <p className='mt-4 w-full md:w-8/12 lg:w-6/12 xl:w-5/12 text-primary font-bold text-[28px] leading-[38px]'>
                    Enhanced Team Experience
                </p>

                <p className="w-full md:w-8/12 lg:w-6/12 xl:w-5/12 mt-4 text-[#1E1E1E] text-base">
                    Contractors often miss out on the same benefits and privileges as employees. At Entrova,
                    we&apos;re transforming this by ensuring every team member enjoys the best possible experience.
                </p>

                <div className="mt-[40px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    <Card
                        icon={<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24 28V32C20.8174 32 17.7652 33.2643 15.5147 35.5147C13.2643 37.7652 12 40.8174 12 44H8C8 39.7565 9.68571 35.6869 12.6863 32.6863C15.6869 29.6857 19.7565 28 24 28ZM24 26C17.37 26 12 20.63 12 14C12 7.37 17.37 2 24 2C30.63 2 36 7.37 36 14C36 20.63 30.63 26 24 26ZM24 22C28.42 22 32 18.42 32 14C32 9.58 28.42 6 24 6C19.58 6 16 9.58 16 14C16 18.42 19.58 22 24 22ZM36 43L30.122 46.09L31.244 39.546L26.49 34.91L33.062 33.954L36 28L38.94 33.954L45.51 34.91L40.756 39.546L41.876 46.09L36 43Z" fill="#012A36" />
                        </svg>}
                        title={"All-in-One Hub for Contracts, Expenses, and Benefits"}
                        description={`Offer your team a centralized platform for easy access to essential resources, 
                        including contract management, time-off requests, expense tracking, and benefits access.`}
                    />
                    <Card
                        icon={<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M28 40V44H4V40H28ZM29.172 1.37201L44.728 16.928L41.9 19.76L39.78 19.052L34.826 24L46.14 35.314L43.312 38.142L32 26.828L27.192 31.636L27.758 33.9L24.928 36.728L9.372 21.172L12.202 18.344L14.462 18.908L27.05 6.32201L26.344 4.20201L29.172 1.37201ZM30.586 8.44401L16.444 22.584L23.514 29.656L37.656 15.516L30.586 8.44401Z" fill="#012A36" />
                        </svg>}
                        title={"Entrova Card Access for Your Team"}
                        description={`Empower your team with Entrova Cards, allowing them to securely use their earnings 
                        online or in physical stores, while maintaining balance stability in USD.`}
                    />
                    <Card
                        icon={<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 6H42C42.5304 6 43.0391 6.21071 43.4142 6.58579C43.7893 6.96086 44 7.46957 44 8V40C44 40.5304 43.7893 41.0391 43.4142 41.4142C43.0391 41.7893 42.5304 42 42 42H6C5.46957 42 4.96086 41.7893 4.58579 41.4142C4.21071 41.0391 4 40.5304 4 40V8C4 7.46957 4.21071 6.96086 4.58579 6.58579C4.96086 6.21071 5.46957 6 6 6ZM40 22H8V38H40V22ZM40 18V10H8V18H40ZM28 30H36V34H28V30Z" fill="#012A36" />
                        </svg>}
                        title={"Flexible Payment Options for Your Team"}
                        description={`With Entrova Advance, contractors can receive payments up to 30 days in 
                        advance without any risk to you, granting your team added financial flexibility.`}
                    />
                    <Card
                        icon={<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M39.876 16H42C43.0609 16 44.0783 16.4214 44.8284 17.1716C45.5786 17.9217 46 18.9391 46 20V28C46 29.0609 45.5786 30.0783 44.8284 30.8284C44.0783 31.5786 43.0609 32 42 32H39.876C39.3884 35.8666 37.5065 39.4224 34.5835 42C31.6605 44.5776 27.8972 46 24 46V42C27.1826 42 30.2348 40.7357 32.4853 38.4853C34.7357 36.2349 36 33.1826 36 30V18C36 14.8174 34.7357 11.7652 32.4853 9.51473C30.2348 7.2643 27.1826 6.00001 24 6.00001C20.8174 6.00001 17.7652 7.2643 15.5147 9.51473C13.2643 11.7652 12 14.8174 12 18V32H6C4.93913 32 3.92172 31.5786 3.17157 30.8284C2.42143 30.0783 2 29.0609 2 28V20C2 18.9391 2.42143 17.9217 3.17157 17.1716C3.92172 16.4214 4.93913 16 6 16H8.124C8.61206 12.1338 10.4942 8.57856 13.4171 6.00137C16.3401 3.42417 20.1031 2.00217 24 2.00217C27.8969 2.00217 31.6599 3.42417 34.5829 6.00137C37.5058 8.57856 39.3879 12.1338 39.876 16ZM6 20V28H8V20H6ZM40 20V28H42V20H40ZM15.52 31.57L17.64 28.178C19.5462 29.3721 21.7507 30.0036 24 30C26.2493 30.0036 28.4538 29.3721 30.36 28.178L32.48 31.57C29.9385 33.1623 26.9991 34.0046 24 34C21.0009 34.0046 18.0615 33.1623 15.52 31.57Z" fill="#012A36" />
                        </svg>}
                        title={"Comprehensive Healthcare, Benefits, and 24/7 Support"}
                        description={`Extend competitive healthcare options, discounts, and appealing perks from 
                        beloved brands to your team, backed by round-the-clock support.`}
                    />
                </div>
            </div>
        </section>
    )
}

export default ComplianceSection