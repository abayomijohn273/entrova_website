import LinkButton from '@/components/elements/linkButton'
import Image from 'next/image'
import Link from 'next/link'
import Logo from "../../../../public/images/svg/logo.svg"

const NavLink = ({ href, title }) => {
    return <div className='flex items-center'>
        <Link href={href} className='text-sm lg:text-sm-15 xl:text-base hover:text-secondary transition-all ease-in-out duration-150'>
            {title}
        </Link>
    </div>
}

const Header = () => {
    return (
        <header className={`sticky top-0 z-10 w-full overflow-hidden mx-auto bg-white`}>
            <nav className='container px-4 lg:px-0 xl:px-8 2xl:px-0 mx-auto py-4 md:py-5'>
                <div className='w-full flex flex-row justify-between items-center'>
                    <div className=''>
                        <Link href={"/"}>
                            <Image src={Logo} alt="entrova" />
                            <span className='sr-only'>entrova</span>
                        </Link>
                    </div>

                    <div className='hidden md:flex w-7/12  justify-center'>
                        <div className={`flex items-center space-x-4 lg:space-x-7`}>
                            <NavLink title='Employees' href='/employees' />
                            <NavLink title='Contractors' href='/contractors' />
                            <NavLink title='Integration' href='/integrations' />
                            <NavLink title='Payroll' href='/payroll' />
                            <NavLink title='API' href='/api' />
                        </div>
                    </div>

                    <div className='flex flex-1 justify-end'>
                        <div className={`flex items-center space-x-4`}>
                            <div className=''>
                                <LinkButton className="px-4 lg:px-8" title={"Book A Demo"} href={"/book-a-demo"} />
                            </div>
                            <div className='hidden lg:block'>
                                <LinkButton title={"Log In"} buttonType='' showArrow />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header