const Card = ({ icon, title, description }) => {
  return <div className="bg-white rounded-[32px] pt-14 md:pt-16 lg:pt-20 pb-16 px-6 lg:px-8 
  shadow-[0px_20px_60px_10px_rgba(0,0,0,0.05)]">
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

const HowSection = () => {
  return (
    <section className={`relative bg-white`}>
      <div className='container px-4 lg:px-0 xl:px-8 2xl:px-0 mx-auto pt-[2.5rem] pb-[7rem] lg:pt-[3rem] lg:pb-[8.938rem]'>
        <div className='w-full mx-auto'>
          <h3 className='text-primary font-bold text-2xl md:text-3xl lg:text-5xl text-center'>
            How Entrova Works for You
          </h3>


          <div className="mt-14 md:mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card
              icon={<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40.5 9H7.49999C6.70434 9 5.94128 9.31607 5.37867 9.87868C4.81606 10.4413 4.49999 11.2044 4.49999 12V42C4.4966 42.5718 4.65825 43.1325 4.96555 43.6147C5.27286 44.0969 5.71276 44.4803 6.23249 44.7188C6.62965 44.9032 7.06211 44.9991 7.49999 45C8.20425 44.9983 8.88514 44.7472 9.42187 44.2913L9.43874 44.2781L15.5625 39H40.5C41.2956 39 42.0587 38.6839 42.6213 38.1213C43.1839 37.5587 43.5 36.7956 43.5 36V12C43.5 11.2044 43.1839 10.4413 42.6213 9.87868C42.0587 9.31607 41.2956 9 40.5 9ZM40.5 36H15C14.6398 36.0002 14.2917 36.13 14.0194 36.3656L7.49999 42V12H40.5V36ZM16.5 21C16.5 20.6022 16.658 20.2206 16.9393 19.9393C17.2206 19.658 17.6022 19.5 18 19.5H30C30.3978 19.5 30.7793 19.658 31.0607 19.9393C31.342 20.2206 31.5 20.6022 31.5 21C31.5 21.3978 31.342 21.7794 31.0607 22.0607C30.7793 22.342 30.3978 22.5 30 22.5H18C17.6022 22.5 17.2206 22.342 16.9393 22.0607C16.658 21.7794 16.5 21.3978 16.5 21ZM16.5 27C16.5 26.6022 16.658 26.2206 16.9393 25.9393C17.2206 25.658 17.6022 25.5 18 25.5H30C30.3978 25.5 30.7793 25.658 31.0607 25.9393C31.342 26.2206 31.5 26.6022 31.5 27C31.5 27.3978 31.342 27.7794 31.0607 28.0607C30.7793 28.342 30.3978 28.5 30 28.5H18C17.6022 28.5 17.2206 28.342 16.9393 28.0607C16.658 27.7794 16.5 27.3978 16.5 27Z" fill="#012A36" />
              </svg>}
              title={"Talk to Our Hiring Experts"}
              description={`We’ll understand your goals, technical needs, and team structure.`}
            />
            <Card
              icon={<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 28V32C20.8174 32 17.7652 33.2643 15.5147 35.5147C13.2643 37.7652 12 40.8174 12 44H8C8 39.7565 9.68571 35.6869 12.6863 32.6863C15.6869 29.6857 19.7565 28 24 28ZM24 26C17.37 26 12 20.63 12 14C12 7.37 17.37 2 24 2C30.63 2 36 7.37 36 14C36 20.63 30.63 26 24 26ZM24 22C28.42 22 32 18.42 32 14C32 9.58 28.42 6 24 6C19.58 6 16 9.58 16 14C16 18.42 19.58 22 24 22ZM36 43L30.122 46.09L31.244 39.546L26.49 34.91L33.062 33.954L36 28L38.94 33.954L45.51 34.91L40.756 39.546L41.876 46.09L36 43Z" fill="#012A36" />
              </svg>}
              title={"Get AI-Matched Talent"}
              description={`Our platform matches you with the perfect candidates in under 24 hours.`}
            />
            <Card
              icon={<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M45.9375 20.745C45.6591 20.359 45.2928 20.0448 44.869 19.8283C44.4452 19.6118 43.9759 19.4993 43.5 19.5H40.5V16.5C40.5 15.7044 40.1839 14.9413 39.6213 14.3787C39.0587 13.8161 38.2957 13.5 37.5 13.5H24.5006L19.3013 9.6C18.7811 9.21222 18.1501 9.00188 17.5012 9H7.5C6.70435 9 5.94129 9.31607 5.37868 9.87868C4.81607 10.4413 4.5 11.2044 4.5 12V39C4.5 39.3978 4.65804 39.7794 4.93934 40.0607C5.22064 40.342 5.60218 40.5 6 40.5H39.5813C39.8961 40.5 40.2029 40.401 40.4584 40.2169C40.7138 40.0328 40.9048 39.7731 41.0044 39.4744L46.3462 23.4487C46.4965 22.9978 46.5377 22.5177 46.4667 22.0478C46.3957 21.5778 46.2143 21.1314 45.9375 20.745ZM17.5012 12L23.1 16.2C23.3596 16.3947 23.6754 16.5 24 16.5H37.5V19.5H13.0819C12.4522 19.5 11.8385 19.698 11.3276 20.0662C10.8168 20.4343 10.4348 20.9539 10.2356 21.5513L7.5 29.7562V12H17.5012ZM38.5013 37.5H8.08125L13.0819 22.5H43.5L38.5013 37.5Z" fill="#012A36" />
              </svg>}
              title={"Seamless Onboarding"}
              description={`Our trial-to-hire system ensures you work with the right fit, risk-free.`}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowSection